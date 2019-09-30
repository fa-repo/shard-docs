import slugify from "slugify";
import kebabCase from "lodash/kebabCase";
import isArray from "lodash/isArray";

export default function fromSource(source, basePath) {
  source = source.map(injectType);
  source = groupAdjacentTopLevelDocuments(source);
  source = prepareItems(source, basePath);
  source = prepareBreadcrumbs(source, [{ link: basePath, text: "~" }]);
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

function prepareItems(items, basePath) {
  return items
    .map(item => {
      const { type, title } = item;
      const slug = slugify(kebabCase(title), { lower: true });
      const path = `${basePath}/${slug}`.replace(/\/+$/, "");

      if (type === "external") {
        return { type, title, link: item.externalLink };
      }

      if (type === "folder") {
        const isEmpty = !item.children.length;
        const children = prepareItems(item.children, path);

        if (title) {
          return { type, path, title, isEmpty, children };
        } else {
          return { type, path, children };
        }
      }

      if (type === "document") {
        const isEmpty = !isArray(item.document) || item.document.length <= 0;
        const document = item.document;

        return { type, path, title, isEmpty, document };
      }

      return null;
    })
    .filter(Boolean);
}

function prepareBreadcrumbs(items, breadcrumbs = []) {
  return items.map(item => {
    const crumb = { text: item.title, link: item.path };
    if (item.type === "folder") {
      if (item.title) {
        item.children = prepareBreadcrumbs(item.children, [...breadcrumbs, crumb]);
      } else {
        item.children = prepareBreadcrumbs(item.children, breadcrumbs);
      }
    } else if (item.type === "document") {
      return { ...item, breadcrumbs: [...breadcrumbs, crumb] };
    }
    return item;
  });
}
