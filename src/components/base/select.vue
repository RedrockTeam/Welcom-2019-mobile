<template>
   <div class="school_select_con" ref="checkBox">
        <div class="school_select clearFix" @click="showChange">
             <div class="top_name"> {{school[isclick].name}}</div>
             <span></span>
        </div>
        <div class="school_list" v-show="show"> 
            <span v-for=" (option , index) in school" :key="option.index" :value = index :class="isclick === index ? 'click':'notclick'" @click="change(index)">{{option.name}}</span>
        </div>
    </div>
</template>
<script>
import merge from 'webpack-merge'
export default {
    props:['school'],
     data(){
         return{
           click:0,
           show:false,
         }

     },
     methods:{
        change:function(index){
             this.click = index
             this.$router.push({
                 query:merge(this.$route.query , {'id' : index })
             })  
             this.show = false      
        },
        showChange:function(){
            this.show = true
        },

     },
     computed:{
         isclick:function(){
             return this.click
         }
    },
    
    mounted:function(){
       let _that = this
       document.addEventListener('click' , function(e){
           if(_that.$refs.checkBox.contains(e.target)){
               return ;
           }else{
               _that.show = false
           }
       })
    }
}
</script>
<style scoped>
.school_select_con{
    position: absolute;
    left: 340px;
    z-index: 5;
    max-height: 600px;
    overflow: scroll;
}
.school_select{
    display: flex;
    width: 300px;
    height: 50px;
    font-family: 'not specified';
    color: #1d88eb;
    font-size: 26px;
    font-weight: 400;
    text-align: center;
    background-color: #b7e8ff;
    border:2px solid #225bec;
}
.school_select .top_name{
    width: 260px;
    height: 100%;
    line-height: 45px;
    overflow: hidden;
}
.school_select span{
    display: block;
    width: 50px;
    height: 100%;
    line-height: 40px;
    float:right;
    text-align: center;
    background-color: #1d88eb;
    
}
.school_select span::after{
    display: inline-block;
    content: '';
    width: 0;
    height: 0;
	border-right:14px solid transparent;
	border-left:14px solid transparent;
    border-top: 14px solid #b7e8ff;
}
.school_list{
    width: 300px;
    font-family: "not specified";
    background-color: #b7e8ff;
}
.school_list span{
    display: block;
    font-size: 26px;
    text-align: center;
    min-height: 60px;
    line-height: 60px;
}
.notclick{
    color: #225bec;
}
.click{
    background-color: #42a0f7;
    color: #fff;
}
</style>