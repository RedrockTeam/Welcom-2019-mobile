<template>
     <div class="yx_con">
         <!--头部顶栏-->
          <head-vue class="header"></head-vue>
          <div class="flash_back">
              <div class="flash_light ">

              </div>
          </div>
              <div class="home_countDown">
                  <div class="text">
                    <span class="day">天</span>
                    <span class="hour">时</span>
                    <span class="min">分</span>
                    <span class="sec">秒</span>
                    <span class="shine"></span>
<!--                    -->
              </div>
               <div class="num">
                   <span class="time num_day">{{time.dayFist+time.dayLast}}</span>
                   <span class="time num_hour">{{time.hourFist+time.hourLast}}</span>
                   <span class="num_text">
                       <div>距</div>
                       <div>离</div>
                       <div>开</div>
                       <div>学</div>
                   </span>
                   <span class="time num_min">{{time.monA+time.monLast}}</span>
                   <span class="time num_sec">{{time.secFist+time.secLast}}</span>
              </div>
            </div>
          <!--留坑-->
          <transition name="in">
              <router-view></router-view>
          </transition>
          <div class="footer">
                <footer-vue></footer-vue>
          </div>
     </div>
</template>

<script>
import Header from './components/head.vue'
import footer from './components/home/footer.vue'
export default {
    data(){
        return{
            time:{
                'dayFist' : "",
                'dayLast' : '',
                'hourFist' : "",
                'hourLast' : '',
                'monA' : '',
                'monLast' : '',
                'secFist' : "",
                'secLast' : ''
            },
        }
    },
    methods:{
        countDown:function(){
            let after = '2019/09/05 00:00:00'
            let mydate = new Date()
            let now = mydate.getTime()
            let subtract = new Date(Date.parse(after)).getTime() - now  //时间差距
            let data = {}
                 
            if (subtract > 0) {
                let day = Math.floor(subtract / (1000 * 60 * 60 * 24))
                data.dayFist = this.timeSplit(day , 0)
                data.dayLast = this.timeSplit(day , 1)
                let hour = Math.floor((subtract / (1000 * 60 * 60 ) ) % 24)
                data.hourFist = this.timeSplit(hour , 0)
                data.hourLast = this.timeSplit(hour , 1)
                let mon = Math.floor((subtract / (1000 * 60) ) %60)
                data.monA = this.timeSplit(mon , 0)
                data.monLast = this.timeSplit(mon , 1)
                let second = Math.floor((subtract / 1000 ) % 60)
                data.secFist = this.timeSplit(second , 0)
                data.secLast = this.timeSplit(second , 1)
                this.time = data
            }

        },
        timeSplit:function(time , index){
            let timeStr = time.toString()
            let len = timeStr.length
            let timeArr = timeStr.split('')
            if(index == 0){
                if(len == 1){
                    return 0
                }else if(len >=2){
                    return timeArr[0]
                }
            }else if(index == 1){
                return timeArr[len-1]
            }
        }
    },
    created:function(){
        this.countDown()
        setInterval(this.countDown, 1000);
    },
    components:{
        'head-vue' : Header,
        'footer-vue' : footer
    }

}
</script>

<style>
.header{
    position: fixed;
    top: 0;
    z-index: 999;
}
.yx_con{
    height:auto;
    width: 100%;
    background-color:#a8cdff;
}
.flash_back{
    width: 100%;
    height: 410px;
    background: url('./assets/img/noflasg.jpg');
    background-position: center 0;
    background-repeat: no-repeat;
    background-size:cover;
}
.null{
    width: 100%;
    height: 180px;;
}
.flash_light{
    width: 100%;
    height: 100%;
    background: url('./assets/img/flash.jpg');
    background-position: center 0;
    background-repeat: no-repeat;
    background-size:cover;
    animation: flash 2s infinite;
}
.home_countDown{
    width: 100%;
    height: 250px;
    background: url('./assets/img/flash.jpg');
    background-position: center -420px;
    background-repeat: no-repeat;
    background-size: cover;
}
.home_countDown .text{
    width: 100%;
    height: 25px;
    position: relative;
    top:0px;
}
.home_countDown .text span{
    display: inline-block;
    width: 28px;
    height: 100%;
    position: relative;
    font-size: 20px;
    color:#8af5ff;
}
.home_countDown .text .shine{
    background-color:#25e8fa;
    width: 40px;
    height: 15px;
    top: 12px;
    left: 238px;
    border-radius: 5px;
    animation: colorChange 5s infinite !important;
}
.home_countDown .text .sec{
    left: 480px;
}
.home_countDown .text .min{
    left: 395px;
}
 .home_countDown .text .hour{
    left: 235px;
}
.home_countDown .text .day{
    left: 150px;
}
 .home_countDown .num{
    width: 100%;
    height: 90px;
    position: relative;
    top:5px;
}
 .home_countDown .num span{
    display:inline-block;
    position: relative;
    text-align: center;
    color: #fff;
}
.home_countDown .num .time{
    width: 90px;
    height: 100%;
    line-height: 80px;
    font-size: 35px;
}
.home_countDown .num .num_text{
    width: 105px;
    height: 40px;
    left:137px;
    font-size: 12px;
    top: -10px;
}
.home_countDown .num .num_text div{
    display: inline-block;
    width: 25px;
    height: 23px;
    font-size: 14px;
    vertical-align: top;
}
.home_countDown .num .num_sec{
    left: 155px;
    top:3px;
}
.home_countDown .num .num_min{
    left: 135px;
    top:3px;
}
.home_countDown .num .num_hour{
    left:136px;
    top:3px;
}
.home_countDown .num .num_day{
    left: 116px;
    top:3px;
}
/*@media screen and ( min-width: 410px ) and (max-width:490px){
    .home_countDown .text .shine{
        top: 5px;
        left: 212px;
    }   
    .home_countDown .text{
        top: 5px;
    }
    .home_countDown .num .num_text{
    width: 105px;
    height: 35px;
    left:125px;
    font-size: 15px;
        top: -13px;
  }
   .home_countDown .num .num_sec{
    left: 135px;
  }
   .home_countDown .num .num_min{
    left: 120px;
  }
   .home_countDown .num .num_hour{
    left:127px;
  }
   .home_countDown .num .num_day{
    left: 110px;
  }
}
@media screen and (min-width: 490px) and (max-width: 560px){
    .home_countDown .text .shine{
        left: 218px;
    }
     .home_countDown .text{
        top: 5px;
    }
   .home_countDown .num .num_text{
    width: 105px;
    height: 35px;
    left:125px;
    font-size: 15px;
    top: -18px;
  }
   .home_countDown .num .num_sec{
    left: 135px;
  }
   .home_countDown .num .num_min{
    left: 120px;
  }
   .home_countDown .num .num_hour{
    left:127px;
  }
   .home_countDown .num .num_day{
    left: 110px;
  }
}
@media screen and (min-width:330px) and (max-width:380px ){
   .home_countDown .text .shine{
        left: 209px;
        top: 10px;
    } 
    .home_countDown .text{
        top: 0px;
    }
  .home_countDown .num .num_text{
    width: 105px;
    height: 35px;
    left:120px;
        font-size: 12px;
        top: -10px;
    }
    .home_countDown .num{
        top:5px;
    }
  .home_countDown .num .num_sec{
    left: 130px;
  }
  .home_countDown .num .num_min{
    left: 115px;
  }
  .home_countDown .num .num_hour{
        left:130px;
  }
  .home_countDown .num .num_day{
    left: 110px;
    } 
}

@media screen and (max-width: 330px) {
    .home_countDown .text .shine{
        left: 204px;
        top: 10px;
    }
    .home_countDown .text{
        top: 0;
    }
    .home_countDown .text .sec{
       left: 450px;
    }
   .home_countDown .text .min{
       left: 375px;
    }
    .home_countDown .num .num_text{
        font-size:0px;
    }
    .home_countDown .num{
        top: 5px;
    }  
  .home_countDown .num .num_sec{
    left: 120px;
  }
  .home_countDown .num .num_min{
    left: 105px;
  }
  .home_countDown .num .num_hour{
    left:126px;
  }
  .home_countDown .num .num_day{
    left: 115px;
    } 
}*/
.footer{
    width: 100%;
    height: 330px;
    margin-top: 80px;
    background: url('./assets/img/footer.jpg');
    background-position: center 0px;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    font-size: 20px;
}
@keyframes colorChange{
    0%{
        background-color: #25e8fa;
    }
    50%{
        background-color: #defaff;
    }
    100%{
        background-color: #25e8fa;
    }
}
@keyframes flash{
    0% {
        opacity: 0.5;
    }
    8%, 12%, 16% {
        opacity: 0.5;
    }
    10%,  14% {
        opacity: 1;
    }
    50% {
        opacity: 0.6;
    }
    100% {
        opacity: 1;
    }
   
} 


.in-enter-active{
    animation: bounce .5s;
}


@keyframes bounce{
	0% {
	  transform: scale(0);
	}
	50% {
	  transform: scale(1.05);
	}
	100% {
	  transform: scale(1);
	}
}
</style>

