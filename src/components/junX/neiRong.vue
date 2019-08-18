<template>
<div>
    <div class="jx_nei" v-for="item in neiRong">
        <div class="jx_nei_con">
             <div class="nei_component">
                  <div class="img">
                      <img :src="item.src">
                  </div>
                  <div class="name">{{item.name}}</div>
             </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            neiRong:[
                {'name' :'防空演习' , 'src' : require('../../assets/img/Junxunteji/fangkongyanxi.png')},
                {'name' : '格斗术'  , 'src' : require('../../assets/img/Junxunteji/gedoushu.png')},
                {'name' : '汇演'    , 'src' : require('../../assets/img/Junxunteji/huiyan.png')},
                {'name' : '敬礼'    , 'src' : require('../../assets/img/Junxunteji/jingli.png')},
                {'name' : '正步'    , 'src' : require('../../assets/img/Junxunteji/zhengbu.png')},
                {'name' : '军体拳'  , 'src' : require('../../assets/img/Junxunteji/juntiquan.png')},
                {'name' : '齐步'    , 'src' : require('../../assets/img/Junxunteji/qibu.png')},
                {'name' : '手语操'  , 'src' : require('../../assets/img/Junxunteji/shouyucao.png')},
                {'name' : '站军姿'  , 'src' : require('../../assets/img/Junxunteji/zhanjunzi.png')},
            ]
        }
    }
}
</script>

<style scoped>
.jx_nei{
    width: 632px;
    height: auto;
    margin:0 auto;
    margin-bottom: 20px;
    background-color:#bbd3ff;
    border: 4px solid #3181ef;
}
.jx_nei .jx_nei_con{
    width: 100%;
    height: auto;
    margin-top: 30px;
}
.nei_component{
    width: 100%;
    height: 360px;
}
.nei_component .img{
    width: 560px;
    height: 300px;
    margin: 0 auto;
    border: 3px solid #0e40cb;
}
.nei_component .img img{
    display: block;
    width: 100%;
    height: 100%;
}
.nei_component .name{
    width: 100%;
    height: 40px;
    font-family: "not specified";
    color:#3e66e6;
    text-align: center;
    line-height: 40px;
    font-size: 24px;
}
</style>
