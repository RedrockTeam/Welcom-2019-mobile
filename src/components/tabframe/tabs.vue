<template>
  <div class="tab-warpper">
    <div class="tabs-heading">
      <div class="qu">
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
      this.$router.push({
        query: merge(this.$route.query, { id: 0 })
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.qu {
  width: 664px;
  margin: auto auto;
  overflow: hidden;
  position: relative;
  .see {
    width: 664px;
    margin: auto auto;
    .wrapper {
      overflow: hidden;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      .list {
        width: 186px;
        height: 60px;
        background-image: url("../../assets/images/gonglue/zhoubian/commonbtn.png");
        background-repeat: no-repeat;
        background-position: 0% 0%;
        background-size: contain;

        line-height: 70px;
        margin-bottom: 20px; //特定为了食堂页面写的

        font-size: 28px;
        color: #003ee0;
        text-align: center;
      }
      .active {
        background-image: url("../../assets/images/gonglue/zhoubian/activebtn.png");
        background-repeat: no-repeat;
        background-position: 0% 0%;
        background-size: contain;
        color: #fff;
      }
    }
  }
}
</style>