[Source code](https://github.com/fa-repo/shard-docs/tree/master/examples/src/05ExamplesWithADescription)
```jsx
ReactDOM.render(
  <ShardDocs
    title="Documentation title"
    description="A description describing your documentation"
    structure={[
      { type: "heading", heading: "Essentials" },
      { type: "page", title: "Get started", shards: [ <h1>Get started</h1> ] }
    ]}
  />,
    document.getElementById('app')
);
```
