import App from "./App.vue";
import { createApp } from "vue";
import networkData from "@/data/ingredientUniverse_weight_modularity.r1.json";

const networkCartography = (options) => {
  const { domSelector, networkData, width, height, highlightNodes } = options;
  console.log(domSelector, networkData, width, height, highlightNodes);

  createApp(App, { options }).mount(domSelector);
};

setTimeout(
  () =>
    networkCartography({
      domSelector: "#app",
      networkData,
      width: window.innerWidth,
      height: window.innerHeight,
      highlightNodes: [],
    }),
  500
);
