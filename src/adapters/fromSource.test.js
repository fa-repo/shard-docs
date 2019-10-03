import fromSource from "./fromSource";

const source = [
  { title: "Doc A", document: null },
  { title: "Doc B", document: null },
  { title: "Doc C", document: null },
  {
    title: "Folder",
    children: [{ title: "Doc D", document: null }, { title: "Doc E", document: null }]
  },
  { title: "Github", externalLink: "http://github.com" }
];

test("fromSource() adapts data", () =>
  expect(fromSource(source)).toStrictEqual([
    {
      title: null,
      type: "folder",
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
    },
    {
      title: "Folder",
      type: "folder",
      path: "/folder",
      isEmpty: false,
      children: [
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
          isEmpty: true
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
          isEmpty: true
        }
      ]
    },
    {
      title: null,
      type: "folder",
      children: [{ title: "Github", type: "external", link: "http://github.com" }]
    }
  ]));
