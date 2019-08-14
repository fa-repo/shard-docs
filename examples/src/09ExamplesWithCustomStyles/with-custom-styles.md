[Source code](https://github.com/fa-repo/shard-docs/tree/master/examples/src/09ExamplesWithCustomStyles)
```jsx
ReactDOM.render(<>
  <style
    dangerouslySetInnerHTML={{
      __html: `.shard-docs-sidebar {
          background: red;
        }`
    }}
  />
  <ShardDocs
    title="Documentation title"
    structure={[
      { heading: "Sidebar heading" },
      { title: "Get started", shards: [ <h1>Get started</h1> ] }
    ]}
  /></>,
    document.getElementById('app')
);
```
