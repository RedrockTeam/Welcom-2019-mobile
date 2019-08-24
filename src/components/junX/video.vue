<template>
    <div class="junX_video">
        <div class="video_con">
            <div class="video_test">
                <div class="test_border">
                    <div class="d_border">
                        <video-player  class="video-player vjs-custom-skin"
                                ref="videoPlayer"
                               :playsinline="true"
                               :options="videoA"
                        ></video-player>
                    </div>
                </div>
                <div class="videoA_name">{{videoName[test]}}</div>
            </div>
<!--              <div class="videoA" v-if="index === 0">
                 <div class="videoA_con">
                     <div class="videoA_border">
                        <video src="http://video.nalgd.top/junHui.mp4" controls="controls" :poster="Hui"></video>
                     </div>
                 </div>
                 <div class="videoA_name">军训视频</div>
             </div>
             <div class="videoC"  v-if="index === 1">
                 <div class="videoA_con">
                     <div class="videoA_border">
                        <video src="http://video.nalgd.top/pianDuan.mp4" controls="controls" :poster="Pian"></video>
                     </div>
                 </div>
                 <div class="videoA_name">军训片段</div>                 
             </div> -->
             <div class="videoB_con">
                 <div class="smallVideoL" @click="indexChange(0)">
                    <div class="videoL_con">
                         <div class="videoL_border">
<!--                             <video src="../videoRouse/xuanChuan.mp4" controls="controls" :poster="Xuan"></video> -->
                                 <img :src="Hui">
                         </div>
                    </div>
                   <div class="name">军训视频</div>
                 </div>
                 <div class="smallVideoR" @click="indexChange(1)">
                     <div class="videoR_con">
                         <div class="videoR_border">
<!--                             <video src="../videoRouse/pianDuan.mp4" controls="controls" :poster="Pian"></video> -->
                                 <img :src="Pian">
                         </div>
                     </div>
                   <div class="name">军训片段</div>
                 </div>
             </div>
        </div>
    </div>
</template>

<script>
export default {
       data(){
           return{
               Hui : require('../../assets/img/Junxunteji/Hposter.png'),
               Pian: require('../../assets/img/Junxunteji/Pposter.png'),
               video:[
                   {'src' : "http://video.nalgd.top/junHui.mp4" , 'img' :require('../../assets/img/Junxunteji/Hposter.png')},
                   {'src' :"http://video.nalgd.top/pianDuan.mp4" , 'img' :require('../../assets/img/Junxunteji/Pposter.png')}
               ],
               index:0,
               videoName:['军训视频' , '军训片段'],
               videoA:{
                     playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                     autoplay: false, //如果true,浏览器准备好时开始回放。
                     muted: false, // 默认情况下将会消除任何音频。
                     loop: false, // 导致视频一结束就重新开始。
                     preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                     language: 'zh-CN',
                     aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                     fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                     sources: [ {
                           src: 'http://video.nalgd.top/junHui.mp4',  // 路径
                           type: 'video/mp4'  // 类型
                        }], 
                    poster:require('../../assets/img/Junxunteji/Hposter.png'), //你的封面地址
                    // width: document.documentElement.clientWidth,
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar: {
                       timeDivider: true,
                       durationDisplay: true,
                       remainingTimeDisplay: false,
                       fullscreenToggle: true  //全屏按钮
                    }
               }
           }
           
       },
       methods:{
           indexChange:function(i){
               this.index = i
               let myPlayer = this.$refs.videoPlayer.player;
               myPlayer.src(this.video[i].src)
               myPlayer.poster(this.video[i].img)
           }
       },
       computed:{
           test:function(){
               return this.index
           }
       }
}
</script>

<style scoped>
.junX_video{
    width: 632px;
    height: auto;
    margin:0 auto;
    margin-bottom: 20px;
    background-color:#bbd3ff;
    border: 4px solid #3181ef;
}
.junX_video .video_con{
    width: 100%;
    height: auto;
    margin-top: 50px;
    margin-bottom: 40px; 
}
.junX_video .video_con .videoA{
    width: 560px;
    margin: 0 auto;
}
.video_test{
    width: 560px;
    margin: 0 auto;
}
.video_test .test_border{
    width: 100%;
    height: 100%;
    border: 4px solid #8eaafd;
}
.video_test .test_border .d_border{
    width: 100%;
    height: 100%;   
    border: 2px solid #1943b9;
}
.video_test .test_border .d_border video{
    width: 100%;
    height: 100%;
}
.video_test .videoA_name{
    width: 100%;
    height: 40px;
    font-size: 28px;
    font-family: 'not specified';
    color: #3e66e6;
    text-align: center;    
}
.junX_video .video_con .videoC{
    width: 560px;
    margin: 0 auto;   
}
.junX_video .video_con .videoA .videoA_con{
    height: 320px;
    border: 4px solid #8eaafd;
}
.junX_video .video_con .videoC .videoA_con{
    height: 320px;
    border: 4px solid #8eaafd;
}
.junX_video .video_con .videoA .videoA_con .videoA_border{
    width: 100%;
    height: 313px;
    border: 2px solid #3181ef;
}
.junX_video .video_con .videoC .videoA_con .videoA_border{
    width: 100%;
    height: 313px;
    border: 2px solid #3181ef; 
}
.junX_video .video_con .videoA .videoA_name {
    width: 100%;
    height: 40px;
    font-size: 31px;
    font-family: 'not specified';
    color: #3e66e6;
    text-align: center;
}
.junX_video .video_con .videoC .videoA_name{
     width: 100%;
    height: 40px;
    font-size: 31px;
    font-family: 'not specified';
    color: #3e66e6;
    text-align: center;   
}
.junX_video .video_con .videoB_con .smallVideoL .name , .junX_video .video_con .videoB_con .smallVideoR .name{
    font-family: 'not specified';
    color: #3e66e6;
    text-align: center;
    font-size: 12px;
    width: 100%;
    height: 40px;
}

.junX_video .video_con .videoA video{
    width: 100%;
}
.junX_video .video_con .videoC video{
     width: 100%;   
}
.junX_video .video_con .videoB_con{
    display: flex;
    width: 560px;
    margin: 0 auto;
}

.junX_video .video_con .videoB_con .smallVideoL{
    width: 270px;
    margin-right: 30px;
    margin-top: 20px;
}
.junX_video .video_con .videoB_con .smallVideoL .videoL_con , .junX_video .video_con .videoB_con .smallVideoR .videoR_con{
    height: 154px;
    border: 4px solid #8eaafd;  
}
.junX_video .video_con .videoB_con .smallVideoR .videoR_con{
    height: 152px;
}
.junX_video .video_con .videoB_con .smallVideoR{
    width: 272px;
    margin-top: 20px;
    border:1px solid transparent;
}
.junX_video .video_con .videoB_con .smallVideoL .videoL_con .videoL_border , .junX_video .video_con .videoB_con .smallVideoR .videoR_con .videoR_border{
    width: 100%;
    height: 146px;
    border: 2px solid #3181ef;   
}
.junX_video .video_con .videoB_con .smallVideoR .videoR_con .videoR_border{
    height: 144px;
}
.junX_video .video_con .videoB_con .smallVideoL img , .junX_video .video_con .videoB_con .smallVideoR img{
    width: 100%;
    height: 100%;
}

</style>
