<template>
    <div>
        <detail-vue :options="options" :imgs="imgs"></detail-vue>
    </div>
</template>

<script>
export default {
      data(){
          return{
              options:['全校' , '通信与信息工程学院' , '经济管理学院'],
              imgs:["../images/3.jpg" , '../images/雏田.jpg' , '../images/yy.jpg']
          }
      }
}
</script>

<style>

</style>
