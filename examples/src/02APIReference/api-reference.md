## ShardDocs properties

| Name          | Type   | Default   | Description                                                                  |
|---------------|--------|-----------|------------------------------------------------------------------------------|
| `title`       | string | `""`      | A title for your documentation. Appears at the top of the sidebar.           |
| `description` | string | `""`      | A description for your documentation. Appears below the title in the sidebar.|
| `structure`   | array  | `[]`      | An array of objects representing each page in docs. See below for help.      |
| `basePath`    | string | `"/docs"` | A path prepended to every page.                                              |
| `baseComposition`  | string | `[]` | A doc that appears at the base path. Defaults to first doc in `structure` if not set.                                |

### Configuring ShardDocs structure

The structure of ShardDocs is organised as a tree to indicate the relationship between each page and the indentation levels in the sidebar.

```js
const structure = [
  { type: "page", title: "Install", composition: [ <h1>Install</h1> ] },
  { type: "page", title: "Basic usage", composition: [ <h1>Basic usage</h1> ] },
  {
    type: "collection",
    title: "Examples",
    children: [
      { type: "page", title: "Use case A", composition: [ <h1>Use case A</h1> ] },
      { type: "page", title: "Use case B", composition: [ <h1>Use case B</h1> ] }
    ]
  },
  { type: "external", title: "Github", link: "https://github.com" },
]
```

#### Page object properties
An object representing a page in the documentation structure.
| Name          | Type     | Default | Required | Description                                                       |
|---------------|----------|---------|----------|-------------------------------------------------------------------|
| `type`        | string   | `""`    | Required | Type can only be `"page"`.                                        |
| `title`       | string   | `""`    | Required | The page title.                                                   |
| `slug`        | string   | `""`    |          | A custom slug. Defaults to slugified version of title.            |
| `composition` | array    | `[]`    |          | An array of components that will be rendered in order when viewing this page. |

#### Collection object properties
An object containing an array of pages in the documentation structure.
| Name       | Type   | Default | Required | Description                                                            |
|------------|--------|---------|----------|------------------------------------------------------------------------|
| `type`     | string | `""`    | Required | Must be `"collection"`.                                                |
| `title`    | string | `""`    | Required | The collection title.                                                  |
| `slug`     | string | `""`    |          | A custom slug. Defaults to slugified version of title.                 |
| `children` | array  | `[]`    |          | An array of objects in the collection.                                 |
| `indent`   | array  | `2`     |          | The distance to indent the children of this collection in the sidebar. |

#### Heading object properties
An object that displays a heading in the sidebar menu.
| Name       | Type   | Default | Required | Description                                                            |
|------------|--------|---------|----------|------------------------------------------------------------------------|
| `type`     | string | `""`    | Required | Must be `"heading"`.                                                   |
| `heading`  | string | `""`  | Required | The heading text.                                                        |

#### External object properties
An object that represents an external link in the sidebar menu.
| Name       | Type   | Default | Required | Description                                                            |
|------------|--------|---------|----------|------------------------------------------------------------------------|
| `type`     | string | `""`    | Required | Must be `"external"`.                                                  |
| `title`    | string | `""`  | Required | The link title.                                                          |
| `link`     | string | `""`  | Required | The link destination.                                                    |
