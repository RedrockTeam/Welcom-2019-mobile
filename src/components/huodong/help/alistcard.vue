<template>
  <div class="answer-card">
    <div class="sanjiao"></div>

    <div class="user">
      <div class="pic">
        <img :src="oneanswer.author.avatar" />
      </div>
      <div class="username" v-html="oneanswer.author.name"></div>
    </div>
    <div class="answer" v-html="oneanswer.content"></div>

    <div class="ps">
      <div class="time" v-html="oneanswer.createdAt"></div>
      
          <ul class="likeif">
              <li>赞 <i v-html="oneanswer.approvalNum"></i></li>
              <li>踩 <i v-html="oneanswer.opposeNum"></i></li>
          </ul>
        
      
    </div>
  </div>
</template>

<script>
export default {
    props: ['oneanswer'],
  data() {
    return{
        
    }
  }
};
</script>
<style lang="scss" scoped>
i {
  font-style: normal;
}
.answer-card {
  width: 616px;
  // height: 235px;
  background-color: #bed8ff;
  border: 2px solid #3181ef;
  position: relative;
  padding: 30px 28px;

  .sanjiao {
    width: 40px;
    height: 41px;
    background-image: url("../../../assets/images/huodong/help/sanjiao.png");
    background-repeat: no-repeat;
    background-position: 0% 0%;
    background-size: contain;
    position: absolute;
    top: -5px;
    right: -5px;
  }
  .user {
    height: 73px;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    .pic {
      width: 73px;
      height: 73px;
      border: 1px solid #6c91ff;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 18px;
    }
    .username {
      font-family: "pingfang-regular";
      font-size: 22px;
      color: #4274eb;
      opacity: 0.65;
      line-height: 73px;
    }
  }
  .answer {
    font-size: 24px;
    font-family: "pingfang-regular";
    color: #265de6;
    opacity: 0.8;
    line-height: 40px;
    margin: 24px 0;
  }
  .ps {
    font-size: 20px;
    font-family: "pingfang-regular";
    color: #5f8bef;
    opacity: 0.5;
    display: flex;
    justify-content: space-between;
    line-height: 18px;
    .likeif{
        display: flex;
        height: 18px;
        >li{
             margin-left: 24px;
        }
       
    }
  }
}
</style>