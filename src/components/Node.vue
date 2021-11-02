<template>
  <section>
    <!-- <h1>{{ JSON.stringify(node) }}</h1> -->
    <!-- <h1>{{ node.item.label }}</h1> -->
    <h2>
      {{ node.item.attributes.firstName }} {{ node.item.attributes.lastName }}
    </h2>
  </section>
</template>

<script>
// import * as d3 from 'd3'

export default {
  name: "Node",
  props: {
    node: Object,
  },
  data: function () {
    return {};
  },
  computed: {},
  mounted: function () {},
  methods: {},
};
</script>

<style></style>
