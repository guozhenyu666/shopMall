<template>
  <TopNav :style="{'background-color':bgc}">
    <span slot="left">{{title.left}}</span>
    <h2 slot="middle">{{title.middle}}</h2>
    <span slot="right">{{title.right}}</span>
  </TopNav>
</template>

<script>
let titleObj = {
  left: "left",
  middle: "middle",
  right: "right"
};
import TopNav from "./TopNav";
export default {
  props: {
    title: {
      type: Object,
      default: _ => {
        return { left: "left", middle: "middle", right: "right" };
      }
    },
    bgc: {
      type: String,
      default: "#ccc"
    }
  },

  components: {
    TopNav
  }
};
</script>

