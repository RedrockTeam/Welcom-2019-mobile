<template>
    <div class="home_jun"> 
        <ul>
            <li @click="indexChange(0)"><span><a :class="(isactive === 0) ? 'active' : 'notactive'">军训贴士</a></span></li>
            <li @click="indexChange(1)" ><span> <a :class="(isactive === 1) ? 'active' : 'notactive'">训练内容</a></span> </li>
            <li @click="indexChange(2)" ><span> <a :class="(isactive === 2) ? 'active' : 'notactive'">历年视频</a> </span></li>
            <li @click="indexChange(3)" ><span> <a :class="(isactive === 3) ? 'active' : 'notactive'">军训纪律</a></span> </li>
        </ul>
        <home-jun-tie v-if=" isactive == 0"></home-jun-tie>
        <home-jun-nei  v-else-if="isactive == 1"></home-jun-nei>
        <home-jun-video v-else-if="isactive == 2"></home-jun-video>
        <home-jun-ji v-else-if="isactive == 3"></home-jun-ji>
    </div>
</template>

<script>
import tieShi from './homeJ/tieShi.vue'
import neiRong from './homeJ/neiRong.vue'
import video from './homeJ/shiPin.vue'
import jiLv from './homeJ/jiLv.vue'
export default {
     data(){
         return{
           index:0
         }
     },
     components:{
         'home-jun-tie' : tieShi,
         'home-jun-nei' : neiRong,
         'home-jun-video' : video,
         'home-jun-ji' : jiLv
     },
     methods:{
         indexChange:function(i){
            this.index = i
         }

     },
     computed:{
         isactive:function(){
             return this.index
         }
     }
}
</script>

<style scoped>
.home_jun{
    width: 100%;
    height: 25px;
}
.home_jun ul{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}
.home_jun ul li{
    width: 25%;
    height: 100%;
    text-align: center;
}
.home_jun ul li span{
    display:inline-block;
    width: 80%;
    height: 100%;
}
.home_jun ul li a{
    display:block;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 180%;
    font-size: 12px;
    border-radius: 5PX;
}
</style>


