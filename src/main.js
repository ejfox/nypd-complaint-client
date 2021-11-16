import App from "./App.vue";
import { createApp } from "vue";

const networkCartography = (options) => {
  createApp(App, { options }).mount(options.domSelector);
};

networkCartography({
  domSelector: "#app",
  networkData: "data/ingredientUniverse_weight_modularity.r1.json",
  // networkData: {
  //   edges: [],
  //   nodes: [],
  // },
  width: window.innerWidth,
  height: window.innerHeight,
  highlightNodes: [],
});
