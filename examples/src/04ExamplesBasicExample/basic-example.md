[Source code](https://github.com/fa-repo/shard-docs/tree/master/examples/src/04ExamplesBasicExample)
```jsx
ReactDOM.render(
  <ShardDocs
    title="Documentation title"
    structure={[
      { type: "heading", heading: "Essentials" },
      { type: "page", title: "Page A", composition: [ <h1>Page A</h1> ] },
      { type: "page", title: "Page B", composition: [ <h1>Page B</h1> ] },
      { type: "page", title: "Page C", composition: [ <h1>Page C</h1> ] },
    ]}
  />,
    document.getElementById('app')
);
```
