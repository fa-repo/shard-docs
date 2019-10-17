import setActiveCrumb from "./setActiveCrumb";

const document = {
  title: "Hello universe",
  type: "document",
  path: "/hello-universe",
  breadcrumbs: [
    { text: "~", link: "/" },
    { text: "Hello", link: "/hello" },
    { text: "Planet", link: "/hello/planet" },
    { text: "Galaxy", link: "/hello/planet/galaxy" },
    { text: "Universe", link: "/hello/planet/galaxy/universe" }
  ],
  document: null,
  isEmpty: true
};

test("setActiveCrumb() sets active crumb correctly", () => {
  expect(setActiveCrumb(document)).toStrictEqual({
    title: "Hello universe",
    type: "document",
    path: "/hello-universe",
    breadcrumbs: [
      { text: "~", link: "/", isActive: false },
      { text: "Hello", link: "/hello", isActive: false },
      { text: "Planet", link: "/hello/planet", isActive: false },
      { text: "Galaxy", link: "/hello/planet/galaxy", isActive: false },
      { text: "Universe", link: "/hello/planet/galaxy/universe", isActive: false }
    ],
    document: null,
    isEmpty: true
  });

  expect(setActiveCrumb(document, "/hello")).toStrictEqual({
    title: "Hello universe",
    type: "document",
    path: "/hello-universe",
    breadcrumbs: [
      { text: "~", link: "/", isActive: false },
      { text: "Hello", link: "/hello", isActive: true },
      { text: "Planet", link: "/hello/planet", isActive: false },
      { text: "Galaxy", link: "/hello/planet/galaxy", isActive: false },
      { text: "Universe", link: "/hello/planet/galaxy/universe", isActive: false }
    ],
    document: null,
    isEmpty: true
  });

  expect(setActiveCrumb(document, "/hello/planet")).toStrictEqual({
    title: "Hello universe",
    type: "document",
    path: "/hello-universe",
    breadcrumbs: [
      { text: "~", link: "/", isActive: false },
      { text: "Hello", link: "/hello", isActive: false },
      { text: "Planet", link: "/hello/planet", isActive: true },
      { text: "Galaxy", link: "/hello/planet/galaxy", isActive: false },
      { text: "Universe", link: "/hello/planet/galaxy/universe", isActive: false }
    ],
    document: null,
    isEmpty: true
  });

  expect(setActiveCrumb(document, "/hello/planet/galaxy")).toStrictEqual({
    title: "Hello universe",
    type: "document",
    path: "/hello-universe",
    breadcrumbs: [
      { text: "~", link: "/", isActive: false },
      { text: "Hello", link: "/hello", isActive: false },
      { text: "Planet", link: "/hello/planet", isActive: false },
      { text: "Galaxy", link: "/hello/planet/galaxy", isActive: true },
      { text: "Universe", link: "/hello/planet/galaxy/universe", isActive: false }
    ],
    document: null,
    isEmpty: true
  });

  expect(setActiveCrumb(document, "/hello/planet/galaxy/universe")).toStrictEqual({
    title: "Hello universe",
    type: "document",
    path: "/hello-universe",
    breadcrumbs: [
      { text: "~", link: "/", isActive: false },
      { text: "Hello", link: "/hello", isActive: false },
      { text: "Planet", link: "/hello/planet", isActive: false },
      { text: "Galaxy", link: "/hello/planet/galaxy", isActive: false },
      { text: "Universe", link: "/hello/planet/galaxy/universe", isActive: true }
    ],
    document: null,
    isEmpty: true
  });
});
