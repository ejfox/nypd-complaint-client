<template>
  <div>
    <ForceLayout :networkData="networkData" :width="width" :height="height" />
  </div>
</template>

<script>
// import * as d3 from "d3";
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import ForceLayout from "@/components/ForceLayout.vue";
import networkData from "@/data/ingredientUniverse_weight_modularity.r1.json";

export default {
  name: "Home",
  components: {
    ForceLayout,
  },
  data: function () {
    return {
      networkData,
      width: 1284,
      height: 1284,
    };
  },
  mounted: function () {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  },
};
</script>
