<template>
    <div class="home_con">
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
    </div>

</template>

<script>
import homeWelcome from './home/homeWelcome.vue'
export default {
    data(){
        return{
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
            'img' : '../../static/img/3.jpg',
            'title' : '学长学姐帮帮忙',
            'detail' : '想知道重邮校园的秘密吗?想和学长学姐零距离接触吗？学长学姐都在这里，他们是重邮小百科，为你解答疑惑'
        }

        }
    },
    methods:{
    },
    computed:{
    },
    components:{
        'homeWelcome-vue' : homeWelcome,
    }
}
</script>

<style scoped>
.home_con{
    height: 3350px;
    width: 100%;
    background: url('../../static/img/homeBackgroud.jpg');
    background-position: center -670px;;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    animation: bounce-in 1s ease;
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
    font-size: 40px;
    position: relative;
    left: 200px;
    color:#cbfffa;
}
.home_map .home_map_img{
    width:660px;
    height: 340px;
    position: relative;
    top: 91px;
    left:41px;
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
    height: 785px;
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
    top: 465px;
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
@keyframes bounce-in {
	0% , 100% ,50%{
	  transform: scale(1);
	}
	20% {
	  transform: scale(0.3);
	}
	30% ,60%{
	  transform: scale(1.1);
    }
  }
</style>
