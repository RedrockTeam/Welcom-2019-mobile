<template>
<div>
  <btn-H></btn-H>
  <main-card class="zhoubian">
    <div class="jianju">
      <fourtabs v-model="activeName">

      <tabpane label="快递" name="kuaidi">
        <kuaidi></kuaidi>
      </tabpane>
      <tabpane label="超市" name="chaoshi">
        <chaoshi></chaoshi>
      </tabpane>
      <tabpane label="银行" name="yinhang">
        <yinhang></yinhang>
      </tabpane>
      <tabpane label="美食" name="meishi">
        <meishi></meishi>
      </tabpane>

    </fourtabs>
    </div>
    
  </main-card>
</div>
  
</template>

<script>
import fourtabs from "@/components/tabframe/fourtabs.vue";
import tabpane from "@/components/tabframe/tabpane.vue";
import kuaidi from "@/components/gonglue/zhoubian/zhoubiankuaidi.vue";
import chaoshi from "@/components/gonglue/zhoubian/zhoubianchaoshi.vue";
import yinhang from "@/components/gonglue/zhoubian/zhoubianyinhang.vue";
import meishi from "@/components/gonglue/zhoubian/zhoubianmeishi.vue";
export default {
  data() {
    return {
      activeName: "kuaidi"
    };
  },
  components: {
    fourtabs,
    tabpane,
    kuaidi,
    chaoshi,
    yinhang,
    meishi
  }
};
</script>
<style lang="scss" scoped>
.zhoubian {
  width: 690px;
  height: 1462px;
  margin: auto auto;

  .jianju {
  padding-top: 40px;
  }
  
}
</style>