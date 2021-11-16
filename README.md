# nypd-complaint-client

Stamen is releasing a new Open Source framework for exploring network data. The goal is to make it easy for anyone to explore and understand as many types of network data as possible.

To use it, simply provide any network that has the following format:

- Network data is an object that contains two arrays.

- The nodes array contains all the nodes in the network, and the edges array contains all the relationships or edges in the network.

Once your data is loaded onto your webpage, you can add it to the network visualization with the following code:

```
// Basic
networkCartography({
  networkData: 'data.json'
})

// Advanced
networkCartography({
  domSelector: 'graphContainer',
  networkData: {
    nodes: [{
      x: the x location of the node in space
      y: the y location of the node in space
      sizeAttribute: defaults to "Degree" but any numeric value can be used
      label: a string used to label that node
    }],
    edges: [{
      source: the id of the relationship source
      target: the id of the relationship target
      weight: **optional** the weight of the relationship
    }],
  },
  width: 900,
  height: 600,
  highlightNodes: []
})
```

## Examples

- A network of NYPD officer complaints
- Open source flavor network
- ??

## Internal

```
<SearchableNetwork
  :networkData={{
    nodes: [{
      x: 0.0, // Optional: the x location of the node in space
      y: 0.0, // Optional: the y location of the node in space
      // ...
    }],
    edges: [{
      property: //
    }],
  }}
  :highlightNodes={['Foo', 'Bar']}
  :height="600"
  :width="900"
/>
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
