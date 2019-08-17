<template>
  <div>
    <btn-h></btn-h>
    <main-card class="sushe">
      <div class="jianju">
        <fourtabs v-model="activeName">

          <tabpane label="兴业苑" name="xingye">
            <xingye></xingye>
          </tabpane>
          <tabpane label="明理苑" name="mingli">
            <mingli></mingli>
          </tabpane>
          <tabpane label="宁静苑" name="ninjing">
            <ninjing></ninjing>
          </tabpane>
          <tabpane label="知行苑" name="zhixing">
            <zhixing></zhixing>
          </tabpane>

        </fourtabs>
      </div>
    </main-card>
  </div>
</template>

<script>
import fourtabs from "@/components/tabframe/fourtabs.vue";
import tabpane from "@/components/tabframe/tabpane.vue";
import xingye from "@/components/gonglue/sushe/xingye.vue";
import mingli from "@/components/gonglue/sushe/mingli.vue";
import zhixing from "@/components/gonglue/sushe/zhixing.vue";
import ninjing from "@/components/gonglue/sushe/ninjing.vue";
import btnH from "@/components/cardheader/btnH.vue";
export default {
  data() {
    return {
      activeName: "xingye"
    };
  },
  components: {
    fourtabs,
    tabpane,
    xingye,
    mingli,
    zhixing,
    ninjing,
    btnH
  }
};
</script>
<style lang="scss" scoped>
.sushe {
  width: 690px;
  height: 1512px;
  margin: auto auto;
  .jianju {
    padding-top: 40px;
  }
}
</style>