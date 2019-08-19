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
          src: require("../../../assets/images/gonglue/sushe/zhixing/1.jpg")
        },
        {
          src: require("../../../assets/images/gonglue/sushe/zhixing/2.jpg")
        },
        {
          src: require("../../../assets/images/gonglue/sushe/zhixing/3.jpg")
        },
        {
          src: require("../../../assets/images/gonglue/sushe/zhixing/4.jpg")
        }
      ],
      item: {
        tit: "知行苑",
        msg:
          "知行苑（1-6，15,16）：位于中心食堂附近的1,5,6栋是学校现存最老的寝室，住宿条件比较差，整体情况是每层楼设有公用的卫生间，洗澡间。" +
          "但位于校园中心，上课，生活都极为便利。15.16栋寝室则在太极运动场旁边，楼下是商店和快递点，附近有红高粱和兴业苑食堂，十分便利。" +
          "1.5.6栋寝室为4人间，上下均为床铺，内部没有独立卫生间和阳台。15.16栋则为学校标准的6人间，上床下桌，配有阳台，独立卫生间。"
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