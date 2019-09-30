import slugify from "slugify";
import kebabCase from "lodash/kebabCase";
import isArray from "lodash/isArray";

export default function fromSource(source, basePath, locationPath) {
  source = source.map(injectType);
  source = groupAdjacentTopLevelDocuments(source);
  source = transformItems(source, basePath, [], 0, locationPath);
  return source;
}

function injectType(item) {
  let type = false;

  if (Boolean(item.children)) type = "folder";
  else if (Boolean(item.document)) type = "document";
  else if (Boolean(item.externalLink)) type = "external";

  if (type === "folder") {
    item.children = item.children.map(injectType);
  }

  return { ...item, type };
}

function groupAdjacentTopLevelDocuments(source) {
  let result = [];

  source.map((item, i) => {
    if (item.type === "document" || item.type === "external") {
      if (result[i - 1] && result[i - 1].type === "_folder") {
        result[i - 1].children.push(item);
      } else {
        result[i] = { title: null, children: [item], type: "_folder" };
      }
    } else {
      result.push(item);
    }
    return item;
  });

  return result.map(item => (item.type === "_folder" ? { ...item, type: "folder" } : item));
}

function transformItems(items, basePath, breadcrumbs = [], depth = 0, locationPath) {
  basePath = basePath.replace(/\/+$/, "");

  return items
    .map(item => {
      if (item.type === "external") {
        return transformExternal(item, depth);
      }

      if (item.type === "folder" && item.title) {
        const folder = transformFolder(item, basePath, breadcrumbs, depth);
        const { path, breadcrumbs } = folder;
        console.log();
        folder.children = transformItems(item.children, path, breadcrumbs, depth + 1, locationPath);
        folder.isActive = folder.path === locationPath && "active";
        return folder;
      }

      if (item.type === "folder" && !item.title) {
        const folder = transformDiscreteFolder(item, basePath, breadcrumbs, depth);
        const { path, breadcrumbs } = folder;
        folder.children = transformItems(item.children, path, breadcrumbs, depth + 1, locationPath);
        return folder;
      }

      if (item.type === "document") {
        let document = transformDocument(item, basePath, breadcrumbs, depth);
        document.isActive = document.path === locationPath && "active";
        return document;
      }

      return null;
    })
    .filter(Boolean);
}

function transformExternal(item, depth) {
  return { type: "external", title: item.title, link: item.externalLink, depth };
}

function transformDocument(item, basePath, breadcrumbs, depth) {
  const slug = item.slug || slugify(kebabCase(item.title), { lower: true });
  const path = `${basePath}/${slug}`;

  return {
    type: "document",
    path: path,
    title: item.title,
    breadcrumbs: [...breadcrumbs, { text: item.title, link: path }],
    document: item.document,
    isEmpty: !isArray(item.document) || item.document.length <= 0,
    depth
  };
}

function transformFolder(item, basePath, breadcrumbs = [], depth) {
  const slug = item.slug || slugify(kebabCase(item.title), { lower: true });
  const path = `${basePath}/${slug}`;

  return {
    type: "folder",
    path: path,
    title: item.title,
    breadcrumbs: [...breadcrumbs, { text: item.title, link: path }],
    isEmpty: !item.children.length,
    depth
  };
}

function transformDiscreteFolder(item, basePath, breadcrumbs = [], depth) {
  const path = item.slug ? `${basePath}/${item.slug}` : basePath;

  return { type: "folder", depth, path };
}
