<template>
    <div class="vide_con">
        <video-vue :video="video"></video-vue>
    </div>
</template>

<script>
import video from "./video.vue";
//打包引入视频文件
import './videoRouse/test.mp4'
export default {
      data(){
          return{
             video:[
                 {
                     'data' : '../../video/test.mp4',
                     'type' : 'video/mp4'
                 }
             ]
          }
      },
      components:{
          'video-vue' : video
      }
}
</script>

<style>
.vide_con{
    width: 100%;
}
</style>
