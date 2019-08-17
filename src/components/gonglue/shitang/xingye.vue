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
          src: require("../../../assets/images/gonglue/shitang/xingye/1.jpg")
        },
        {
          src: require("../../../assets/images/gonglue/shitang/xingye/2.jpg")
        },
        {
          src: require("../../../assets/images/gonglue/shitang/xingye/3.jpg")
        }
      ],
      item: {
        tit: "兴业苑",
        msg:
          "兴业苑食堂作为老一派的食堂，与中心食堂一样，不断沉淀自己的重庆味道，色香味俱全的家烧菜肴，总有一款美味属于家的味道。" +
          "推荐菜目：青椒炒肉丝，回锅肉，辣子鸡丁。" +
          "人均消费：9元"
      }
    };
  },
  components: {
    mySwiper
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/gonglue/su-shi.scss";
</style>




      