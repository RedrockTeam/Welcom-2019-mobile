<template>
    <div class="footer">
         <div v-for="item in text">{{item}}</div>
    </div>
</template>

<script>
export default {
       data(){
           return{
               text:[
                   '不经红岩网校委员会书面同意,',
                   '不得进行转载',
                   '地址:重庆市南岸区崇文路2号(重庆邮电大学内)400065',
                   'E-mail : redrock@cqupt.deu.cn(023-62461084)'
               ]
           }
       }
}
</script>

<style scoped>
.footer{
    width: 100%;
    height: 100%;
    margin-top: 50px;
    font-family: 'not specified ';
    color:#fff;
}
.footer div{
    width: 100%;
    height: 30px;
    margin: 10px 0;
    position: relative;
    top: 80px;
    text-align: center;
    line-height: 30px;
}
</style>
