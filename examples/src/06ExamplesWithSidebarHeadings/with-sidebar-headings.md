[Source code](https://github.com/fa-repo/shard-docs/tree/master/examples/src/06ExamplesWithSidebarHeadings)
```jsx
ReactDOM.render(
  <ShardDocs
    title="Documentation title"
    structure={[
      { type:"heading", heading: "Sidebar heading A" },
      { type: "page", title: "Page A", composition: [ <h1>Page A</h1> ] },
      { type: "page", title: "Page B", composition: [ <h1>Page B</h1> ] },
      { type: "page", title: "Page C", composition: [ <h1>Page C</h1> ] },
      { type: "heading", heading: "Sidebar heading B" },
      { type: "page", title: "Page D", composition: [ <h1>Page D</h1> ] },
      { type: "page", title: "Page E", composition: [ <h1>Page E</h1> ] },
      { type: "page", title: "Page F", composition: [ <h1>Page F</h1> ] },
    ]}
  />,
    document.getElementById('app')
);
```
