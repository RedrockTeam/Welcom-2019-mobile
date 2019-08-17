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
          src: require("../../../assets/images/gonglue/sushe/mingli/2.jpg")
        },
        {
          src: require("../../../assets/images/gonglue/sushe/mingli/4.jpg")
        },
        {
          src: require("../../../assets/images/gonglue/sushe/mingli/5.jpg")
        },
        {
          src: require("../../../assets/images/gonglue/sushe/mingli/6.jpg")
        },
      ],
      item: {
        tit: "明理苑",
        msg:
          "明理苑（24—31,39）：位于千喜鹤食堂正街上，可以俯瞰全校以及南山的部分美丽景色，这里也是重邮夏天最凉爽的地方。" +
          "可以坐私家车直达寝室，周围有两个超市和商铺，并且校车穿过。" +
          "每个寝室都为6人间，并设有独立卫生间，每一栋楼里面配置有洗衣机可供大家使用，应有尽有，可以尽情满足同学们的平日生活需求。"
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