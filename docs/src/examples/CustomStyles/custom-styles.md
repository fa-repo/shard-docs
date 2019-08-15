```jsx
  <>
    <style
      dangerouslySetInnerHTML={{
        __html: `.shard-docs-sidebar { background: red; }`
      }}
    />
    <ShardDocs
      title="Documentation title"
      basePath="/examples/custom-styles"
      structure={[
        { type: "heading", heading: "Essentials" },
        { type: "page", title: "Get started", composition: [<h1>Get started</h1>] }
      ]}
    />
  </>
```
