import slugify from "slugify";
import kebabCase from "lodash/kebabCase";
import isArray from "lodash/isArray";

function transformHeading({ heading }) {
  return { type: "heading", heading: heading };
}

function transformExternal({ external, link }, depth) {
  return { type: "external", title: external, link, depth };
}

function transformPage(item, basePath, breadcrumbs, depth) {
  const slug = item.slug || slugify(kebabCase(item.page), { lower: true });
  const path = `${basePath}/${slug}`;

  return {
    type: "page",
    path: path,
    title: item.page,
    breadcrumbs: [...breadcrumbs, { text: item.page, link: path }],
    composition: item.composition,
    isEmpty: !isArray(item.composition) || item.composition.length <= 0,
    depth
  };
}

function transformGroup(item, basePath, breadcrumbs = [], depth) {
  const slug = item.slug || slugify(kebabCase(item.page), { lower: true });
  const path = `${basePath}/${slug}`;

  return {
    type: "group",
    path: path,
    title: item.group,
    breadcrumbs: [...breadcrumbs, { text: item.group, link: path }],
    composition: item.composition,
    depth
  };
}

function transformDiscreteGroup(item, basePath, breadcrumbs = [], depth) {
  const path = item.slug ? `${basePath}/${item.slug}` : basePath;
  return { type: "discrete-group", depth, path };
}

export default {
  heading: transformHeading,
  external: transformExternal,
  page: transformPage,
  group: transformGroup,
  discreteGroup: transformDiscreteGroup
};
