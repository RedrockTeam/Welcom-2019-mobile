<template>
    <div class="head_btn">
        <ul class="clearFix" @touchstart="handStart($event)" @touchmove="handMove($event)" @touchend="handEnd"  ref="roll">
            <li> <div :class=" '/home' === this.$route.path ? 'active' : 'notactive'"><span><router-link :to="{name:'home'}" >首页</router-link> </span></div> </li>
            <li><div :class="'/gonglue' === this.$route.path ? 'active' : 'notactive'"> <span> <router-link :to="{name:'gonglue'}">攻略</router-link> </span></div> </li>
            <li><div :class="'/junxun' === this.$route.path ? 'active' : 'notactive'"><span> <router-link :to="{name:'junxun'}">军训</router-link> </span></div> </li>
            <li><div :class="'/huodong' === this.$route.path ? 'active' : 'notactive'"> <span> <router-link :to="{name:'huodong'}">活动</router-link> </span> </div></li>
            <li> <div :class=" /(jiemi)/.test(this.$route.path) ? 'active' : 'notactive'"><span> <router-link :to="{path:'/jiemi' , query:{id:0}}">揭秘</router-link> </span></div></li>
            <li><div :class="'/fengcai' === this.$route.path ? 'active' : 'notactive'"> <span> <router-link :to="{name:'fengcai'}">风采</router-link> </span></div> </li>
            <li><div :class="'/we' === this.$route.path ? 'active' : 'notactive'"> <span> <router-link :to="{name:'we'}">我们</router-link> </span></div> </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            wStartX : 0,
            wDistanceX : 0,
            wTranslateX: 0

        }
    },
   computed:{
   },
    methods:{
        handStart:function($event){
            this.wStartX = $event.touches[0].clientX
        },
        handMove:function($event){
            this.wDistanceX =  $event.touches[0].clientX -this.wStartX 
            this.wTranslateX += this.wDistanceX
            if(this.wTranslateX >=-70 && this.wTranslateX <=0 && this.wDistanceX){
                this.$refs.roll.style.transform = 'translateX('+this.wTranslateX+'px)'
            }else if(this.wTranslateX > 0){
                this.wTranslateX = 0
            }else{
                this.wTranslateX = -70
            }
        },
        handEnd:function(){
            if(this.wTranslateX >=-70 && this.wTranslateX <=0 && this.wDistanceX)  {
                  this.$refs.roll.style.transform = 'translateX('+this.wTranslateX+'px)'
            }
        }
    }

}
</script>

<style scoped>
.head_btn{
    width: 100%;
    height: 100%;
    font-size:35px;
    overflow: hidden;
}
.head_btn ul{
    width:120%;
    height: 100%;
    background-color: #9cb8ff;
}
.head_btn ul li{
    float: left;
    width:14%;
    height: 100%;
}
.head_btn ul li div{
    display: block;
    width: 85%;
    height: 100%;
    background-color:#66b9ff;
}
.head_btn ul li div span{
    display: block;
    width: 97%;
    height: 100%;
    line-height: 160%;
    text-align: center; 
    border: 2px solid #3b00d1;
    background-color:#81c5ff;
}


 .head_btn ul li div span a{
    display: block;
    width: 100%;
    height: 90%;
    line-height:100%;
    background-color:#5079ef;
    border-bottom:2px solid #3b00d1;
    color:#fff; 
    font:inherit;
} 

</style>
