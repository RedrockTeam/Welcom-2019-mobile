<template>
    <div class="junXun">
        <div></div>
        <div class="junXun_head">
             <converyB-vue></converyB-vue>
        </div>
        <div class="junXun_con"> 
            <div class="junXun_roll_con">
                 <div class="junXun_roll">
                     <div class="junXun_focus">
                      <div class="junXun_btn_roll">
                           <div class="junXun_btn" ref="Junbtn">
                               <router-link :to="{name:'jiLv' , query:{'index' : '-1'}}" ><fengBtn-vue content="军训纪律"  checkRoute = '/junxun/' ></fengBtn-vue></router-link>
                               <router-link :to="{name:'nei' , query:{'index' :'-3'}}"><fengBtn-vue content="训练内容"  checkRoute = '/junxun/nei'></fengBtn-vue></router-link>
                               <router-link :to="{name:'junVideo' , query:{'index' : '0'}}" ><fengBtn-vue content="历年视频"  checkRoute = '/junxun/junVideo' ></fengBtn-vue></router-link>
                               <router-link :to="{name:'tie' , query:{'index' : '-2'}}" ><fengBtn-vue content="军训贴士"  checkRoute = '/junxun/tie' ></fengBtn-vue></router-link>
                           </div>
                      </div>
                     </div>
                     <router-view></router-view>
                     <div class="junXun_add">资料来源于重邮小卫士</div>
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
              this.$refs.Junbtn.style.transform = 'translateX('+instandce+'vw)'
          }
      },
      mounted:function(){
          if(this.$route.query['top'] == 1){
             document.documentElement.scrollTop = document.body.scrollTop = 300
          }else{
              document.documentElement.scrollTop = document.body.scrollTop = 0
          }
      }
}
</script>

<style>
.junXun_add{
    width: 100%;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: #174bdd;
    font-size: 24px;
    font-family: 'not specified';
    margin-bottom: 10px;
}
.junXun{
    width: 100%;
    height: auto;
}
.junXun_con{
    width: 100%;
    height:auto;
}
.junXun .junXun_head{
    width: 100%;
    height: 60px;
    background: url('../assets/img/song.jpg');
    background-position: center -5px;
    background-repeat: no-repeat;
    background-size:cover;
}
.junXun_roll_con{
    width: 690px;
    margin-left: 30px;
    position: relative;
    border-left: 10px solid #4d75e7;
    border-right: 10px solid #4d75e7;
    border-top: 4px solid #174bdd;
    border-bottom: 10px solid #4d75e7;
}
.junXun_con .junXun_roll_con .junXun_roll{
    width: 670px;
    height: 100%;
    background-color: #8eaafd;
    border: 1px solid #174bdd;
}

.junXun_con .junXun_roll_con .junXun_roll .junXun_focus{
   width: 632px;
   height: auto;
   margin: 0 auto;
   margin-bottom: 30px;
}

.junXun_con .junXun_roll_con .junXun_roll .junXun_focus .junXun_btn_roll{
    width: 100%;
    height: 118px;
    overflow: hidden;
}
.junXun_con .junXun_roll_con .junXun_roll .junXun_focus .junXun_btn_roll .junXun_btn{
    display: flex;
    height: 100%;
    width: 100%;
    margin-top: 50px;
}
.junXun_botton{
    width: 100%;
    height: 100px;
/*     border: 1px solid black; */
}
</style>
