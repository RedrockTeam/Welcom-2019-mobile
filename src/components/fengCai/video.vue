<template>
    <div class="fengVideo_con">
        <div class="video_con">
            <div class="video_head" v-if="index === 0">
                <div class="border">
                   <video :src="video[0].src" controls="controls" :poster="video[0].img"></video>
                </div>
            </div>
            <div class="videoB" v-else-if="index ===1">
                <div class="videoB_border">
                   <video :src="video[1].src"  :poster="video[1].img" controls="controls"></video>
                </div>
            </div>
            <div class="videoC" v-else-if="index ===2">
                <div class="videoC_border">
                   <video :src="video[2].src"  :poster="video[2].img" controls="controls"></video>
                </div>
            </div>
            <div class="videoD" v-else-if="index ===3">
                <div class="videoD_border">
                   <video :src="video[3].src"  :poster="video[3].img" controls="controls"></video>
                </div>
            </div>
            <div class="videoE" v-else-if="index ===4">
                <div class="videoE_border">
                   <video :src="video[4].src"  :poster="video[4].img" controls="controls"></video>
                </div>
            </div>
            <div class="videoF" v-else-if="index ===5">
                <div class="videoF_border">
                   <video :src="video[5].src"  :poster="video[5].img" controls="controls"></video>
                </div>
            </div>
            <div class="video_compoent_con">
                  <div :class="index%2 ===0 ? ['video_compoent' , 'left'] : ['video_compoent']" v-for="(item , index) in video" >
                      <div class="border" @click="videoChange(index)">
<!--                        <video :src="item.src" controls="controls"  :poster="item.img"></video> -->
                           <img :src="item.img" >
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
                   {'src' : require('../videoRouse/xuanchuan/1.mp4'), 'img' : require('../../assets/img/xuanchuan/1.jpg')},
                   {'src' : require('../videoRouse/xuanchuan/3.mp4') , 'img' : require('../../assets/img/xuanchuan/3.jpg')},
                   {'src' :require('../videoRouse/xuanchuan/4.mp4')  , 'img' : require('../../assets/img/xuanchuan/4.jpg')},
                   {'src' : require('../videoRouse/xuanchuan/5.mp4') , 'img' : require('../../assets/img/xuanchuan/5.jpg')},
                   {'src' : require('../videoRouse/xuanchuan/6.mp4') , 'img' : require('../../assets/img/xuanchuan/6.jpg')},
                   {'src' : require('../videoRouse/xuanchuan/7.mp4'),  'img' : require('../../assets/img/xuanchuan/7.jpg')},
               ],
               src:require('../../assets/img/xuanchuan/1.jpg'),
               change:require('../videoRouse/xuanchuan/1.mp4'),
               index : 0
           }
       },
       methods:{
           videoChange:function(index){
               this.index = index
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
.fengVideo_con .video_con .video_head{
    width: 100%;
    height: 322px;
    border: 4px solid #8eaafd;
}
.fengVideo_con .video_con .video_head .border{
    height: 314px;
    border: 2px solid #1943b9;
}
.fengVideo_con .video_con .video_head video{
    width: 100%;
    object-fit:cover;
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
