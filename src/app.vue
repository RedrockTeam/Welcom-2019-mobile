<template>
     <div class="yx_con">
         <!--头部顶栏-->
          <head-vue class="header"></head-vue>
          <!--留坑-->
          <router-view class="con"></router-view>
     </div>
</template>

<script>
import Header from './component/head.vue'

export default {
    components:{
        'head-vue' : Header
    }

}
</script>

<style scoped>
.header{
    position: fixed;
    top: 0;
    z-index: 999;
}
.yx_con{
    width: 100%;
    height: auto;
}
.con{
  position: relative;
  top: 30px;
}
</style>
