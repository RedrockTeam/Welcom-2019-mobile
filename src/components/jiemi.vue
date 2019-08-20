<template>
  <div>
    <btn-h></btn-h>
    <main-card class="jiemi">
      <div class="tiaozheng">
        <tabs v-model="activeName">
        <tabpane label="男女比例" name="sex">
          <sex></sex>
        </tabpane>
        <tabpane label="生源比例" name="shengyuan">
          <shengyuan></shengyuan>
        </tabpane>
        <tabpane label="最难科目" name="kemu">
          <kemu></kemu>
        </tabpane>
       
      </tabs>
      </div>
      
    </main-card>
  </div>
</template>

<script>
import tabs from "@/components/tabframe/tabs.vue";
import tabpane from "@/components/tabframe/tabpane.vue";
import sex from '@/components/jiemi/sex.vue'
import shengyuan from '@/components/jiemi/shengyuan.vue'
import kemu from '@/components/jiemi/kemu.vue'
export default {
  data() {
    return {
      activeName: "sex"
    };
  },
  components: {
    sex,
    shengyuan,
    kemu,
    tabs,
    tabpane
  }
};
</script>
<style lang="scss" scoped>
.jiemi{
  width: 690px;
  height: 635px;
  // 为什么揭秘这里不行，得放背景
  // background-image: url("../assets/images/jiemi/bg.png");
  // background-repeat: no-repeat;
  // background-position: 0% 0%;
  // background-size: contain;
  margin: auto auto;
 .tiaozheng{
    padding-top: 40px;
 }
}
</style>