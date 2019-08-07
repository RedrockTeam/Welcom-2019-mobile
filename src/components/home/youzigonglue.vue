<template>
    <div class="home_gonglue"> 
        <ul>
            <li @click="indexChange(0)"><span><a :class="(isactive === 0) ? 'active' : 'notactive'">新生清单</a></span></li>
            <li @click="indexChange(1)" ><span> <a :class="(isactive === 1) ? 'active' : 'notactive'">交通路线</a></span> </li>
            <li @click="indexChange(2)" ><span> <a :class="(isactive === 2) ? 'active' : 'notactive'">校园公众号</a> </span></li>
            <li @click="indexChange(3)" ><span> <a :class="(isactive === 3) ? 'active' : 'notactive'">网址大全</a></span> </li>
            <li @click="indexChange(4)" ><span> <a :class="(isactive === 4) ? 'active' : 'notactive'">学校周边</a></span> </li>
        </ul>
        <home-gong-new v-if=" isactive == 0"></home-gong-new>
        <home-gong-bus  v-else-if="isactive == 1"></home-gong-bus>
        <home-gong-school v-else-if="isactive == 2"></home-gong-school>
        <home-gong-web v-else-if="isactive == 3"></home-gong-web>
        <home-gong-zhou v-else></home-gong-zhou>
    </div>
</template>

<script>
import homeGongNew from './homeG/newStu.vue'
import homeGongBus from './homeG/bus.vue'
import homeGongSchool from './homeG/school.vue'
import homeGongWang from './homeG/wangzhidaquan.vue'
import homeGongZhouBian from './homeG/zhouBian.vue'
export default {
    data(){
        return{
            index:0
        }

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
    },
    components:{
        'home-gong-new' :  homeGongNew,
        'home-gong-bus' : homeGongBus,
        'home-gong-school' : homeGongSchool,
        'home-gong-web' : homeGongWang,
        'home-gong-zhou' : homeGongZhouBian
    }
      
}
</script>

<style scoped>
.home_gonglue{
    width: 100%;
    height: 25px;
}
.home_gonglue ul{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}
.home_gonglue ul li{
    width: 20%;
    height: 100%;
    text-align: center;
}
.home_gonglue ul li span{
    display:inline-block;
    width: 100%;
    height: 100%;
}
.home_gonglue ul li a{
    display:block;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 180%;
    font-size: 12px;
    border-radius: 5PX;
}
</style>

