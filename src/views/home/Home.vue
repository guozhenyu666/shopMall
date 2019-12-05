<template>
  <div>
    <TopNavMain :title="TopNavTitle"></TopNavMain>
    <SwiperMain></SwiperMain>
  </div>
</template>

<script>
import TopNavMain from "common/topnav/TopNavMain.vue"
import SwiperMain from 'common/swiper/SwiperMain.vue' 
export default {
  data() {
    return {
      TopNavTitle: { middle: "ShopMall" }
    };
  },
  components: {
    TopNavMain,
    SwiperMain
  }
};
</script>