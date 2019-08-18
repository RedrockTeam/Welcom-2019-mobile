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
          src: require("../../../assets/images/gonglue/sushe/ninjing/1.jpg")
        },
        {
          src: require("../../../assets/images/gonglue/sushe/ninjing/2.jpg")
        },
        {
          src: require("../../../assets/images/gonglue/sushe/ninjing/3.jpg")
        },
        {
          src: require("../../../assets/images/gonglue/sushe/ninjing/4.jpg")
        }
      ],
      item: {
        tit: "宁静苑",
        msg:
          "宁静苑（8-12，32-35）：坐落在美丽的情人坡旁，是妹子们散心聊天约会的好去处；" +
          " 篮球、网球、羽毛球这些周围球场为大家的锻炼提供了方便，与新校区紧连，周边分布有“千喜鹤”、“延生”等食堂。" +
          "宿舍基本为6人间基本情况与22-24相同且有独立的阳台、卫浴，床铺是上下铺与上床下桌的混搭，人流量很少，环境比较清静。"
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