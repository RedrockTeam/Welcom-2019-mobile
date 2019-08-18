<template>
    <div class="junX_video">
        <div class="video_con">
             <div class="videoA" v-if="index === 0">
                 <div class="videoA_con">
                     <div class="videoA_border">
                        <video src="../videoRouse/junHui.mp4" controls="controls" :poster="Hui"></video>
                     </div>
                 </div>
                 <div class="videoA_name">军训视频</div>
             </div>
             <div class="videoC"  v-if="index === 1">
                 <div class="videoA_con">
                     <div class="videoA_border">
                        <video src="../videoRouse/pianDuan.mp4" controls="controls" :poster="Pian"></video>
                     </div>
                 </div>
                 <div class="videoA_name">军训片段</div>                 
             </div>
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
               Xuan: require('../../assets/img/Junxunteji/Xposter.png'),
               index:0
           }
           
       },
       methods:{
           indexChange:function(i){
                this.index = i
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
