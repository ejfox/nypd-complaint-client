<template>
  <Network
    v-if="loadedNetworkData"
    :networkData="loadedNetworkData"
    :width="width"
    :height="height"
    :highlightNodes="highlightNodes"
  />
</template>

<script>
import Network from "@/components/Network.vue";
import {NetworkCartographyOptions} from "@/types/global";

export default {
  name: "NetworkWrapper",
  components: {
    Network,
  },
  data() {
    return {
      loadedNetworkData: null,
    };
  },
  mounted() {
    // dynamically load network data if string
    if (typeof this.networkData === "string") {
      this.loadedNetworkData = require("../" + this.networkData);
    } else {
      this.loadedNetworkData = this.networkData;
    }
  },
  props: NetworkCartographyOptions,
};
</script>
<style>
</style>
