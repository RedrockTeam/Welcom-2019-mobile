<template>
    <div class="home_con">
        <div class="home_countDown">
             <div class="text">
                 <span class="day">天</span>
                 <span class="hour">时</span>
                 <span class="min">分</span>
                 <span class="sec">秒</span>
             </div>
             <div class="num">
                  <span class="time num_day">{{time.dayFist+time.dayLast}}</span>
                  <span class="time num_hour">{{time.hourFist+time.hourLast}}</span>
                  <span class="num_text">距离开学</span>
                  <span class="time num_min">{{time.monFist+time.monLast}}</span>
                  <span class="time num_sec">{{time.secFist+time.secLast}}</span>
             </div>
        </div>
        <div class="home_map">
             <div class="home_map_text">重邮地图</div>
             <div class="home_map_img">
                 <vue-preview :slides="map" class="photo_con"></vue-preview>
             </div>
        </div>
        <div class="home_gong">
              <div class="home_gong_text">邮子攻略</div>
              <div class="home_gong_icon">
                <div v-for="(data , index) in gongLue" :class="data.className">
                      <router-link :to="{name:data.route}">{{data.name}}</router-link>
                </div>
           </div>
        </div>
        <div class="home_jun">
            <div class="home_jun_text">军训特辑</div>
            <div class="home_jun_icon">
                <div v-for="jun in junXun" :class="jun.className"> 
                    <router-link :to="{name:jun.route}">{{jun.name}}</router-link>
                </div>
            </div>
        </div>
        <div class="home_welcome">
            <div class="home_welcome_text">迎新活动</div>
            <a href="#" class="home_welcome_one">
                <homeWelcome-vue :welcome="welcomeOne"></homeWelcome-vue>
            </a>
            <a href="#" class="home_welcome_two">
                <homeWelcome-vue :welcome="welcomeOne"></homeWelcome-vue>
            </a>
        </div>
        <div class="home_we">
             <div class="home_we_text">关于我们</div>
             <a href="#" class="home_we_link">了解更多</a>
        </div>
        <div class="home_ma"></div>
        <div class="home_footer">
             <footer-vue></footer-vue>
        </div>
    </div>

</template>

<script>
import homeWelcome from './home/homeWelcome.vue'
import footer from './home/footer.vue'
import './img/3.jpg'
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
            gongLue:[
                {'name':'新生清单' , 'route':'gonglue' , 'className' : 'newStu'},
                {'name':'周边生活' , 'route':'gonglue' , 'className' : 'life'},
                {'name':'交通路线' , 'route':'gonglue' , 'className' : 'bus'},
                {'name':'网址大全' , 'route':'gonglue' , 'className' : 'web'},
            ],
            junXun:[
                {'name' : '军训贴士' , 'route':'junxun' , 'className' : 'notice'},
                {'name' : '训练内容' , 'route':'junxun' , 'className' : 'pratice'},
                {'name' : '历年视频' , 'route':'junxun' , 'className' : 'video'},
                {'name' : '军训纪律' , 'route':'junxun' , 'className' : 'rule'},
            ],
        map:[
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',//预览时的大图
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',//默认的小图
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 500,//双击时放大的尺寸
            h: 400
          },
        ],
        welcomeOne:{
            'img' : '../images/3.jpg',
            'title' : '学长学姐帮帮忙',
            'detail' : '想知道重邮校园的秘密吗?想和学长学姐零距离接触吗？学长学姐都在这里，他们是重邮小百科，为你解答疑惑'
        }

        }
    },
    created:function(){
        this.countDown()
        setInterval(this.countDown, 1000);
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
    computed:{
    },
    components:{
        'homeWelcome-vue' : homeWelcome,
        'footer-vue' : footer
    }
}
</script>

<style scoped>
.home_con{
    height: 4500px;
    width: 100%;
    background: url('./img/new.jpg');
    background-position: center 0;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
}
.home_countDown{
    width: 100%;
    height: 695px;
}
.home_con .home_countDown .text{
    width: 100%;
    height: 25px;
    position: relative;
    top: 440px;
}
.home_con .home_countDown .text span{
    display: inline-block;
    width: 28px;
    height: 100%;
    position: relative;
    font-size: 12px;
    color:#8af5ff;
}
.home_con .home_countDown .text .sec{
    left: 470px;
}
.home_con .home_countDown .text .min{
    left: 385px;
}
.home_con .home_countDown .text .hour{
    left: 225px;
}
.home_con .home_countDown .text .day{
    left: 150px;
}
.home_con .home_countDown .num{
    width: 100%;
    height: 90px;
    position: relative;
    top:450px;
}
.home_con .home_countDown .num span{
    display:inline-block;
    position: relative;
    text-align: center;
    color: #fff;
}
.home_con .home_countDown .num .time{
    width: 90px;
    height: 100%;
    line-height: 80px;
    font-size: 35px;

}
.home_con .home_countDown .num .num_text{
    width: 105px;
    height: 35px;
    left:125px;
    top: -15px;
}
.home_con .home_countDown .num .num_sec{
    left: 130px;
}
.home_con .home_countDown .num .num_min{
    left: 120px;
}
.home_con .home_countDown .num .num_hour{
    left:130px;
}
.home_con .home_countDown .num .num_day{
    left: 115px;
}
.home_map{
    width: 100%;
    height: 620px;
}
.home_map .home_map_text , .home_gong .home_gong_text , .home_jun_text ,
 .home_welcome .home_welcome_text , .home_we .home_we_text{
    width: 300px;
    height: 70px;
    text-align: center;
    line-height: 90px;
    font-size: 40px;
    position: relative;
    left: 200px;
    color:#cbfffa;
}
.home_map .home_map_img{
    width:685px;
    height: 370px;
    position: relative;
    top: 103px;
    left:33px;
}


.home_gong , .home_jun{
    width: 100%;
    height: 430px;
}
.home_gong .home_gong_icon , .home_jun .home_jun_icon{
    display: flex;
    width: 683px;
    height: 190px;
    position: relative;
    left: 33px;
    top: 103px;
}


.home_gong .home_gong_icon div, .home_jun .home_jun_icon div{
    text-align: center;
    width: 25%;
    height: 100%;
}
.home_gong .home_gong_icon div a,.home_jun .home_jun_icon div a{
    display: inline-block;
    font-family: 'not specified';
    width: 100%;
    height: 100%;
    font-size: 14px;
    text-align: center;
    color:#003ee0;
}
.home_gong_icon div a::before ,.home_jun .home_jun_icon a:before{
    display:block;
    width: 80%;
    height: 100px;
    text-align: center;
    line-height: 50px;
    margin: 0 auto;
    margin-top: 30px;
    content: '';
} 

.bus ,.video {
   position: relative;
   left: 20px;
}
.web , .rule {
    position: relative;
    left: 30px;
}
.home_welcome{
    width: 100%;
    height: 820px;
}
.home_welcome .home_welcome_one{
    display: block;
    position: relative;
    top: 110px;
    left: 45px;
    width: 660px;
    height: 260px;
}
.home_welcome .home_welcome_two{
    display: block;
    position: relative;
    top: 145px;
    left: 45px;
    width: 660px;
    height: 260px;    
}
.home_we{
    width: 100%;
    height: 700px;
}
.home_we a{
    display: block;
    width: 200px;
    height: 60px;
    position: relative;
    top: 490px;
    left: 270px;
    text-align: center;
    line-height: 60px;
    font-size: 30px;
    color:#1748c5;
}
.home_ma{
    width: 100%;
    height: 560px;
}
.home_footer{
    width: 100%;
    height: 240px;
}
</style>
