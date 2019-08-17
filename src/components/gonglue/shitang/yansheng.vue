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
          src: require("../../../assets/images/gonglue/shitang/yansheng/1.jpg")
        },
        {
          src: require("../../../assets/images/gonglue/shitang/yansheng/2.jpg")
        },
        {
          src: require("../../../assets/images/gonglue/shitang/yansheng/3.jpg")
        },
     
      ],
      item: {
        tit: "延生食堂",
        msg:
          "被宁静苑和知行苑两相环绕，算的是颇为优越的地理位置。没有富丽堂皇的过分修饰，多的是一览无余的简单明了。" +
          "亲切，日常，这两个词来形容延生食堂最合适不过了，亲切的是带有两三分家长里短的味道，日常的是朝朝暮暮交错间穿梭的身影。" +
          "推荐菜目：冒菜，鲜榨豆浆，羊肉粉。"+
          "人均消费：10元"
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