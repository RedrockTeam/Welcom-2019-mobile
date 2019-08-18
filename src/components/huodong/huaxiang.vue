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
        <img src="../../assets/images/huodong/help/tip.png" />
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
          content: "简单选择形成叙述自我，绘出完整邮子画像，由你碰撞发现更多精彩。"
        },
        {
          title: "参与对象:",
          content: "2019级新生"
        },
        {
          title: "活动时间:",
          content: "2019/8/20-2019/9/10"
        }
      ]
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