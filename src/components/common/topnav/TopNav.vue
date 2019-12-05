<template>
  <div class="topnav" >
    <div class="topnav-left"><slot name="left"></slot></div>
    <div class="topnav-middle"><slot name="middle"></slot></div>
    <div class="topnav-right"><slot name="right"></slot></div>
  </div>
</template>



<style >
.topnav {
  text-align: center;
  height: 44px;
  line-height: 44px;
  display: flex ;
}
.topnav-left {
  height: 44px;
  width: 60px;
  /* background-color: #ccc; */
}
.topnav-right {
  height: 44px;
  width: 60px;
  /* background-color: rgb(204, 204, 204); */
}
.topnav-middle {
  height: 44px;
  flex: 1 ;
  /* background-color: lawngreen; */
}

</style>