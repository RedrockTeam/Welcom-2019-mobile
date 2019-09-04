<template>
  <div id="main">
    <div v-for="item in items" :key="item.index" class="item">
      <img class="img" :src="item.imgsrc" />
      <p class="tit">{{item.title}}</p>
      <div class="say">
        <img class="icon" src="../../../assets/images/gonglue/zhoubian/icon.png" />
        <p class="content">{{item.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import yunda from "../../../assets/images/gonglue/zhoubian/kuaidi/yunda.jpg"
import jingshunyuan from "../../../assets/images/gonglue/zhoubian/kuaidi/jingshunyuan.jpg"
import zhongtong from "../../../assets/images/gonglue/zhoubian/kuaidi/zhongtong.jpg"
import youzheng from "../../../assets/images/gonglue/zhoubian/kuaidi/youzheng.jpg"
import xiaoneiyouzheng from "../../../assets/images/gonglue/zhoubian/kuaidi/xiaoneiyouzheng.jpg"
import baishi from "../../../assets/images/gonglue/zhoubian/kuaidi/baishi.jpg"
import fengchao from "../../../assets/images/gonglue/zhoubian/kuaidi/fengchao.jpg"
import cainiao from "../../../assets/images/gonglue/zhoubian/kuaidi/cainiao.jpg"

export default {
  data() {
    return {
      items: [
        {
          imgsrc: yunda,
          title: "韵达&申通",
          content: "位于15栋楼下靠近太极操场一侧"
        },
        {
          imgsrc: jingshunyuan,
          title: "京东&顺丰&圆通",
          content: "位于二教与马克思主义学院下面居民区石碑处"
        },
        {
          imgsrc: zhongtong,
          title: "中通快递",
          content: "位于重邮南部校区62栋二单元1-4后"
        },
        {
          imgsrc: youzheng,
          title: "邮政包裹",
          content: "位于邮政银行外面"
        },
        {
          imgsrc: xiaoneiyouzheng,
          title: "自提柜&EMS快递",
          content: "位于香樟园四号，八十万厕所旁边"
        },
        {
          imgsrc: baishi,
          title: "百世快递",
          content: "位于阳光图文后面，标有百世快递的牌子处右手边"
        },
        {
          imgsrc: fengchao,
          title: "丰巢",
          content: "位于老校门对面左手边大茶杯旁斜坡上行右边巷子处"
        },
        {
          imgsrc: cainiao,
          title: "菜鸟驿站",
          content: "位于老校门对面左手边大茶杯旁斜坡上行右边巷子处"
        },
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/gonglue/zhoubian.scss'
</style>