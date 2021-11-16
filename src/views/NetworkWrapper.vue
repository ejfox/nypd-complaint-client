<template>
  <Network
    :v-if="Boolean(networkData)"
    :networkData="networkData"
    :width="width"
    :height="height"
    :highlightNodes="highlightNodes"
  />
</template>

<script>
import Network from "@/components/Network.vue";
import { NetworkCartographyOptions } from "@/types/global";

export default {
  name: 'NetworkWrapper',
  components: {
    Network,
  },
  props: NetworkCartographyOptions,
};
</script>
<style>
</style>
