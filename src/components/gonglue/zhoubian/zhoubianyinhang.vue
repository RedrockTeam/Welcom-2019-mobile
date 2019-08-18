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
import nongye from "../../../assets/images/gonglue/zhoubian/yinhang/nongye.jpg"
import youzhengyinhang from "../../../assets/images/gonglue/zhoubian/yinhang/youzhengyinhang.jpg"
import gonghang from "../../../assets/images/gonglue/zhoubian/yinhang/gonghang.jpg"
import chongqingnonghang from "../../../assets/images/gonglue/zhoubian/yinhang/chongqingnonghang.jpg"
export default {
  data() {
    return {
      items: [
        {
          imgsrc: nongye,
          title: "农业银行",
          content: "新校门出门右转，新世纪超市旁边"
        },
        {
          imgsrc: youzhengyinhang,
          title: "中国邮政储蓄银行",
          content: "老校门出门右转，绝味鸭脖旁边"
        },
        {
          imgsrc: gonghang,
          title: "中国工行自助服务点",
          content: "新校门出门，左转直走，老校门出门，右转直走"
        },
        {
          imgsrc: chongqingnonghang,
          title: "4.重庆农村商业银行",
          content: "老校门出门，过马路，右转"
        },
        
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/gonglue/zhoubian.scss'
</style>