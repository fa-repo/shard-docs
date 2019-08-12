import slugify from "slugify";

function transformHeading({ heading }) {
  return { type: "heading", heading: heading };
}

function transformExternal({ title, link }) {
  return { type: "external", title: title, link: link };
}

function transformPage(item, basePath, breadcrumbs) {
  const path = basePath + "/" + slugify(item.title, { lower: true });
  return {
    type: "page",
    path: path,
    title: item.title,
    breadcrumbs: [...breadcrumbs, { text: item.title, link: path }],
    composition: item.composition
  };
}

function transformCollection(item, basePath, breadcrumbs = []) {
  const path = basePath + "/" + slugify(item.title, { lower: true });
  let composition = item.composition;

  return {
    type: "collection",
    path: path,
    title: item.title,
    breadcrumbs: [...breadcrumbs, { text: item.title, link: path }],
    composition: composition
  };
}

export default {
  heading: transformHeading,
  external: transformExternal,
  page: transformPage,
  collection: transformCollection
};
