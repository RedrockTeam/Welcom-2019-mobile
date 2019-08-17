<template>
  <div>
    <btn-h></btn-h>
    <main-card class="shitang">
      <div class="jianju">
        <tabs v-model="activeName">

          <tabpane label="兴业苑" name="xingye">
            <xingye></xingye>
          </tabpane>
          <tabpane label="千喜鹤" name="qianxihe">
            <qianxihe></qianxihe>
          </tabpane>
          <tabpane label="红高粱" name="honggaoliang">
            <honggaoliang></honggaoliang>
          </tabpane>
          <tabpane label="延生" name="yansheng">
            <yansheng></yansheng>
          </tabpane>
          <tabpane label="中心" name="zhongxin">
            <zhongxin></zhongxin>
          </tabpane>
          <tabpane label="大西北" name="daxibei">
            <daxibei></daxibei>
          </tabpane>

        </tabs>
      </div>
    </main-card>
  </div>
</template>

<script>
import tabs from "@/components/tabframe/tabs.vue";
import tabpane from "@/components/tabframe/tabpane.vue";
import xingye from "@/components/gonglue/shitang/xingye.vue";
import qianxihe from "@/components/gonglue/shitang/qianxihe.vue";
import yansheng from "@/components/gonglue/shitang/yansheng.vue";
import honggaoliang from "@/components/gonglue/shitang/honggaoliang.vue";
import zhongxin from "@/components/gonglue/shitang/zhongxin.vue";
import daxibei from "@/components/gonglue/shitang/daxibei.vue";
export default {
  data() {
    return {
      activeName: "xingye"
    };
  },
  components: {
    tabs,
    tabpane,
    xingye,
    qianxihe,
    yansheng,
    honggaoliang,
    daxibei,
    yansheng,
    zhongxin
  }
};
</script>
<style lang="scss" scoped>
.shitang {
  width: 690px;
  height: 1000px;
  margin: auto auto;
  .jianju {
    padding-top: 40px;
  }
}
</style>