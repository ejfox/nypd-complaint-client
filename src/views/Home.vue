<template>
  <div>
    <input v-model="searchQuery" id="name-search" />
    <ForceLayout
      :networkData="networkData"
      :width="width"
      :height="height"
      :highlightNodes="highlightNodes" />
    <section id="highlight-node-list">
      <div
        class="node-item"
        v-for="node in highlightNodesRaw"
        :key="node.id"
        @click="nodeClick(node)">
        <Node :node="node" />
      </div>
    </section>
  </div>
</template>

<script>
// import * as d3 from "d3";
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import ForceLayout from '@/components/ForceLayout.vue'
import Node from '@/components/Node.vue'
import networkData from '@/data/ingredientUniverse_weight_modularity.r1.json'

import Fuse from 'fuse.js'

export default {
  name: 'Home',
  components: {
    ForceLayout,
    Node
  },
  data: function () {
    return {
      networkData,
      width: 1284,
      height: 1284,
      nameSearch: null,
      searchQuery: '',
      highlightNodes: [],
      highlightNodesRaw: []
    }
  },
  methods: {
    nodeClick: function (node) {
      console.log('nodeclick', node)
      this.highlightNodesRaw = [node]
      this.highlightNodes = [node.item.id]
    }
  },
  watch: {
    searchQuery: function (val) {
      if (this.nameSearch && val.length > 5) {
        const searchResults = this.nameSearch.search(val)
        this.highlightNodesRaw = searchResults
        this.highlightNodes = searchResults.map((d) => {
          return d.item.id
        })
      }
    }
  },
  mounted: function () {
    this.width = window.innerWidth
    this.height = window.innerHeight

    this.nameSearch = new Fuse(this.networkData.nodes, {
      includeScore: true,
      threshold: 0.25,
      findAllMatches: true,
      // keys: ["attributes.firstName", "attributes.lastName"],
      keys: ['label']
    })
  }
}
</script>
<style>
#name-search {
  padding: 0.5em;
  font-size: 1.3rem;
}

#highlight-node-list {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 10vw;
  height: 100vh;
  overflow: auto;
}

#highlight-node-list .node-item {
  color: red;
  text-align: left;
  /* border-bottom: 1px solid black; */
  font-size: 10px;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.3rem;
  cursor: pointer;
  background-color: black;
}
</style>
