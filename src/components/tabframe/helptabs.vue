<template>
  <div class="tab-warpper">
    <div class="tabs-heading">
      <div class="wrapper">
        <div
          class="listname"
          v-for="tab in tabPanes"
          :key="tab.index"
          :class="{active: tab.name === activeName}"
          @click="handleTabClick(tab)"
        >{{tab.label}}</div>
      </div>
    </div>

    <div class="tab-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
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
    handleTabClick(tab) {
      this.$emit("input", tab.name);
    }
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  width: 616px;
  height: 55px;
  margin: 40px auto 30px auto;
  display: flex;
  .listname {
    width: 308px;
    height: 55px;
    background-image: url("../../assets/images/huodong/help/commonq.png");
    background-repeat: no-repeat;
    background-position: 0% 0%;
    background-size: contain;
    color: #c0f7fe;
    font-size: 24px;

    line-height: 55px;
    text-align: center;
  }
  .active {
    background-image: url("../../assets/images/huodong/help/activeq.png");
    background-repeat: no-repeat;
    background-position: 0% 0%;
    background-size: contain;
    color: #fff;
  }
}
</style>