<template>
  <TabBar>
    <TabBarItem
      v-for="item in contentConfig"
      :key="item.id"
      :path="item.path"
      :fontColor="item.fontColor"
      :fontColorActive="item.fontColorActive"
    >
      <img slot="ItemBarImg-active" :src="item.imgSrc" :style="imgStyleConfig" />
      <img slot="ItemBarImg-leave" :src="item.imgSrcActive" :style="imgStyleConfig" />
      <span slot="ItemBar-content" :style="fontStyleConfig">{{item.fontContent }}</span>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from "./TabBar";
import TabBarItem from "./TabBarItem";

export default {
  data() {
    return {
      // 每个切换信息的配置项
      contentConfig: [
        {
          id: 1,
          path: "/home",
          fontContent: "home",
          imgSrc: require("./img/home.svg"),
          imgSrcActive: require("./img/home_active.svg"),
          fontColor: "#333",
          fontColorActive: "red"
        },
        {
          id: 2,
          path: "/category",
          fontContent: "category",
          imgSrc: require("./img/category.svg"),
          imgSrcActive: require("./img/category_active.svg"),
          fontColor: "#333",
          fontColorActive: "red"
        },
        {
          id: 3,
          path: "/cart",
          fontContent: "cart",
          imgSrc: require("./img/cart.svg"),
          imgSrcActive: require("./img/cart_active.svg"),
          fontColor: "#333",
          fontColorActive: "red"
        },
        {
          id: 5,
          path: "/profile",
          fontContent: "profile",
          imgSrc: require("./img/profile.svg"),
          imgSrcActive: require("./img/profile_active.svg"),
          fontColor: "#333",
          fontColorActive: "red"
        }
      ],
      // 图片相关的样式设置.
      imgStyleConfig :{
         'margin-top': '5px',
          'height': '24px',
          'width': '24px',
      },

      //字体相关样式的设置  
      fontStyleConfig: {
        'font-size':'14px' ,
        // 'font-style':'italic'
      }
    };
  },

  components: {
    TabBar,
    TabBarItem
  }
};
</script>