<template>
<div>
  <btn-h></btn-h>
  <main-card>
    <div class="bg">
      <div v-for="item in items" :key="item.index">
        <p class="tit">{{item.title}}</p>
        <p class="con" v-html="item.content"></p>
      </div>
    </div>
  </main-card>
</div>
  
</template>

<script>

export default {
  data() {
    return {
      items: [
        {
          title: "重庆江北机场",
          content:
            "<i>1.可乘机场大巴至上清寺后转乘108路公交车至南坪，再转乘346或347路公交车到学校；<i><br/>" +
            "<i>2.乘轻轨三号线到南坪，再转乘346或347路公交车到学校；<i><br/>" +
            "<i>3.直接打车到校费用约为70元；<i>"
        },
        {
          title: "龙头寺火车站、重庆北站",
          content:
            "<i>1.乘323路或168路公交车至南坪，转乘346或347路公交车至学校；<i><br/>" +
            "<i>2.乘轻轨三号线到南坪，再转乘346或347路公交车到学校；<i><br/>" +
            "<i>3.直接打车到校费用约40元；<i>"
        },
        {
          title: "菜园坝火车站、汽车站",
          content:
            "<i>1.可在菜园坝广场乘347路公交车至学校；<i><br/>" +
            "<i>2.乘轻轨三号线到南坪，再转乘346或347路公交车到学校；<i><br/>" +
            "<i>2.直接打车到校费用约为25元；<i>"
        },
        {
          title: "重庆西站",
          content:
            "<i>1.乘213路公交车到天星桥，转乘819路公交车至会展中心，再转乘346路公交车到学校；<i><br/>" +
            "<i>2.乘426路公交车到南坪红星美凯龙，再转乘347路公交车到学校；<i><br/>" +
            "<i>3.直接打车到校费用约为70元；<i>"
        },
        {
          title: "朝天门码头",
          content:
            "<i>1.可乘车至南坪后转乘346或347路公交车至学校；<i><br/>" +
            "<i>2.直接打车到校费用约为20元；<i><br/>"
        },
        {
          title: "崇文路2号",
          content:
            "<i>1.可乘坐校内观光车到教学楼、宿舍楼等；<i><br/>" +
            "<i>2.每人需自备一元现金车票；<i><br/>"
        }
      ]
    };
  },

};
</script>
<style lang="scss">
@import '@/assets/scss/gonglue/xinjiao.scss'

</style>