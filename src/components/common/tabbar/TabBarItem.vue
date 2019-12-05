<template>
  <div class="item-bar" @click="link" :style="getFontColor"   >
    <!-- 选中状态 -->
    <slot name="ItemBarImg-active" v-if="!isActive"></slot>
    <!-- 未选中状态 -->
    <slot name="ItemBarImg-leave" v-else-if="isActive"></slot>
    <slot name="ItemBar-content"></slot>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    // 未选中时----字体颜色
    fontColor: {
      type: String,
      default: "black"
    },
    // 选中时---字体颜色
    fontColorActive :{
        type:String ,
        default:"red" 
    }
  },
  computed: {
    // 根据路由 确定当前状态.   true 激活状态     /     false 未激活状态
    isActive() {  
      return this.$route.fullPath.includes(this.path) ? true : false;
    },
    //
    getFontColorActive(){
       return  this.fontColorActive ? this.fontColorActive : this.fontColor
    },

    //
    getFontColor() {
      return  this.isActive ? {color:this.getFontColorActive } : {color:this.fontColor}
    }
  },
  methods: {
    link() {
      this.$router.push(this.path);
    }
  }
};
</script>

<style scoped>
.item-bar {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>