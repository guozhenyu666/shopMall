<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>
<style scoped>
    .tab-bar{
        display: flex ;
        position: fixed;
        width: 100% ;
        bottom: 0;
        left: 0;
        background-color: #ccc;
        text-align: center;
        box-shadow: -1px -1px 1px rgb(0, 0, 0,0.1);
    }
</style>