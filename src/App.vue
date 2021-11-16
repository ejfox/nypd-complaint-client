<template>
  <NetworkWrapper
    :v-if="options"
    :networkData="options.networkData"
    :width="options.width"
    :height="options.height"
    :highlightNodes="options.highlightNodes"
  />
</template>

<script>
import NetworkWrapper from "@/views/NetworkWrapper.vue";

export default {
  name: "App",
  components: {
    NetworkWrapper,
  },
  mounted() {
    console.log('App mounted', this.options);
  },
  props: {
    options: Object,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
