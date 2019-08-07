<template>
     <div class="yx_con">
         <!--头部顶栏-->
          <head-vue class="header"></head-vue>
          <div class="null"></div>
        <div class="flash_light">

        </div>
        <div class="home_countDown">
             <div class="text">
                 <span class="day">天</span>
                 <span class="hour">时</span>
                 <span class="min">分</span>
                 <span class="sec">秒</span>
                 <span class="shine"></span>
             </div>
             <div class="num">
                  <span class="time num_day">{{time.dayFist+time.dayLast}}</span>
                  <span class="time num_hour">{{time.hourFist+time.hourLast}}</span>
                  <span class="num_text">距离开学</span>
                  <span class="time num_min">{{time.monFist+time.monLast}}</span>
                  <span class="time num_sec">{{time.secFist+time.secLast}}</span>
             </div>
        </div>
          <!--留坑-->
          <router-view class="con"></router-view>
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
                'monFist' : '',
                'monFist' : '',
                'secFist' : "",
                'secLast' : ''
            },
        }
    },
    methods:{
        countDown:function(){
            let after = '2019/09/01 00:00:00'
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
                data.monFist = this.timeSplit(mon , 0)
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
    background: url('../static/img/newA.jpg');
    background-position: center 0;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    animation: bounce-in 0.8s;
    overflow: hidden;
}
.null{
    width: 100%;
    height: 180px;;
}
.flash_light{
    width: 100%;
    height: 250px;
    background: url('../static/img/new.jpg');
    background-position: center -180px;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
     animation: flash 2s infinite; 
}
.home_countDown{
    width: 100%;
    height: 200px;
    background: url('../static/img/new.jpg');
    background-position: center -420px;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
}
 .home_countDown .text{
    width: 100%;
    height: 25px;
    position: relative;
    top:5px;
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
    top: 15px;
    left: 225px;
    border-radius: 5px;
    animation: colorChange 5s infinite;
}
.home_countDown .text .sec{
    left: 470px;
}
.home_countDown .text .min{
    left: 395px;
}
 .home_countDown .text .hour{
    left: 225px;
}
.home_countDown .text .day{
    left: 145px;
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
    height: 35px;
    left:130px;
    font-size: 20px;
    top: -18px;
}
.home_countDown .num .num_sec{
    left: 145px;
}
.home_countDown .num .num_min{
    left: 125px;
}
.home_countDown .num .num_hour{
    left:130px;
}
.home_countDown .num .num_day{
    left: 110px;
}
@media screen and ( min-width: 410px ) and (max-width:490px){
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
        top: 5px;
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
		left:122px;
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
}
.con{
  position: relative;
  top: 30px;
}
.footer{
    width: 100%;
    height: 330px;
    margin-top: 80px;
    background: url('../static/img/homeBackgroud.jpg');
    background-position: center -4000px;;
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
</style>
