import slugify from "slugify";
import kebabCase from "lodash/kebabCase";

export default function fromSource(tree, basePath = "/") {
  tree = addTypes(tree);
  tree = addPaths(tree, basePath);
  tree = addBreadcrumbs(tree, [{ link: basePath, text: "~" }]);
  tree = addDepth(tree);
  tree = shapeItems(tree, basePath);
  tree = combineTopLevelAdjacentItems(tree);

  return {
    tree,
    documents: flattenDocuments(tree)
  };
}

/**
 * Loops through each item, child and grandchild detecting and injecting each
 * items type.
 * @param  {array} items Source tree.
 * @return {array}
 */
export function addTypes(items) {
  for (let i in items) {
    let type = false;

    if (items[i].hasOwnProperty("folder")) type = "folder";
    else if (items[i].hasOwnProperty("document")) type = "document";
    else if (items[i].hasOwnProperty("externalLink")) type = "external";

    if (type === "folder") items[i].folder = addTypes(items[i].folder);

    items[i].type = type;
  }

  return items;
}

/**
 * Combine all top level adjacent items (except folders) into discrete folders.
 * @param  {array} items Requires types to have been added to array with addTypes().
 * @return {array}
 */
export function combineTopLevelAdjacentItems(items) {
  const isDiscreteFolder = item => item && item.type === "folder" && !item.title;

  items = items.map(item => {
    return item.type !== "folder"
      ? { title: null, folder: [item], type: "folder", depth: 0 }
      : item;
  });

  return items.reduce((accumulator, item) => {
    const lastItem = accumulator[accumulator.length - 1];

    if (isDiscreteFolder(item) && isDiscreteFolder(lastItem)) {
      lastItem.folder = [...lastItem.folder, ...item.folder];
      accumulator[accumulator.length - 1] = lastItem;
    } else {
      accumulator = [...accumulator, item];
    }
    return accumulator;
  }, []);
}

/**
 * Loops through each item, child and grandchild detecting and calculating and
 * and each items path.
 * @param  {array} items Expects result of fromSource/combineTopLevelAdjacentDocuments().
 * @return {array}
 */
export function addPaths(items, basePath) {
  const getSlug = title => slugify(kebabCase(title), { lower: true });

  return items.map(item => {
    // Generate path and remove trailing / duplicate slashes
    item.path = `${basePath}/${getSlug(item.title)}`.replace(/\/+$/, "").replace(/\/+/g, "/");

    if (item.type === "folder") {
      item.folder = addPaths(item.folder, item.path);
    }

    return item;
  });
}

/**
 * Recursively loops through source tree adding breadcrumbs to all documents / folders.
 * @param  {array} items Expects result of fromSource/ shapeItems().
 * @return {array}
 */
export function addBreadcrumbs(items, breadcrumbs = []) {
  return items.map(item => {
    const crumb = { text: item.title, link: item.path };
    if (item.type === "folder") {
      if (item.title) {
        item.folder = addBreadcrumbs(item.folder, [...breadcrumbs, crumb]);
      } else {
        item.folder = addBreadcrumbs(item.folder, breadcrumbs);
      }
    } else if (item.type === "document") {
      return { ...item, breadcrumbs: [...breadcrumbs, crumb] };
    }
    return item;
  });
}

/**
 * Recursively loops through source tree adding depth level to all items.
 * @param  {array} items Expects result of fromSource/ shapeItems().
 * @return {array}
 */
export function addDepth(items, depth = 0) {
  return items.map(item => {
    if (item.type === "folder") {
      item.folder = addDepth(item.folder, depth + 1);
    }
    item.depth = depth;
    return item;
  });
}

/**
 * Loops through each item, child and grandchild shaping each item to the specs of its given type.
 * @param  {array} items Expects result of fromSource/combineTopLevelAdjacentDocuments().
 * @return {array}
 */
export function shapeItems(items) {
  return items
    .map(item => {
      const { type, title, path, depth } = item;
      if (type === "external") {
        const link = item.externalLink;
        return { type, title, link, depth };
      } else if (type === "folder" && title) {
        const isEmpty = !item.folder.length;
        const isActive = false;
        const folder = shapeItems(item.folder);
        return { type, path, title, isEmpty, isActive, folder, depth };
      } else if (type === "folder" && !title) {
        const folder = shapeItems(item.folder);
        return { type, path, folder, depth };
      } else if (type === "document") {
        const isEmpty = !Boolean(item.document);
        const isActive = false;
        const document = item.document;
        const breadcrumbs = item.breadcrumbs;
        return { type, path, title, isEmpty, isActive, breadcrumbs, document, depth };
      }
      return null;
    })
    .filter(Boolean);
}

/**
 * Loops through each item, child and grandchild grabbing each document.
 * @param  {array} source Expects source array to have been fed through addTypes..
 * @return {array} returns all documents in an array
 */
function flattenDocuments(items, accumulator = []) {
  for (const item of items) {
    if (item.type === "folder") {
      accumulator = flattenDocuments(item.folder, accumulator);
    } else if (item.type === "document") {
      accumulator = [...accumulator, item];
    }
  }
  return accumulator;
}
