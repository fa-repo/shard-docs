
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
