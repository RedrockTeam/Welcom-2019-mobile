<template>
    <div class="homeWelcome_con">
         <div class="homeWelcome_pic">
             <img :src="welcome['img']">
         </div>
         <div class="homeWelcome_text">
              <div class="title">{{welcome['title']}}</div>
              <div class="detail ">{{welcome['detail']}}</div>
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
    height: 80%;
    width: 40%;

}
.homeWelcome_con .homeWelcome_pic img{
    display: block;
    width: 220px;
    margin: 0 auto;
    height: 100%;
}
.homeWelcome_con .homeWelcome_text{
    height: 100%;
    width: 60%;
}
.homeWelcome_con div{
    font-family:'not specified';
    text-align: left;
}
.homeWelcome_con .homeWelcome_text .title{
    width: 90%;
    height: 50px;
    font-size:30px;
    color:#003fe0;
}
.homeWelcome_con .homeWelcome_text .detail{
    width: 100%;
    max-height: 210px;
    font-size:23px;
    overflow:hidden;
    color:#3f67e6;

}
</style>
