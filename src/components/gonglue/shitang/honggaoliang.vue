<template>
  <div class="sushimain">

<my-swiper :slides="slides"></my-swiper>
    <div class="tit">{{item.tit}}</div>
    <div class="con">{{item.msg}}</div>
  </div>
</template>

<script>
import mySwiper from "@/components/base/swiper.vue";

export default {
  data() {
    return {
      slides: [
        {
          src: require("../../../assets/images/gonglue/shitang/honggaoliang/1.jpg")
        },
        {
          src: require("../../../assets/images/gonglue/shitang/honggaoliang/2.jpg")
        },
        {
          src: require("../../../assets/images/gonglue/shitang/honggaoliang/3.jpg")
        },
      
      ],
      item: {
        tit: "红高粱",
        msg:
          "红高粱食堂伫立于兴业苑食堂上方，红高粱食堂总具有自己的风格，不断推陈出新，在这里你可以品尝到新的变化！" +
          "推荐菜目：冒菜，花溪米线，土耳其烤肉饭。" +
          "人均消费：12元"
      }
    };


    

  },
  components: {
    mySwiper
  }
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/gonglue/su-shi.scss';
</style>