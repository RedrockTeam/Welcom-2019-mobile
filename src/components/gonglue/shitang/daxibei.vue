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
          src: require("../../../assets/images/gonglue/shitang/daxibei/1.jpg")
        },
        {
          src: require("../../../assets/images/gonglue/shitang/daxibei/2.jpg")
        },
        {
          src: require("../../../assets/images/gonglue/shitang/daxibei/3.jpg")
        },


      ],
      item: {
        tit: "大西北",
        msg:
          "大西北背靠中心食堂，面朝着宁静苑4舍，同中心食堂一般，因着优越的地理位置成为了学生上课早餐首选。靠着北方师傅的一手好厨艺，" +
          "虽说是地处川渝地区，但也能品味到一两点奢侈的北方滋味。不同于其他食堂的是，大西北食堂的空间较小，堂食的学生较少，更多的青睐来自于它极为迅敏的打包速度。" +
          "推荐菜品：羊肉泡馍，大盘鸡盖饭。"+
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