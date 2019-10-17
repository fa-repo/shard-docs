import filterDocuments from "./filterDocuments";

const documents = [
  {
    title: "Doc A",
    type: "document",
    path: "/doc-a",
    breadcrumbs: [
      { link: "/", text: "~", isActive: false },
      { text: "Doc A", link: "/doc-a", isActive: false }
    ],
    document: null,
    isEmpty: true
  },
  {
    title: "Doc B",
    type: "document",
    path: "/doc-b",
    breadcrumbs: [
      { link: "/", text: "~", isActive: false },
      { text: "Doc B", link: "/doc-b", isActive: false }
    ],
    document: null,
    isEmpty: true
  }
];

test("filterDocuments() filters correctly", () => {
  expect(filterDocuments(documents)).toStrictEqual([
    {
      title: "Doc A",
      type: "document",
      path: "/doc-a",
      breadcrumbs: [
        { link: "/", text: "~", isActive: false },
        { text: "Doc A", link: "/doc-a", isActive: false }
      ],
      document: null,
      isEmpty: true
    },
    {
      title: "Doc B",
      type: "document",
      path: "/doc-b",
      breadcrumbs: [
        { link: "/", text: "~", isActive: false },
        { text: "Doc B", link: "/doc-b", isActive: false }
      ],
      document: null,
      isEmpty: true
    }
  ])
  expect(filterDocuments(documents, '/doc-a')).toStrictEqual([
    {
      title: "Doc A",
      type: "document",
      path: "/doc-a",
      breadcrumbs: [
        { link: "/", text: "~", isActive: false },
        { text: "Doc A", link: "/doc-a", isActive: false }
      ],
      document: null,
      isEmpty: true
    }
  ])
});
