import setActiveTreeNode from "./setActiveTreeNode";

const tree = [
  {
    title: null,
    type: "folder",
    path: '/',
    children: [
      {
        title: "Doc A",
        type: "document",
        path: "/doc-a",
        breadcrumbs: [{ link: "/", text: "~" }, { text: "Doc A", link: "/doc-a" }],
        document: null,
        isEmpty: true
      },
      {
        title: "Doc B",
        type: "document",
        path: "/doc-b",
        breadcrumbs: [{ link: "/", text: "~" }, { text: "Doc B", link: "/doc-b" }],
        document: null,
        isEmpty: true
      },
      {
        title: "Doc C",
        type: "document",
        path: "/doc-c",
        breadcrumbs: [{ link: "/", text: "~" }, { text: "Doc C", link: "/doc-c" }],
        document: null,
        isEmpty: true
      }
    ]
  }
];

test("setActiveTreeNode() correctly sets isActive", () => {
  expect(setActiveTreeNode(tree, '/doc-b')).toStrictEqual([
    {
      title: null,
      type: "folder",
      path: '/',
      isActive: false,
      children: [
        {
          title: "Doc A",
          type: "document",
          path: "/doc-a",
          breadcrumbs: [{ link: "/", text: "~" }, { text: "Doc A", link: "/doc-a" }],
          document: null,
          isEmpty: true,
          isActive: false
        },
        {
          title: "Doc B",
          type: "document",
          path: "/doc-b",
          breadcrumbs: [{ link: "/", text: "~" }, { text: "Doc B", link: "/doc-b" }],
          document: null,
          isEmpty: true,
          isActive: true
        },
        {
          title: "Doc C",
          type: "document",
          path: "/doc-c",
          breadcrumbs: [{ link: "/", text: "~" }, { text: "Doc C", link: "/doc-c" }],
          document: null,
          isEmpty: true,
          isActive: false
        }
      ]
    }
  ])
  expect(setActiveTreeNode(tree, '/doc-z')).toStrictEqual([
    {
      title: null,
      type: "folder",
      path: "/",
      isActive: false,
      children: [
        {
          title: "Doc A",
          type: "document",
          path: "/doc-a",
          breadcrumbs: [{ link: "/", text: "~" }, { text: "Doc A", link: "/doc-a" }],
          document: null,
          isEmpty: true,
          isActive: false
        },
        {
          title: "Doc B",
          type: "document",
          path: "/doc-b",
          breadcrumbs: [{ link: "/", text: "~" }, { text: "Doc B", link: "/doc-b" }],
          document: null,
          isEmpty: true,
          isActive: false
        },
        {
          title: "Doc C",
          type: "document",
          path: "/doc-c",
          breadcrumbs: [{ link: "/", text: "~" }, { text: "Doc C", link: "/doc-c" }],
          document: null,
          isEmpty: true,
          isActive: false
        }
      ]
    }
  ])
});
