<template>
    <div class="daiB">
        <div class="daiB_con">
              <div class="daiB_btn">
                   <div @click="indexChange(0)"><span :class="isactive === 0 ? 'active_dai' : 'notactive_dai'">教师代表</span></div>
                   <div @click="indexChange(1)"><span :class="isactive === 1 ? 'active_dai' : 'notactive_dai'" >学生代表</span></div>
              </div>
              <div  class='detail_con'>
                   <div :class="(index%2)===0 ? ['compont_con','right'] : ['compont_con']" v-for="(item,index) in data">
                       <div  :class= " isactive === 0 ?  'img_con' : 'student'">
                            <img :src = "item.src"> 
                       </div>
                       <div class="text">{{item.name}}</div>
                   </div>
              </div>
        </div>
    </div>
</template>

<script>
export default {
       data(){
           return{
               index : 0,
               teacher:[
                   {'name' : '陈褀褀' , 'src' : require('../../assets/img/teacher/1.jpg')},
                   {'name' : '付蔚' ,   'src' : require('../../assets/img/teacher/2.jpg')},
                   {'name' : '高冬' ,   'src' : require('../../assets/img/teacher/3.jpg')},
                   {'name' : '高非' ,   'src' : require('../../assets/img/teacher/4.jpg')},
                   {'name' : '胡庆' ,   'src' : require('../../assets/img/teacher/5.jpg')},
                   {'name' : '蒋青' ,   'src' : require('../../assets/img/teacher/6.jpg')},
                   {'name' : '罗元' ,   'src' : require('../../assets/img/teacher/7.jpg')},
                   {'name' : '闵绪国' , 'src' : require('../../assets/img/teacher/8.jpg')},
                   {'name' : '彭语良' , 'src' : require('../../assets/img/teacher/9.jpg')},
                   {'name' :'漆晶' ,    'src' : require('../../assets/img/teacher/10.jpg')},
                   {'name' : '王睿' ,   'src' : require('../../assets/img/teacher/11.jpg')},
                   {'name' :'王樱桃' ,  'src' : require('../../assets/img/teacher/12.jpg')},
                   {'name' : '熊安萍' , 'src' : require('../../assets/img/teacher/13.jpg')},
                   {'name' : '袁帅' ,   'src' : require('../../assets/img/teacher/14.jpg')},
                   {'name' : '张清华',  'src' : require('../../assets/img/teacher/15.jpg')},
                   {'name' : '张琬悦' , 'src' : require('../../assets/img/teacher/16.jpg')},
                   {'name' : '郑继明' , 'src' : require('../../assets/img/teacher/17.jpg')},
                   {'name' : '周兴茂' , 'src' : require('../../assets/img/teacher/18.jpg')},
                   {'name' : '朱伟' ,   'src' : require('../../assets/img/teacher/19.jpg')},
               ],
               student:[
                   {'name' : '张秦望' , 'src' : require('../../assets/img/student/1.jpg')},
                   {'name' : '斯马依力江·木萨汗' ,   'src' : require('../../assets/img/student/2.jpg')},
                   {'name' : '周淑瑶' ,   'src' : require('../../assets/img/student/3.jpg')},
                   {'name' : '崔立恒' , 'src' : require('../../assets/img/student/4.jpg')},
                   {'name' : '薛灿',  'src' : require('../../assets/img/student/5.jpg')},
                   {'name' : '周渝阳',  'src' : require('../../assets/img/student/6.jpg')},
                   {'name' : '邓梨',  'src' : require('../../assets/img/student/7.jpg')},
                   {'name' : '王葶亦',  'src' : require('../../assets/img/student/8.jpg')},
                   {'name' : '知行苑8舍211',  'src' : require('../../assets/img/student/9.jpg')},
                   {'name' : '04911601',  'src' : require('../../assets/img/student/10.jpg')},
               ]
           }
       },
     methods:{
         indexChange:function(i){
            this.index = i
         }

     },
     computed:{
         isactive:function(){
             return this.index
         },
         data:function(){
             if(this.index === 0){
                 return this.teacher
             }else if(this.index === 1){
                 return this.student
             }else{
                 return '';
             }
         }
    }
}
</script>

<style scoped>
.daiB{
    width: 100%;
    height: auto;
}
.daiB .daiB_con{
    width: 100%;
    height: auto;
}
.daiB .daiB_con .daiB_btn{
    width: 100%;
    height: 50px;
    margin-top: 20px;
    display: flex;
}
.daiB .daiB_con .daiB_btn div{
    width: 50%;
    height: 100%;
    text-align: center;
    line-height: 50px;
    font-size: 26px;
    border: 1px solid #174bdd;
}
.daiB .daiB_con .daiB_btn div span{
    display: block;
    width: 100%;
    height: 100%;
}
.daiB .daiB_con .detail_con{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    margin-top: 10px;
}
.daiB .daiB_con .detail_con .compont_con{
    width: 306px;
    height: auto;
    background-color: #c5e0ff;
    margin-bottom: 20px;
    border: 4px solid #3181ef;
}
.right{
    margin-right: 20px;
}
.daiB .daiB_con .detail_con .img_con{
    width:260px;
    height: 160px;
    margin: 0 auto;
    margin-top: 10px;
    border: 1px solid #174bdd;
}
.daiB .daiB_con .detail_con .img_con img {
    display: block;
    width: 100%;
    height: 100%;
}
.student{
    width:250px;
    height: 266px;
    margin: 0 auto;
    margin-top: 10px;
    border: 1px solid #174bdd;
    overflow: hidden;
}
.student img{
    width: 100%;
    height: 100%;
}
.daiB .daiB_con .detail_con .text{
    width: 100%;
    height: 40px;
    font-family: "not specified";
    color: #426ae6;
    text-align: center;
    font-size: 25px; 
}
.active_dai{
    background-color: #43b2ff;
    border-bottom: 3px solid #154ff1;
    color: #fff;
}
.notactive_dai{
    background-color: #174bdd;
    border-bottom: 2px solid #d5ffff;
    color: #c0f7fe;
}
</style>
