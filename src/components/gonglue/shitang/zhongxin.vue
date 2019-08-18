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
          src: require("../../../assets/images/gonglue/shitang/zhongxin/1.jpg")
        },
        {
          src: require("../../../assets/images/gonglue/shitang/zhongxin/2.jpg")
        },
        {
          src: require("../../../assets/images/gonglue/shitang/zhongxin/3.jpg")
        },
 
      ],
      item: {
        tit: "中心食堂",
        msg:
          "中心食堂：与雨红莲广场毗连，又与风华操场隔道相望的它，由于与二教距离甚近，也常常是同学们打包就餐的不二选择。它以低廉的价格和繁多的种类，在同学们的心中占有绝对地位。" +
          "推荐菜目：早餐时段售卖的麻团，糍粑和荤素包子，糖醋里脊。" +

          "人均消费：8元"
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