import fromSource from "./fromSource";

const source = [
  { title: "Doc A", document: null },
  { title: "Doc B", document: null },
  { title: "Doc C", document: null },
  {
    title: "Folder",
    folder: [{ title: "Doc D", document: null }, { title: "Doc E", document: null }]
  },
  { title: "Github", externalLink: "http://github.com" }
];

test("fromSource() transforms data and returns tree", () =>{

  expect(fromSource(source).tree).toStrictEqual([
    {
      title: null,
      type: "folder",
      depth: 0,
      folder: [
        {
          title: "Doc A",
          type: "document",
          path: "/doc-a",
          breadcrumbs: [{ link: "/", text: "~" }, { text: "Doc A", link: "/doc-a" }],
          document: null,
          isEmpty: true,
          isActive: false,
          depth: 1
        },
        {
          title: "Doc B",
          type: "document",
          path: "/doc-b",
          breadcrumbs: [{ link: "/", text: "~" }, { text: "Doc B", link: "/doc-b" }],
          document: null,
          isEmpty: true,
          isActive: false,
          depth: 1
        },
        {
          title: "Doc C",
          type: "document",
          path: "/doc-c",
          breadcrumbs: [{ link: "/", text: "~" }, { text: "Doc C", link: "/doc-c" }],
          document: null,
          isEmpty: true,
          isActive: false,
          depth: 1
        }
      ]
    },
    {
      title: "Folder",
      type: "folder",
      path: "/folder",
      isEmpty: false,
      isActive: false,
      depth: 0,
      folder: [
        {
          title: "Doc D",
          type: "document",
          path: "/folder/doc-d",
          breadcrumbs: [
            { link: "/", text: "~" },
            { text: "Folder", link: "/folder" },
            { text: "Doc D", link: "/folder/doc-d" }
          ],
          document: null,
          isEmpty: true,
          isActive: false,
          depth: 1
        },
        {
          title: "Doc E",
          type: "document",
          path: "/folder/doc-e",
          breadcrumbs: [
            { link: "/", text: "~" },
            { text: "Folder", link: "/folder" },
            { text: "Doc E", link: "/folder/doc-e" }
          ],
          document: null,
          isEmpty: true,
          isActive: false,
          depth: 1
        }
      ]
    },
    {
      title: null,
      type: "folder",
      folder: [
        { title: "Github", type: "external", link: "http://github.com", depth: 1 }
      ],
      depth: 0
    }
  ])}
);

test("fromSource() transforms data and returns documents in a flat array", () =>
  expect(fromSource(source).documents).toStrictEqual([
    {
      title: "Doc A",
      type: "document",
      path: "/doc-a",
      breadcrumbs: [{ link: "/", text: "~" }, { text: "Doc A", link: "/doc-a" }],
      document: null,
      isEmpty: true,
      isActive: false,
      depth: 1
    },
    {
      title: "Doc B",
      type: "document",
      path: "/doc-b",
      breadcrumbs: [{ link: "/", text: "~" }, { text: "Doc B", link: "/doc-b" }],
      document: null,
      isEmpty: true,
      isActive: false,
      depth: 1
    },
    {
      title: "Doc C",
      type: "document",
      path: "/doc-c",
      breadcrumbs: [{ link: "/", text: "~" }, { text: "Doc C", link: "/doc-c" }],
      document: null,
      isEmpty: true,
      isActive: false,
      depth: 1
    },
    {
      title: "Doc D",
      type: "document",
      path: "/folder/doc-d",
      breadcrumbs: [
        { link: "/", text: "~" },
        { text: "Folder", link: "/folder" },
        { text: "Doc D", link: "/folder/doc-d" }
      ],
      document: null,
      isEmpty: true,
      isActive: false,
      depth: 1
    },
    {
      title: "Doc E",
      type: "document",
      path: "/folder/doc-e",
      breadcrumbs: [
        { link: "/", text: "~" },
        { text: "Folder", link: "/folder" },
        { text: "Doc E", link: "/folder/doc-e" }
      ],
      document: null,
      isEmpty: true,
      isActive: false,
      depth: 1
    }
  ])
);
