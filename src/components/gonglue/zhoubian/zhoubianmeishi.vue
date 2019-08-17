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
import gong from "../../../assets/images/gonglue/zhoubian/meishi/gong.jpg";
import mi from "../../../assets/images/gonglue/zhoubian/meishi/mi.jpg";
import yi from "../../../assets/images/gonglue/zhoubian/meishi/yi.jpg";
import mao from "../../../assets/images/gonglue/zhoubian/meishi/mao.jpg";
import qi from "../../../assets/images/gonglue/zhoubian/meishi/qi.jpg";
import xiang from "../../../assets/images/gonglue/zhoubian/meishi/xiang.jpg";
import chong from "../../../assets/images/gonglue/zhoubian/meishi/chong.jpg";
import yuan from "../../../assets/images/gonglue/zhoubian/meishi/yuan.jpg";
import cha from "../../../assets/images/gonglue/zhoubian/meishi/cha.jpg";
import wu from "../../../assets/images/gonglue/zhoubian/meishi/wu.jpg";
import da from "../../../assets/images/gonglue/zhoubian/meishi/da.jpg";

export default {
  data() {
    return {
      items: [
        {
          imgsrc: gong,
          title: "贡茶",
          content: "老校门出门右手边五十米左右"
        },
        {
          imgsrc: mi,
          title: "蜜雪冰城&古茗",
          content: "老校门对面"
        },
        {
          imgsrc: yi,
          title: "益禾堂",
          content: "老校门出门过红绿灯左手边"
        },
        {
          imgsrc: mao,
          title: "毛哥老鸭汤",
          content: "老校门对面左手边直走可见，公交车站附近"
        },
        {
          imgsrc: qi,
          title: "柒露营串串",
          content: "老校门对面左手边直走可见，公交车站附近"
        },
        {
          imgsrc: xiang,
          title: "乡村下饭菜",
          content: "老校门对面右手边重庆农村商业银行旁堕落二街"
        },
        {
          imgsrc: chong,
          title: "重庆鸡公煲",
          content: "老校门对面右手边丰收果园旁巷子进入"
        },
        {
          imgsrc: yuan,
          title: "旧院土灶老火锅",
          content: "新校门对面往广益中学方向前行可见"
        },
        {
          imgsrc: cha,
          title: "茶百道&渴望",
          content: "老校门出门过红绿灯右手边，第二个巷子进入可见"
        },
        // {
        //   imgsrc: da,
        //   title: "大茶杯",
        //   content: "老校门出门过红绿灯左手边华莱士前面巷子处"
        // },
        {
          imgsrc: wu,
          title: "无届",
          content: "老校门对面左手边直走厕所旁边巷子处进入"
        },
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/gonglue/zhoubian.scss'
</style>