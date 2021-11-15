import App from "./App.vue";
import { createApp } from "vue";

const networkCartography = (options) => {
  const { domNode, networkData, width, height, highlightNodes } = options;
  console.log(domNode, networkData, width, height, highlightNodes);

  createApp(App).mount("#app");
};

networkCartography({
  domNode: "test",
  networkData: "test",
  width: "test",
  height: "test",
  highlightNodes: "test",
});
