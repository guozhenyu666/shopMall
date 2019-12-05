<template>
  <Swiper>
    <SwiperSlide>1111111</SwiperSlide>
    <SwiperSlide>22222222</SwiperSlide>
    <SwiperSlide>3333333</SwiperSlide>
  </Swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";
import {
  swiper as Swiper,
  swiperSlide as SwiperSlide
} from "vue-awesome-swiper";

// console.log(Swiper, SwiperSlide);

export default {
  components: {
    Swiper,
    SwiperSlide
  }
};
</script>

<style>
* {
  touch-action: none;
}
</style>