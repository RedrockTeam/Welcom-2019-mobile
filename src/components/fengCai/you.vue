<template>
    <div class="you_con">
        <div :class="(index%2)===0 ? ['youCon_con' , 'right'] :['youCon_con']" v-for="(item,index) in youList">
            <div class="img_con">
                <img :src= item.src alt="">
            </div>
            <div class="youCon_text">
                 <div class="name">
                      {{item.name}}
                 </div>
                 <div class="zuoBiao">
                     <div class="icon icon-zuobiao"></div>
                     <div class="icon_text">重庆邮电大学</div>
                 </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
       data(){
           return{
               youList:[
                   {'name' : '二教绿茵' , 'src' : require('../../assets/img/you/1.jpg')},
                   {'name' : '别有洞天' , 'src' : require('../../assets/img/you/2.png')},
                   {'name' : '春华秋实' , 'src' : require('../../assets/img/you/3.png')},
                   {'name' : '二教夕阳' ,  'src' : require('../../assets/img/you/4.png')},
                   {'name' : '高山流水' ,  'src' : require('../../assets/img/you/5.png')},
                   {'name' : '林荫大道' , 'src' : require('../../assets/img/you/6.png')},
                   {'name' : '落英缤纷' , 'src' :require('../../assets/img/you/7.png')},
                   {'name' : '鸟瞰重邮' , 'src' : require('../../assets/img/you/8.png')},
                   {'name' :  '高山流水', 'src' : require('../../assets/img/you/9.png')},
                   {'name' : '数字图书馆' , 'src' : require('../../assets/img/you/10.png')},
                   {'name' :'仰望八教' ,    'src' : require('../../assets/img/you/11.png')},
                   {'name' : '老图'     ,   'src' : require('../../assets/img/you/12.jpg')},
                   {'name' : '鸟瞰重邮' , 'src' : require('../../assets/img/you/13.png')},
                   {'name' : '数字图书管' , 'src' : require('../../assets/img/you/14.png')},
                   {'name' :'仰望信科'  , 'src' : require('../../assets/img/you/15.jpg')},
                   {'name' : '重邮校徽' , 'src' : require('../../assets/img/you/16.jpg')}
               ]
           }
       }
}
</script>

<style scoped>
.you_con{
    display: flex;
    flex-wrap:wrap;
    width: 100%;
    height: auto;
}

.youCon_con{
    width: 302px;
    height: 400px;
    margin-top: 20px;
    background-color: #c6e1ff;
    border: 4px solid #3080ef;
}
.right{
    margin-right: 20px;
}
.youCon_con .img_con{
    width: 265px;
    height: 270px;
    margin: 0 auto;
    margin-top: 20px;
    border: 3px solid #0236c8;
}
.youCon_con .img_con img{
    display: block;
    width: 100%;
    height: 100%;
}
.youCon_con .youCon_text{
    width: 260px;
    height: 90px;
    margin: 0 auto;
}
.youCon_con .youCon_text .name{
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size:28px;
    color:#436be7;
    font-weight: 800;
    font-family: "not specified";
}
.youCon_con .youCon_text .zuoBiao{
    display: flex;
    width: 100%;
    height: 30px;
}
.youCon_con .youCon_text .zuoBiao .icon::before{
    display: block;
    content: '\e639';
    font-family: 'zuoB';
    height: 30px;
    line-height: 40px;
    color:#4470db;
    font-size: 14px;
}
@font-face {
    font-family: "zuoB";
    font-weight: normal;
    font-style: normal;
    src:url( '../../assets/css/fonts/iconfont.ttf') format('truetype');
}
 .youCon_con .youCon_text .zuoBiao .icon_text{
    margin-left: 10px;
   font-family: "not specified";
   color:#7494eb;
   font-size: 12px;
}
</style>
