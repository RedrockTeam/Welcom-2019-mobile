<template>
    <div class="homeWelcome_con">
         <div class="homeWelcome_pic">
             <img :src="welcome.src">
         </div>
         <div class="homeWelcome_text">
              <div class="title">{{welcome['title']}}</div>
              <div class="detail ">{{welcome['detail']}}</div>
              <div class="time clearFix">
                  <span>{{welcome['time']}}</span>
              </div>
         </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:['welcome']

}
</script>

<style scoped>
.homeWelcome_con{
    padding-top: 30px;
    display: flex;
    width: 100%;
    height: 100%;
}
.homeWelcome_con .homeWelcome_pic{
    height: 85%;
    width: 36%;

}
.homeWelcome_con .homeWelcome_pic img{
    display: block;
    width: 200px;
    margin: 0 auto;
    height: 100%;
    border:3px solid #003fe0;
}
.homeWelcome_con .homeWelcome_text{
    height: 90%;
    width: 62%;
}
.homeWelcome_con div{
    font-family:'not specified';
    text-align: left;
}
.homeWelcome_con .homeWelcome_text .title{
    width: 90%;
    height: 50px;
    font-size:30px;
    font-weight: 600;
    color:#003fe0;
    margin-bottom: 2px;
}
.homeWelcome_con .homeWelcome_text .detail{
    width: 95%;
    max-height: 210px;
    font-size:25px;
    overflow:hidden;
    color:#3f67e6;
    line-height: 36px;
    margin-bottom: 5px;

}
.homeWelcome_con .homeWelcome_text .time{
    width: 100%;
    height: 40px;
}
.homeWelcome_con .homeWelcome_text .time span{
    display: block;
    height: 100%;
    width: auto;
    float: right;
    font-size: 12px;
    font-family:'not specified';
    color: #7292ef;
        margin-right: 30px;
}
</style>
