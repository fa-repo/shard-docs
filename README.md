# ShardDocs

A concise / extendable react component for handling documentation

[![NPM](https://img.shields.io/npm/v/shard-docs.svg)](https://www.npmjs.com/package/shard-docs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install
```bash
npm install --save @fa-repo/shard-docs
```

## Usage
```jsx
ReactDOM.render(
  <ShardDocs
    title="Documentation title"
    structure={[
      { heading: "Essentials" },
      { title: "Get started", shards: [ <h1>Get started</h1> ] }
    ]}
  />,
    document.getElementById('app')
);
```


## Documentation / examples
Found [here](/docs).

## License
[MIT](https://choosealicense.com/licenses/mit/)