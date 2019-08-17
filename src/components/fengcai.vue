<template>
    <div class="fengCai">
        <div></div>
        <div class="fengCai_head">
             <bubble-vue></bubble-vue>
        </div>
        <div class="fengCai_con"> 
            <div class="fengCai_roll_con">
                 <div class="fengCai_roll">
                     <div class="focus">
                      <div class="feng_btn_roll">
                           <div class="feng_btn" ref="fengBtn">
                               <router-link :to="{name:'zuZhi' , query:{'id' : '0'}}" ><fengBtn-vue content="组织大全"  checkRoute = '/fengcai/zhu' ></fengBtn-vue></router-link>
                               <router-link :to="{name:'daiBiao'}" ><fengBtn-vue content="优秀代表"  checkRoute = '/fengcai/daiBiao'></fengBtn-vue></router-link>
                               <router-link :to="{name:'You'}" ><fengBtn-vue content="邮苑风光"  checkRoute = '/fengcai/you' ></fengBtn-vue></router-link>
                               <router-link :to="{name:'Video'}"><fengBtn-vue content="宣传视频"  checkRoute = '/fengcai/video' ></fengBtn-vue></router-link>
                           </div>
                      </div>
                        <router-view></router-view>
                     </div>

                 </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import fengBtn from './fengCai/btn.vue'
export default {
      data(){
          return{

          }
      },
      components:{
          'fengBtn-vue' : fengBtn,
      },
      methods:{
          tranform:function(index){
              let instandce = index * 29
              this.$refs.fengBtn.style.transform = 'translateX('+instandce+'vw)'
          }
      },
      mounted:function(){
          document.documentElement.scrollTop = document.body.scrollTop = 0
      }
}
</script>

<style>
.fengCai{
    width: 100%;
    height: auto;
}
.fengCai_con{
    width: 100%;
    height:auto;
}
.fengCai .fengCai_head{
    width: 100%;
    height: 60px;
    background: url('../assets/img/fengCai.jpg');
    background-position: center -660px;
    background-repeat: no-repeat;
    background-size:cover;
}
.fengCai_roll_con{
    width: 689px;
    margin-left: 30px;
    position: relative;
    border-left: 10px solid #4d75e7;
    border-right: 10px solid #4d75e7;
    border-top: 4px solid #174bdd;
    border-bottom: 10px solid #4d75e7;
}
.fengCai_con .fengCai_roll_con .fengCai_roll{
    width: 670px;
    height: 100%;
    background-color: #8eaafd;
    border: 1px solid #174bdd;
}

.fengCai_con .fengCai_roll_con .fengCai_roll .focus{
   width: 632px;
   height: auto;
   margin: 0 auto;
   margin-bottom: 30px;
}

.fengCai_con .fengCai_roll_con .fengCai_roll .focus .feng_btn_roll{
    width: 100%;
    height: 128px;
    overflow: hidden;
}
.fengCai_con .fengCai_roll_con .fengCai_roll .focus .feng_btn_roll .feng_btn{
    display: flex;
    height: 100%;
    width: 100%;
    margin-top: 50px;
}
.fengCai_botton{
    width: 100%;
    height: 100px;
    border: 1px solid black;
}
</style>
