<template>
    <div class="fengVideo_con">
        <div class="video_con">
            <div class="video_test">
                <div class="test_border">
                        <video-player  class="video-player vjs-custom-skin"
                                ref="videoPlayer"
                               :playsinline="true"
                               :options="videoA"
                        ></video-player>
                </div>
            </div>
<!--             <div class="video_head" v-if="index === 0">
                <div class="border">
                   <video :src="video[0].src" controls="controls" :poster="video[0].img" preload="load"></video>
                </div>
            </div>
            <div class="videoB" v-else-if="index ===1">
                <div class="videoB_border">
                   <video :src="video[1].src"  :poster="video[1].img" controls="controls" preload="load"></video>
                </div>
            </div>
            <div class="videoC" v-else-if="index ===2">
                <div class="videoC_border">
                   <video :src="video[2].src"  :poster="video[2].img" controls="controls" preload="load"></video>
                </div>
            </div>
            <div class="videoD" v-else-if="index ===3">
                <div class="videoD_border">
                   <video :src="video[3].src"  :poster="video[3].img" controls="controls" preload="load"></video>
                </div>
            </div>
            <div class="videoE" v-else-if="index ===4">
                <div class="videoE_border">
                   <video :src="video[4].src"  :poster="video[4].img" controls="controls" preload="load"></video>
                </div>
            </div>
            <div class="videoF" v-else-if="index ===5">
                <div class="videoF_border">
                   <video :src="video[5].src"  :poster="video[5].img" controls="controls" preload="load"></video>
                </div>
            </div> -->
            <div class="video_compoent_con">
                  <div :class="index%2 ===0 ? ['video_compoent' , 'left'] : ['video_compoent']" v-for="(item , index) in video" >
                      <div class="border">
<!--                        <video :src="item.src" controls="controls"  :poster="item.img"></video> -->
                           <img :src="item.img"   @click="videoChange(index)">
                      </div>
                  </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
       data(){
           return{
               video:[
                   {'src' : 'http://video.nalgd.top/1.mp4', 'img' : require('../../assets/img/xuanchuan/1.jpg')},
                   {'src' : 'http://video.nalgd.top/3.mp4' , 'img' : require('../../assets/img/xuanchuan/3.jpg')},
                   {'src' :'http://video.nalgd.top/4.mp4'  , 'img' : require('../../assets/img/xuanchuan/4.jpg')},
                   {'src' : 'http://video.nalgd.top/5.mp4' , 'img' : require('../../assets/img/xuanchuan/5.jpg')},
                   {'src' :'http://video.nalgd.top/6.mp4' , 'img' : require('../../assets/img/xuanchuan/6.jpg')},
                   {'src' : 'http://video.nalgd.top/7.mp4',  'img' : require('../../assets/img/xuanchuan/7.jpg')},
               ],
               src:require('../../assets/img/xuanchuan/1.jpg'),
               change:'http://video.nalgd.top/1.mp4',
               index : 0,
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
                           src: 'http://video.nalgd.top/1.mp4',  // 路径
                           type: 'video/mp4'  // 类型
                        }], 
                    poster:require('../../assets/img/xuanchuan/1.jpg'), //你的封面地址
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
           videoChange:function(index){
               let myPlayer = this.$refs.videoPlayer.player;
               myPlayer.src(this.video[index].src)
               myPlayer.poster(this.video[index].img)
           } 
       },
      
}
</script>

<style scoped>
.fengVideo_con{
    width: 632px;
    height: auto;
    margin-top: 20px;
    background-color: #c5e0ff;
    border:4px solid #3181ef;
    border-top:5px solid #3181ef;
}
.fengVideo_con .video_con{
    width: 560px;
    margin: 0 auto;
    padding-bottom: 30px;
    margin-top: 30px;
}
.fengVideo_con .video_con .video_head , .video_test{
    width: 100%;
    height: 320px;
    border: 4px solid #8eaafd;
}
.video_test .test_border{
    width: 100%;
    height: 100%;
    border: 2px solid #1943b9;
}
.video_test .test_border video{
    width: 100%;
    height: 100%;
}
.fengVideo_con .video_con .video_head .border{
    height: 314px;
    border: 2px solid #1943b9;
}
.fengVideo_con .video_con .video_head video{
    width: 100%;
    object-fit:cover;
    height: 100%;
}
.fengVideo_con .video_con .videoB{
    width: 100%;
    height: 322px;
    border: 4px solid #8eaafd;
}
.fengVideo_con .video_con .videoC{
    width: 100%;
    height: 424px;
    border: 4px solid #8eaafd;
}
.fengVideo_con .video_con .videoD{
    width: 100%;
    height: 320px;
    border: 4px solid #8eaafd;
}
.fengVideo_con .video_con .videoE{
    width: 100%;
    height: 314px;
    border: 4px solid #8eaafd;
}
.fengVideo_con .video_con .videoF{
    width: 100%;
    height: 322px;
    border: 4px solid #8eaafd;
}
.fengVideo_con .video_con .videoB .videoB_border , .fengVideo_con .video_con .videoC .videoC_border , .fengVideo_con .video_con .videoD .videoD_border ,.fengVideo_con .video_con .videoE .videoE_border , .fengVideo_con .video_con .videoF .videoF_border{
    width: 100%;
    height: 100%;
    border: 2px solid #1943b9;
}
.fengVideo_con .video_con .videoB .videoB_border video , .fengVideo_con .video_con .videoC .videoC_border video , .fengVideo_con .video_con .videoD .videoD_border video , .fengVideo_con .video_con .videoE .videoE_border video , .fengVideo_con .video_con .videoF .videoF_border video{ 
    width: 100%;
    height: 100%;
    object-fit:cover; 
}

.video_compoent_con {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
}
.left{
    margin-right: 20px;
}
.fengVideo_con .video_con .video_compoent_con .video_compoent{
    width: 270px;
    height: 158px;
    margin-top: 20px;
    border: 4px solid #8eaafd;
    background-color:#8a8889;
}
.fengVideo_con .video_con .video_compoent_con .video_compoent .border{
    height: 151px;
    border: 2px solid #1943b9;
}
.fengVideo_con .video_con .video_compoent_con .video_compoent video{
    width: 100%;
    height: 100%;
    object-fit:cover; 
}
.fengVideo_con .video_con .video_compoent_con .video_compoent img{
    width: 100%;
    height: 100%;
}
</style>
