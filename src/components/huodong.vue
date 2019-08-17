<template>
  <div>
    <frame>
      <btn-h slot="header"></btn-h>
      <div class="main">
        <div class="huodong" id="help">
          <div class="img">
            <img @click="pushToHelp()" src="../assets/images/huodong/help/help.png" />
          </div>
          <div class="more" @click="pushToHelp()" ref="helpmore">了解更多</div>
        </div>
        <div class="huodong" id="else">
          <div class="img">
            <img @click="pushToHua()" src="../assets/images/huodong/huaxiang/haibao.jpg" />
          </div>
          <div class="more" @click="pushToHua()">了解更多</div>
        </div>
      </div></frame>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    isWeiXin: function() {
      let obj = window.navigator.userAgent.toLowerCase();
      if (obj.match(/microMessenger/i) == "micromessenger") {
        return true;
      } else {
        return false;
      }
    },
    pushToHelp: function() {
      this.$refs.helpmore.classList.add("moreactive");
      // if(微信打开) 跳转活动
      console.log(this.isWeiXin());
      // if (this.isWeiXin()) {
      //   window.location.href = "https://wx.idsbllp.cn/game/xzxjbbm2019/#/";
      // } else {
        this.$router.push({ path: "/huodong/help" });
      // }
    },
    pushToHua: function() {
      this.$refs.helpmore.classList.add("moreactive");
    this.$router.push({ path: "/huodong/hua" });
      
    }
  }
};
</script>
<style lang="scss" scoped>
.main {
  width: 690px;
  height: 947px;
  background-image: url("../assets/images/huodong/homebg.png");
  background-repeat: no-repeat;
  background-position: 0% 0%;
  background-size: contain;
  margin: auto auto;

  padding-top: 40px;
  .huodong {
    width: 636px;
    height: 416px;
    margin: auto auto;

    .img {
      img {
        width: 636px;
        height: 308px;
        border: 2px solid #1b4ad2;
      }
    }
    .more {
      width: 231px;
      height: 82px;
      margin: 20px auto 0 auto;
      background-image: url("../assets/images/huodong/commonbtn.png");
      background-repeat: no-repeat;
      background-position: 0% 0%;
      background-size: contain;
      line-height: 82px;
      text-align: center;

      font-size: 30px;
      color: #1748c5;
    }
    .moreactive {
      background-image: url("../assets/images/huodong/activebtn.png");
      color: #fff;
    }
  }
  #help {
    margin: 0 auto 30px auto;
  }
  #else {
    margin: 0 auto 50px auto;
  }
}
</style>