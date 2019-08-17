<template>
  <div>
    <btn-h></btn-h>
    <main-card class="gongluemain">
      <ul>
        <router-link
          :to="item.route"
          v-for="item in list"
          :key="item.index"
          class="list_item"
          bag="li"
          :class="{changan:isActive}"
          ref="changan"
          @ontouchstart="gtouchstart()"
          @ontouchmove="gtouchmove()"
          @ontouchend="gtouchend()"
        >{{item.message}}</router-link>

        <a href="http://hongyan.cqupt.edu.cn.cqu.pt/web/" class="list_item">网址大全</a>
      </ul>
    </main-card>
  </div>
</template>

<script>
export default {
  name: "gonglue",
  data() {
    return {
      list: [
        { message: "新生清单", route: "/gonglue/xinsheng" },
        { message: "交通路线", route: "/gonglue/jiaotong" },
        { message: "学生食堂", route: "/gonglue/shitang" },
        { message: "学生宿舍", route: "/gonglue/sushe" },
        { message: "校园公众号", route: "/gonglue/gongzhonghao" },
        { message: "周边生活", route: "/gonglue/zhoubian" }
      ],
      isActive: false
    };
  },
  mounted() {
    var timeOutEvent = 0; //定时器
    //开始按
    function gtouchstart() {
      timeOutEvent = setTimeout("longPress()", 500); //这里设置定时器，定义长按500毫秒触发长按事件，时间可以自己改，个人感觉500毫秒非常合适
      return false;
    }
    //手释放，如果在500毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件
    function gtouchend() {
      clearTimeout(timeOutEvent); //清除定时器
      // if (timeOutEvent != 0) {
      //   //这里写要执行的内容（尤如onclick事件）
      //   alert("你这是点击，不是长按");
      // }
      return false;
    }
    //如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按
    function gtouchmove() {
      clearTimeout(timeOutEvent); //清除定时器
      timeOutEvent = 0;
    }

    //真正长按后应该执行的内容
    function longPress() {
      timeOutEvent = 0;
      //执行长按要执行的内容，如弹出菜单
      // alert("长按事件触发发");
      this.isActive = true;
    }
    
  },
  methods: {
    
  }
};
</script>

<style lang="scss" scoped>
.touch:active {
  background-color: #f5f5f5;
}
.gongluemain {
  height: 961px;
  width: 690px;
  margin: auto auto;

  ul {
    height: 911px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .list_item {
      margin: 11px 0;
      width: 615px;
      height: 103px;
      border: none;
      background-image: url("../assets/images/gonglue/common.png");
      background-repeat: no-repeat;
      background-position: 0% 0%;
      background-size: 100% 100%;
      background-size: contain;

      text-align: center;
      line-height: 103px;
      box-sizing: border-box;
      opacity: 0.8;

      font-family: "pingfang-bold";
      font-weight: bold;
      opacity: 0.8;
      font-size: 32px;
      color: #003ee0;
    }
    .active {
      background-image: url("../assets/images/gonglue/active.png");
      background-repeat: no-repeat;
      background-position: 0% 0%;
      background-size: 100% 100%;
      background-size: contain;
      color: #ffffff;
    }
    .changan{
      background-image: url("../assets/images/gonglue/active.png");
      background-repeat: no-repeat;
      background-position: 0% 0%;
      background-size: 100% 100%;
      background-size: contain;
      color: #ffffff;
    }
  }
}
</style>

