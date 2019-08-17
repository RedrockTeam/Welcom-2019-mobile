<template>
  <div id="hot">
    <qlist-card v-for="hotq in hotqlist" :key="hotq.index" class="item" :hotq="hotq"></qlist-card>
  </div>
</template>

<script>
import qlistCard from "@/components/huodong/help/qlistcard.vue";
export default {
  created() {
    this.$axios
      .get("https://wx.idsbllp.cn/234/seniorhelpme/question?pageNo=1&sortby=new")
      .then(response => {
        console.log(response);
        this.hotqlist = response.data;
      })
      .catch(error => {
        console.log(error);
        alert("网络错误，不能访问");
      });
  },
  data() {
    return {
      hotqlist: this.hotqlist
    };
  },

  components: {
    qlistCard
  }
};
</script>
<style lang="scss" scoped>
#hot {
  .item {
    margin: 0 auto 26px auto;
  }
}
</style>