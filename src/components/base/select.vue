<template>
  <div class="school_select_con" ref="checkBox">
    <div class="school_select">
      <div class="top_name">{{school[nei].name}}</div>
      <span @click="showChange" class="secShow"></span>
    </div>
    <div class="school_list" v-show="show">
      <span
        v-for=" (option , index) in school"
        :value="index"
        :class="nei === index ? 'click':'notclick'"
        @click="change(index)"
      >{{option.name}}</span>
    </div>
  </div>
</template>
<script>
import merge from "webpack-merge";
import { futimes } from "fs";
export default {
  data() {
    return {
      click: 0,
      show: false
    };
  },
  methods: {
    change: function(index) {
      this.click = index;
      this.$router.push({
        query: merge(this.$route.query, { id: index })
      });
      this.show = false;
    },
    showChange: function() {
      this.show = true;
      let _that = this;
      document.addEventListener("click", function(e) {
        if (e.target.className != "secShow") {
          _that.show = false;
        }
      });
    }
  },
  computed: {
    isclick: function() {
      return this.click;
    },
    nei: function() {
      return this.$route.query["id"];
    }
  },
  props: ["school"],
  mounted: function() {},
  beforeDestroy: function() {}
};
</script>
<style scoped>
.school_select_con {
  position: absolute;
  left: 340px;
  z-index: 5;
  max-height: 600px;
  overflow: scroll;
}
.school_select {
  display: flex;
  width: 300px;
  height: 50px;
  font-family: "not specified";
  color: #1d88eb;
  font-size: 26px;
  font-weight: 400;
  text-align: center;
  background-color: #b7e8ff;
  border: 1px solid #225bec;
}
.school_select .top_name {
  width: 250px;
  height: 100%;
  line-height: 45px;
  overflow: hidden;
}
.school_select span {
  display: block;
  width: 50px;
  height: 100%;
  line-height: 40px;
  text-align: center;
  background-color: #1d88eb;
  border: 1px solid #1d88eb;
}
.school_select span::after {
  display: inline-block;
  content: "";
  width: 0;
  height: 0;
  border-right: 14px solid transparent;
  border-left: 14px solid transparent;
  border-top: 14px solid #b7e8ff;
}
.school_list {
  width: 298px;
  font-family: "not specified";
  background-color: #b7e8ff;
  border: 1px solid #225bec;
}
.school_list span {
  display: block;
  font-size: 26px;
  text-align: center;
  min-height: 60px;
  line-height: 60px;
  /* border:1px solid #225bec; */
}
.notclick {
  color: #225bec;
}
.click {
  background-color: #42a0f7;
  color: #fff;
}
</style>