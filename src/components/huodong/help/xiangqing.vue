<template>
  <div class="xiangqing">
    <btn-h></btn-h>
    <main-card>
      <div class="qmsg">
        <div class="qfirstline">
          <div class="qperson">
            <div class="avatar">
              <img :src="ansmsg.author.avatar" />
            </div>
            <div class="qname" v-html="ansmsg.author.name"></div>
          </div>

          <div class="sta" v-html="ansmsg.status"></div>
        </div>

        <div class="qcontent" v-html="ansmsg.content"></div>
        <div class="qphotos" v-show="!(ansmsg.photoUrls==[])">
          <img v-for="item in realphotoUrls" :key="item.index" :src="item" />
        </div>
      </div>
      <alist-card
        v-for="oneanswer in ansmsg.answer"
        :key="oneanswer.index"
        class="item"
        :oneanswer="oneanswer"
      ></alist-card>
    </main-card>
  </div>
</template>

<script>
import alistCard from "@/components/huodong/help/alistcard.vue";
export default {
  // this.$route.params.id
  created() {
    this.$axios
      .get(
        "https://wx.idsbllp.cn/234/seniorhelpme/question/id?id=" +
          this.$route.params.id
      )
      .then(response => {
        console.log("mmmm");
        this.ansmsg = response.data;
        console.log(response);
        const realphotoUrls = [];
        this.ansmsg.photoUrls.forEach(function(photo) {
          const realphoto =
            "https://wx.idsbllp.cn/234/seniorhelpme/getImage?imageName=" +
            photo.split("/", 3);
          realphotoUrls.push(realphoto);
        });
        console.log(realphotoUrls);
      })
      .catch(error => {
        console.log(error);
        alert("网络错误，不能访问");
      });
  },
  data() {
    return {
      ansmsg: this.ansmsg,
      realphotoUrls: this.realphotoUrls
    };
  },
  created() {},
  mounted() {},
  methods: {},

  components: {
    alistCard
  }
};
</script>
<style lang="scss" scoped>
.qmsg {
  width: 602px;
  // height: 345px;
  margin: auto auto;
  margin: 27px 28px 18px 30px;
  .qfirstline {
    width: 602px;
    height: 95px;
    display: flex;
    justify-content: space-between;
    .qperson {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .avatar {
        width: 73px;
        height: 73px;
        border: 1px solid #6c91ff;
        border-radius: 50%;
        overflow: hidden;
        margin: 8px 18px 8px 8px;
      }
      .qname {
        font-family: "pingfang-regular";
        font-size: 22px;
        color: #fff;
        opacity: 0.65;
        line-height: 73px;
      }
    }
    .sta {
      font-family: "pingfang-regular";
      font-size: 22px;
      color: #fff;
      opacity: 0.4;
      line-height: 73px;
    }
  }
  .qcontent {
    font-size: 24px;
    font-family: "pingfang-regular";
    color: #fff;
    opacity: 0.8;
    line-height: 40px;
    margin: 15px;
  }
  .qphotos {
    display: flex;
    flex-wrap: warp;
    img {
      width: 128px;
      height: 128px;
      margin: 10px 12px;
    }
  }
}
.item {
  margin: 14px auto;
}
</style>