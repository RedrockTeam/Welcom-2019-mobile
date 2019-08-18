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
import xinshiji from "../../../assets/images/gonglue/zhoubian/chaoshi/xinshiji.jpg"
import yonghiu from "../../../assets/images/gonglue/zhoubian/chaoshi/yonghiu.jpg"
import yufang from "../../../assets/images/gonglue/zhoubian/chaoshi/yufang.jpg"
export default {
  data() {
    return {
      items: [
        {
          imgsrc: xinshiji,
          title: "新世纪",
          content: "新校门出门过马路，右转直走"
        },
        {
          imgsrc: yonghiu,
          title: "永辉",
          content: "新校门出门过马路，右转直走"
        },
        {
          imgsrc: yufang,
          title: "喻芳百货商场",
          content: "新校门出门，左转直走。老校门出门，右转直走"
        },
        
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
$theme: #003ee0;
$qian: #c5e0ff;
@import '@/assets/scss/gonglue/zhoubian.scss'
</style>