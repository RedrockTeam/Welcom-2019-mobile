<template>
  <div>
    <btn-h></btn-h>

    <main-card>
      <div class="listmain">
        <helptabs v-model="activeName">
          <tabpane name="hot" label="最热问题">
            <q-hot></q-hot>
          </tabpane>
          <tabpane name="new" label="最新问题">
            <q-new></q-new>
          </tabpane>
        </helptabs>
      </div>
    </main-card>

    <div class="tip">
      <div class="tipimg">
        <img src="../../../assets/images/huodong/help/tip.png" />
      </div>

      <p class="qingguanzhu">关注【重邮小帮手】公众号，即可参与活动</p>
    </div>
  </div>
</template>

<script>
import tabs from "@/components/tabframe/tabs.vue";
import tabpane from "@/components/tabframe/tabpane.vue";
import helptabs from "@/components/tabframe/helptabs.vue";
import qHot from "@/components/huodong/help/hot.vue";
import qNew from "@/components/huodong/help/new.vue";

export default {
  data() {
    return {
      activeName: "hot"
    };
  },
  components: {
    tabs,
    tabpane,
    helptabs,
    qHot,
    qNew
  },
  mounted: function() {
    if (this.$route.query["top"] == 1) {
      document.documentElement.scrollTop = document.body.scrollTop = 300;
    } else {
      document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
  }
};
</script>
<style lang="scss" scoped>
.listmain {
  height: 1009px;
  // overflow: auto;
}

.tip {
  .tipimg {
    width: 285px;
    height: 341px;
    margin: 60px auto 16px auto;
    img {
      width: 285px;
      height: 341px;
    }
  }
  .qingguanzhu {
    font-size: 18px;
    color: #003ee0;
    text-align: center;
  }
}
</style>