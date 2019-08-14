```jsx
ReactDOM.render(
  <ShardDocs
    title="Documentation title"
    structure={[
      {
        type: "collection",
        title: "Essentials",
        children: [
          {
            type: "page",
            title: "Get started",
            composition: [
              <h1>Get started</h1>
            ]
          },
          {
            type: "page",
            title: "API",
            composition: [<h1>API</h1>]
          }
        ]
      }
    ]}
  />,
  document.getElementById('app')
);
```
