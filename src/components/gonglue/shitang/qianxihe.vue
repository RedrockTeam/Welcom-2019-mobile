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
          src: require("../../../assets/images/gonglue/shitang/qianxihe/1.jpg")
        },
        {
          src: require("../../../assets/images/gonglue/shitang/qianxihe/2.jpg")
        },
        {
          src: require("../../../assets/images/gonglue/shitang/qianxihe/3.jpg")
        }
      ],
      item: {
        tit: "千喜鹤",
        msg:
          "千喜鹤怕是重邮最具重庆味道的食堂了，不过这品味的不是麻辣鲜香的那一味，而是重庆高低井然错落有致的建筑风格，除去对着明理苑的正门，" +
          "你同时还可以从延生内部和楼下的楼梯直上。倘若说在食堂中挑一个最喜欢的，那千喜鹤一定是高居榜首的那一个，相比于食堂，" +
          "千喜鹤更像是一个美食广场，从西式快餐到中式早点，从日常正餐到饭后甜点，可谓是应有尽有。" +
          "推荐菜目：火锅米线，豆浆记忆，盐酥鸡。" +
          "人均消费：18元"
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