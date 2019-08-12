# With a description

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
