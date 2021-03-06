import fromSource from "./fromSource";

const source = fromSource([
  { title: "Doc A", document: null },
  { title: "Doc B", document: null },
  { title: "Doc C", document: null },
  {
    title: "Folder",
    folder: [{ title: "Doc D", document: null }, { title: "Doc E", document: null }]
  },
  { title: "Github", externalLink: "http://github.com" },
  { title: "This is a purposefully invalid type that should be removed from the output", someType:'some-type'}
]);

test("fromSource() transforms data and returns tree", () => {
  expect(source.tree).toStrictEqual([
    {
      title: null,
      type: "folder",
      depth: 0,
      folder: [
        {
          title: "Doc A",
          type: "document",
          path: "/doc-a",
          breadcrumbs: [
            { link: "/", text: "~", isActive: false },
            { text: "Doc A", link: "/doc-a", isActive: false }
          ],
          document: null,
          isEmpty: true,
          isActive: false,
          depth: 1
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
          isEmpty: true,
          isActive: false,
          depth: 1
        },
        {
          title: "Doc C",
          type: "document",
          path: "/doc-c",
          breadcrumbs: [
            { link: "/", text: "~", isActive: false },
            { text: "Doc C", link: "/doc-c", isActive: false }
          ],
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
            { link: "/", text: "~", isActive: false },
            { text: "Folder", link: "/folder", isActive: false },
            { text: "Doc D", link: "/folder/doc-d", isActive: false }
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
            { link: "/", text: "~", isActive: false },
            { text: "Folder", link: "/folder", isActive: false },
            { text: "Doc E", link: "/folder/doc-e", isActive: false }
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
  expect(source.documents).toStrictEqual([
    {
      title: "Doc A",
      type: "document",
      path: "/doc-a",
      breadcrumbs: [
        { link: "/", text: "~", isActive: false },
        { text: "Doc A", link: "/doc-a", isActive: false }
      ],
      document: null,
      isEmpty: true,
      isActive: false,
      depth: 1
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
      isEmpty: true,
      isActive: false,
      depth: 1
    },
    {
      title: "Doc C",
      type: "document",
      path: "/doc-c",
      breadcrumbs: [
        { link: "/", text: "~", isActive: false },
        { text: "Doc C", link: "/doc-c", isActive: false }
      ],
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
        { link: "/", text: "~", isActive: false },
        { text: "Folder", link: "/folder", isActive: false },
        { text: "Doc D", link: "/folder/doc-d", isActive: false }
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
        { link: "/", text: "~", isActive: false },
        { text: "Folder", link: "/folder", isActive: false },
        { text: "Doc E", link: "/folder/doc-e", isActive: false }
      ],
      document: null,
      isEmpty: true,
      isActive: false,
      depth: 1
    }
  ])
);
