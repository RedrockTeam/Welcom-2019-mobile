<template>
  <div class="slide-show">
    <div class="centermain">
      <div @click="gotopre(preIndex)" :class="[(preIndex == (this.slides.length - 1)) ? 'leftcannot' : 'leftcan' ]"></div>
      <div class="slide-img">
        <div class="imgs" ref="box">
          <img v-for="(item,index) in slides" :key="item.index" :src="slides[index].src">
        </div>
      </div>
      <div @click="gotonext(nextIndex)" :class="[(nextIndex == 0) ? 'rightcannot' : 'rightcan' ]"></div>
    </div>
    <ul class="slide-not">
      <li v-for="(item,index) in slides" :key="item.index"> 
        
        <div :class="{on:index == nowIndex}"></div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    slides: {
      type: Array,
        default: []
    },
  },
  data() {
    return {
      nowIndex: 0,
    };
  },
  computed: {
    // 或preIndex()
    preIndex: function() {
      if (this.nowIndex == 0) {
        return this.slides.length - 1;
      } else {
        return this.nowIndex - 1;
      }
    },
    nextIndex: function() {
      if (this.nowIndex == this.slides.length - 1) {
        return 0;
      } else {
        return this.nowIndex + 1;
      }
    }
  },
  methods: {   
    // 此处一般a为preIndex
    gotopre(a){
         this.$refs.box.style.transform="translateX(-"+(63.467*a)+"vw)";
      this.$refs.box.style.transition="all 1s";
      this.nowIndex = a; 
      // console.log(this.nowIndex)
    },
    // 此处一般b为nextIndex
    gotonext(b){
      
      this.$refs.box.style.transform="translateX(-"+(63.467*b)+"vw)";
      this.$refs.box.style.transition="all 1s";

      this.nowIndex = b;
      //  console.log(this.nowIndex)
    }
    },
};
</script>
<style lang="scss">
.slide-show {
  width: 562px;
  height: 313px;
  margin: auto auto;

  .centermain {
    width: 100%;
    margin-top: 30px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    .slide-img {
      width: 476px;
      height: 254px;
      margin: 0 0;
      border: 2px solid #0235c7;
      display: flex;
      overflow-y: hidden;
      overflow-x: scroll;
      overflow: hidden;
      .imgs{
        display: flex;
        height: 254px;
        img {
        width: 476px;
        height: 254px;
      }
      }
      
    }
    .leftcan{
      width: 23px;
      height: 41px;
      background-image: url("../../assets/images/gonglue/sushe/leftactive.png");
      background-repeat: no-repeat;
      background-position: 0% 0%;
      background-size: contain;
    }
    .rightcan{
      width: 23px;
      height: 41px;
      background-image: url("../../assets/images/gonglue/sushe/rightactive.png");
      background-repeat: no-repeat;
      background-position: 0% 0%;
      background-size: contain;
    }
    .leftcannot {
      pointer-events: none;
      width: 23px;
      height: 41px;
      background-image: url("../../assets/images/gonglue/sushe/leftcommon.png");
      background-repeat: no-repeat;
      background-position: 0% 0%;
      background-size: contain;
    }
    .rightcannot {
      pointer-events: none;
      width: 23px;
      height: 41px;
      background-image: url("../../assets/images/gonglue/sushe/rightcommon.png");
      background-repeat: no-repeat;
      background-position: 0% 0%;
      background-size: contain;
    }
  }
  .slide-not {
    display: flex;
    justify-content: center;
    align-items: flex-end;

    li div {
      display: block;
      width: 7px;
      height: 7px;
      margin: 10px;
      background-color: #6d92fe;
    }
    .on {
      width: 9px;
      height: 9px;
      background-color: #ff799c;
    }
  }
}

</style>