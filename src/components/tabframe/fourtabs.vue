<template>
  <div class="tab-warpper">
    <div class="tabs-heading">
      <div class="qu">
        <div class="pos"></div>
        <div class="see">
          <div class="wrapper" ref="huadong">
            <div
              class="list"
              v-for="(tab,index) in tabPanes"
              :key="tab.index"
              :class="{active: tab.name === activeName}"
              @click="handleTabClick(tab,index)"
            >{{tab.label}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="tab-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import merge from "webpack-merge";
export default {
  props: ["value"],
  data() {
    return {
      tabPanes: []
    };
  },

  mounted() {
    this.tabPanes = this.$children;
  },

  computed: {
    activeName() {
      return this.value;
    }
  },

  methods: {
    handleTabClick(tab, index) {
      this.$emit("input", tab.name);
    }
  }
};
</script>
<style lang="scss" scoped>
.qu {
  height: 60px;
  width: 664px;
  margin: auto auto;
  overflow: hidden;
  margin-bottom: 36px;
  .see {
    height: 60px;
    width: 664px;
    margin: auto auto;
    .wrapper {
      overflow: hidden;
      display: flex;
      justify-content: space-around;
      // justify-content: center;//做滑动效果再用
      

      :first-child {
        margin-left: 12px !important;
      }
      :last-child {
        margin-right: 11px !important;
      }

      .list {
        width: 147px;
        height: 60px;
        background-image: url("../../assets/images/gonglue/fourtabs/commonbtn.png");
        background-repeat: no-repeat;
        background-position: 0% 0%;
        background-size: contain;

        line-height: 70px;
        margin: 0 9px;

        font-size: 28px;
        color: #003ee0;
        text-align: center;
      }
      .active {
        background-image: url("../../assets/images/gonglue/fourtabs/activebtn.png");
        background-repeat: no-repeat;
        background-position: 0% 0%;
        background-size: contain;
        color: #fff;
      }
    }
  }
}
</style>