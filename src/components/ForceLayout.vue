<template>
  <section>
    <div v-if="networkData">
      <span>{{ networkData.nodes.length }} nodes</span>
      <span>{{ networkData.edges.length }} edges</span>
      <div id="q5-container" ref="q5canvas"></div>
    </div>
  </section>
</template>

<script>
import * as d3 from "d3";
// import d3ForceLimit from "d3-force-limit";

export default {
  name: "ForceLayout",
  props: {
    networkData: Object,
    width: Number,
    height: Number,
  },
  data: function () {
    return {
      showNodes: false,
      showEdges: true,
      highlightNodeIDs: ["13858"],
      q5: null,
      simulation: null,
      xExtent: [0, 0],
      yExtent: [0, 0],
      yScale: null,
      xScale: null,
    };
  },
  computed: {},
  mounted: function () {
    this.q5 = new Q5(); // eslint-disable-line

    this.xExtent = d3.extent(this.networkData.nodes, (d) => d.x);
    this.yExtent = d3.extent(this.networkData.nodes, (d) => d.y);

    this.xScale = d3.scaleLinear().domain(this.xExtent).range([0, this.width]);
    this.yScale = d3.scaleLinear().domain(this.yExtent).range([0, this.height]);

    this.setup();
    this.draw();
  },
  updated: function () {},
  unmounted: function () {
    this.q5.remove();
  },
  methods: {
    setup: function () {
      this.q5.createCanvas(this.width, this.height);

      this.$refs.q5canvas.appendChild(this.q5.canvas);

      this.networkData.nodes.map((n) => {
        n.x = this.xScale(n.x);
        n.y = this.yScale(n.y);
      });

      //   const forceManyBody = d3.forceManyBody();
      const forceLink = d3.forceLink(this.networkData.edges).id((n) => n.id);
      this.simulation = d3
        .forceSimulation(this.networkData.nodes)
        // .force("charge", forceManyBody)
        // .force(
        //   "limit",
        //   d3ForceLimit().x0(0).x1(this.width).y0(0).y1(this.height)
        // )
        .force("link", forceLink.strength(0))
        .on("tick", this.ticked);
    },
    ticked: function () {
      this.draw();
    },
    draw: function () {
      this.q5.background(0);

      if (this.showEdges) {
        this.networkData.edges.forEach((l) => {
          const linkTouchesHighlightNode =
            this.highlightNodeIDs.includes(l.source.id) ||
            this.highlightNodeIDs.includes(l.target.id);
          if (linkTouchesHighlightNode) {
            this.q5.strokeWeight(2.5);
            this.q5.stroke("rgba(255,10,10,0.9)");
          } else {
            this.q5.strokeWeight(0.25);
            this.q5.stroke("rgba(255,255,255,0.1)");
          }
          this.q5.line(l.source.x, l.source.y, l.target.x, l.target.y);
        });
      }

      this.q5.noStroke();

      if (this.showNodes) {
        this.networkData.nodes.forEach((n) => {
          const isHighlightNode = this.highlightNodeIDs.includes(n.id);
          if (isHighlightNode) {
            this.q5.fill("rgba(255,10,10,0.9)");
          } else {
            this.q5.fill("rgba(255,255,255,1)");
          }
          // this.q5.fill(n.color);
          this.q5.circle(n.x, n.y, 1.5);
        });
      }
    },
  },
};
</script>

<style></style>
