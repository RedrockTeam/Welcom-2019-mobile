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
          src: require("../../../assets/images/gonglue/sushe/xingye/1.jpg")
        },
        {
          src: require("../../../assets/images/gonglue/sushe/xingye/2.jpg")
        },
        {
          src: require("../../../assets/images/gonglue/sushe/xingye/3.jpg")
        },
        {
          src: require("../../../assets/images/gonglue/sushe/xingye/4.jpg")
        }
      ],
      item: {
        tit: "兴业苑",
        msg:
          "兴业苑（17-23）：屹立于悠悠重邮高处，周边风景秀丽，分布在太极运动场周围，" +
          "周边有学校的兴业苑食堂及众多的超市、商铺，校车从这里穿过。内部均设有独立卫生间，并在一些楼层设有洗衣机供大家使用，" +
          "根据每栋宿舍不同，楼层不同分为4人间、6人间两种。4人间都是上床下铺，而6人间则是上下铺与上床下桌的混搭。"
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