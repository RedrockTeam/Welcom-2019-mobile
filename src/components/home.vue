<template>
    <div class="home_con">
        <div class="home_map">
             <div class="home_map_text">重邮地图</div>
             <div class="home_bubble">
                 <homeBubble-vue></homeBubble-vue>
             </div>
             <div class="home_map_img">
                 <vue-preview :slides="map" class="photo_con"></vue-preview>
             </div>
        </div>
        <div class="home_gong">
              <div class="home_gong_text">邮子攻略</div>
              <div class="home_song">
                   <converyB-vue></converyB-vue>
              </div>
              <div class="home_gong_icon">
                <div v-for="(data , index) in gongLue" :class="data.className">
                      <router-link :to="{name:data.route}">{{data.name}}</router-link>
                </div>
           </div>
        </div>
        <div class="home_jun">
            <div class="home_jun_text">军训特辑</div>
              <div class="home_btn">
                  <btnH></btnH>
              </div>
            <div class="home_jun_icon">
                <div v-for="jun in junXun" :class="jun.className"> 
                    <router-link :to="{name:jun.route ,query:jun.query}">{{jun.name}}</router-link>
                </div>
            </div>
        </div>
        <div class="home_welcome">
            <div class="home_welcome_text">迎新活动</div>
             <div class="home_bubble">
                 <homeBubble-vue></homeBubble-vue>
             </div>
            <router-link to="/" class="home_welcome_one" @click.native="routeChange()">
                <homeWelcome-vue :welcome="welcomeOne"></homeWelcome-vue>
            </router-link>
            <router-link :to="{name:'hua',query: {'top':1}}" class="home_welcome_two">
                <homeWelcome-vue :welcome="welcomeTwo"></homeWelcome-vue>
            </router-link>
        </div>
        <div class="home_we">
             <div class="home_we_text">关于我们</div>
             <div class="home_we_anmation">
                 <btnH></btnH>
             </div>
             <a href="http://hongyan.cqupt.edu.cn/aboutus/mobile.html" class="home_we_pic"></a>
             <a href="http://hongyan.cqupt.edu.cn/aboutus/mobile.html" class="home_we_link">了解更多</a>
        </div>
        <div class="home_ma">
            <div class="home_ma_con">
                <div class="imgA">
                    <div>
                        <vue-preview :slides="maA" class="maA"></vue-preview>
                    </div>
                </div>
                <div class="imgB">
                    <div>
                        <vue-preview :slides="maB" class="maB"></vue-preview>
                    </div>
                </div>
            
           </div>
            <div class="home_ma_text">
                <div class="home_textA">
                     <div class="home_textA_A">手机扫一扫 </div>
                     <div class="home_textA_B">下载掌邮APP</div>
                </div>
                <div class="home_textB">
                     <div class="home_textB_A">微信扫一扫 </div>
                     <div class="home_textB_B">关注重邮小帮手</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import homeWelcome from './home/homeWelcome.vue'
import Bubble from '@/components/animation/bubble.vue'
import homeSong from '@/components/animation/convery.vue'
export default {
    data(){
        return{
            gongLue:[
                {'name':'新生清单' , 'route':'xinsheng' , 'className' : 'newStu'},
                {'name':'周边生活' , 'route':'zhoubian' , 'className' : 'life'},
                {'name':'交通路线' , 'route':'jiaotong' , 'className' : 'bus'},
                {'name':'网址大全' , 'route':'' , 'className' : 'web'},
            ],
            junXun:[
                {'name' : '军训贴士' , 'route':'tie' ,'query' :{'index' : '-2' , 'top' : '1'}, 'className' : 'notice'},
                {'name' : '训练内容' , 'route':'nei' , 'query' :{'index' : '-3' , 'top' : '1'},'className' : 'pratice'},
                {'name' : '历年视频' , 'route':'junVideo' ,'query' :{'index' : '0' , 'top' : '1'}, 'className' : 'video'},
                {'name' : '军训纪律' , 'route':'jiLv' ,'query' :{'index' : '-1'  , 'top' : '1'}, 'className' : 'rule'},
            ],
        map:[
          {
            src: require('../assets/img/map.jpg'),//预览时的大图
            msrc: require('../assets/img/map.jpg'),//默认的小图
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 1500,//双击时放大的尺寸
            h: 1000
          },
        ],
        maA:[
          {
            src: require('../assets/img/erWeiMaA.png'),//预览时的大图
            msrc: require('../assets/img/erWeiMaA.png'),//默认的小图
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 300,//双击时放大的尺寸
            h: 300
          },
        ],
        maB:[
          {
            src: require('../assets/img/erWeiMaB.png'),//预览时的大图
            msrc: require('../assets/img/erWeiMaB.png'),//默认的小图
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 300,//双击时放大的尺寸
            h: 300
          },
        ],
        welcomeOne:{
            'title' : '学长学姐帮帮忙',
            'detail' : '探索邮苑奇趣，与学长学姐零距离接触，号称重邮小百科的他们，为你解答疑惑。',
             'time' : '活动时间:8.15--9.01',
             'src':require('../assets/img/hongDongA.jpg')
        },
        welcomeTwo:{
            'title':"邮子画像",
            'detail':'简单选择形成叙述自我，绘出完整邮子画像，由你碰撞发现更多精彩。',
            'time':'活动时间:8.15--9.01',
            'src':require('../assets/img/haibao.jpg')
        }

        }
    },
    methods:{
        isWeiXin:function(){
            let obj = window.navigator.userAgent.toLowerCase();
            if(obj.match(/microMessenger/i)=='micromessenger'){
                return true
            }else{
                return false
            }
        },
        routeChange:function(){
            // console.log(this.isWeiXin())
            if(this.isWeiXin()){
                window.location.href="https://wx.idsbllp.cn/game/xzxjbbm2019/#/"
            }else{
                this.$router.push({name:'help'})
            }
        }

    },
    computed:{
    },
    components:{
        'homeWelcome-vue' : homeWelcome,
        'homeBubble-vue' : Bubble,
        'homeSong-vue' : homeSong
    },
    mounted:function(){
        document.documentElement.scrollTop = document.body.scrollTop = 0
        document.getElementsByClassName('web')[0].addEventListener('click',function(){
            window.location.href="https://hongyan.cqupt.edu.cn/web/"
        })

    }
}
</script>

<style scoped>
.home_bubble , .home_song{
    width: 100%;
    height: 58px;
    margin-top: 40px;
}
.home_btn{
    margin-top: 55px;
    height: 54px;
    width: 100%;
}
.home_con{
    height: 3350px;
    width: 100%;
    background: url('../assets/img/homeNew.jpg');
    background-position: center -670px;;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
}
.home_map{
    width: 100%;
    height: 595px;
}
.home_map .home_map_text , .home_gong .home_gong_text , .home_jun_text ,
 .home_welcome .home_welcome_text , .home_we .home_we_text{
    width: 300px;
    height: 70px;
    text-align: center;
    line-height: 90px;
    font-size: 34px;
    position: relative;
    left: 204px;
    color:#cbfffa;
}
.home_map .home_map_text {
    line-height:93px;
}
.home_gong .home_gong_text{
    line-height: 84px;
}
 .home_welcome .home_welcome_text{
     line-height: 88px;
 }
.home_gong .home_gong_text , .home_jun_text ,
 .home_welcome .home_welcome_text , .home_we .home_we_text{
       top:10px;
 }
.home_map .home_map_img{
    width:662px;
    height: 340px;
    position: relative;
    left:44px;
}


.home_gong , .home_jun{
    width: 100%;
    height: 410px;
}
.home_jun{
    height: 420px;
}
.home_gong .home_gong_icon , .home_jun .home_jun_icon{
    display: flex;
    width: 683px;
    height: 190px;
    position: relative;
    left: 33px;
    top: 3px;
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
    left: 20px;
}
.home_welcome{
    width: 100%;
    height: 785px;
}
.home_welcome .home_welcome_one{
    display: block;
    position: relative;
    top: 10px;
    left: 45px;
    width: 660px;
    height: 260px;
}
.home_welcome .home_welcome_two{
    display: block;
    position: relative;
    top: 33px;
    left: 45px;
    width: 660px;
    height: 260px;   
}
.home_we{
    width: 100%;
    height: 700px;
}
.home_we .home_we_anmation{
    width: 100%;
    height: 50px;
    position: relative;
    top: 55px;
}
.home_we  .home_we_pic{
    display: block;
    width: 640px;
    height: 312px;
    position: relative;
    top:76px;
    left: 54px;
    background: url('../assets/img/about.png');
    background-position: center 0;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
}
.home_we .home_we_link{
    display: block;
    width: 200px;
    height: 60px;
    position: relative;
    top: 118px;
    left: 270px;
    text-align: center;
    line-height: 60px;
    font-size: 30px;
    color:#1748c5;
}
.home_ma{
    width: 100%;
    height: 440px;
}
.home_ma_con{
    display: flex;
    width: 100%;
    height: 260px;
    position: relative;
    top: 58px;
}
.home_ma_con .imgA{
    position: relative;
    left: 55px;
    width:286px;
    height: 260px;
}
.home_ma_con .imgA div , .home_ma_con .imgB div{
    width: 270px;
    height: 100%;
    margin: 0 auto;
    background-color: #88abff;
}
.home_ma_con .imgA div .maA{
    width: 100%;
    height: 100%;
}
.home_ma_con .imgA div .maA , .home_ma_con .imgB div .maB{
    width: 250px;
    height: 230px;
}
.home_ma_con .imgB{
    position: relative;
    left: 125px;
    width:286px;
    height: 260px;
}
.home_ma_text{
    display: flex;
    position: relative;
    top: 100px;
    width: 100%;
    height: auto;
}
.home_ma_text .home_textA{
    position: relative;
    left: 100px;
    width: 180px;
    height: auto;
    word-wrap: wrap;
    font-size: 26px;
    color: #003ee0;
}
.home_ma_text .home_textA  .home_textA_A , .home_ma_text .home_textB  .home_textB_A{
    width: 100%;
    height: 30px;
    text-align: center;
}
.home_ma_text .home_textA  .home_textA_B , .home_ma_text .home_textB .home_textB_B{
    width: 100%;
    height: 30px;
    text-align: center;   
}
.home_ma_text .home_textB{
    position: relative;
    left: 270px;
    width: 200px;
    height: 100%;
    font-size: 26px;
    color: #003ee0;
    word-wrap: wrap;
}
</style>
