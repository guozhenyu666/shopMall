<template>
  <div id="app">
        <router-view></router-view>
        <TabBarMain></TabBarMain>
  </div>

</template>
<script>
import TabBarMain from  'common/tabbar/TabBarMain.vue' 
export default {
  components:{
      TabBarMain
  }
}
</script>
