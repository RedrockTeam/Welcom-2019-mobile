<template>
  <div>
    <btn-h></btn-h>
    <main-card>
      <div class="readrock">
        <img src="../../assets/images/huodong/huaxiang/haibao.jpg" />
      </div>
      <div class="bgcon">
        <div class="content" v-for="item in items" :key="item.index">
          <div class="tit">{{item.title}}</div>
          <div class="con">{{item.content}}</div>
        </div>
      </div>
    </main-card>
    <div class="tip">
      <div class="tipimg">
        <vue-preview :slides="bangshou"></vue-preview>
      </div>

      <p class="qingguanzhu">关注【重邮小帮手】公众号，即可参与活动</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "活动主题:",
          content:
            "通过邮子专属的小测试，绘出独一无二的“自我画像”，大数据统计来pick相同选择的“邮苑新知”。"
        },
        {
          title: "参与对象:",
          content: "2019级新生"
        },
        {
          title: "活动时间:",
          content: "敬请期待"
        }
      ],
      bangshou: [{
        src: require("../../assets/images/huodong/bangshou.png"),
        msrc: require("../../assets/images/huodong/bangshou.png"),
        w: 300, //双击时放大的尺寸
        h: 300
      }]
    };
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
<style lang="scss">
.readrock {
  width: 644px;
  height: 316px;
  margin: 30px auto;
  border: 2px solid #3181ef;
  img {
    width: 640px;
    height: 312px;
  }
}
.bgcon {
  background-color: #c5e0ff;
  margin: 0 auto 40px auto;
  width: 640px;
  padding: 25px 28px;
  border: 2px solid #3181ef;
  .content {
    margin: 10px 0;
    .tit {
      font-size: 28px;
      color: #3181ef;
      font-family: "pingfang-bold";
      font-weight: bold;
    }
    .con {
      font-size: 20px;
      line-height: 40px;
      color: #124ce3;
      opacity: 0.8;
      font-family: "pingfang-regular";
    }
  }
}
.tip {
  .tipimg {
    width: 285px;
    height: 341px;
    margin: 60px auto 16px auto;
    background-image: url("../../assets/images/huodong/tip.png");
    background-repeat: no-repeat;
    background-position: 0% 0%;
    background-size: 100% auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 47px 21px 49px 21px;
    // img {
    //   width: 242px;
    //   height: 242px;
    // }
  }
  .qingguanzhu {
    font-size: 18px;
    color: #003ee0;
    text-align: center;
  }
}
</style>