<template>
    <div class="jx_tie">
        <div class="tie_con">
             <div class="tie_eat">
                 <span>饮食作息</span>
             </div>
             <div class="text_component" v-for="item in eat">
                <span>{{item.num}}</span>
                <p>{{item.detail}}</p>
             </div>
             <div class="tie_eat">
                 <span>防晒装备</span>
             </div>
             <div class="text_component" v-for="item in sun">
                <span>{{item.num}}</span>
                <p>{{item.detail}}</p>
             </div>
             <div class="tie_eat">
                 <span>生活用品</span>
             </div>
             <div class="text_component" v-for="item in life">
                <span>{{item.num}}</span>
                <p>{{item.detail}}</p>
             </div>
        </div>
    </div>
</template>

<script>
export default {
       data(){
           return{
               eat:[
                   {'num' : '一:' , 'detail' : '早餐一定要吃好，午餐一定要吃饱，晚餐要吃得适宜。军训时饭量会增大，不想发胖的妹子在晚饭时一定要管好自己的嘴巴；由于天气比较炎热，也会有一些同学吃不下饭，建议多少吃点，军训体力消耗很大，以免身体不适'},
                   {'num' : '二:' , 'detail' : '多吃富含多种维生素的水果蔬菜，可以淡化黑色素，在一定程度上起到美白的效果。'},
                   {'num' : '三:' , 'detail' : '饮用水、运动饮料（军训期间会大量流汗，适量补充水分很重要，建议可以喝一些葡萄糖水）'},
                   {'num' : '四:' , 'detail' : '少吃冰的东西（军训期间天气会比较炎热，降暑很有必要，但是要少吃冰的东西，以免引起肠胃的不舒服）' },
                   {'num' : '五:' , 'detail' : '尽量早睡（晚上军训结束，回宿舍尽快洗漱，充足的睡眠才能保证第二天有足够的精力进行训练）'}
               ],
               sun:[
                   {'num' : '一:' , 'detail' : '军训防晒是最重要的环节，不管是男生还是女生，都一定要注意防晒，因为防晒不仅是要防晒黑，更是要防晒伤。'},
                   {'num' : '二:' , 'detail' : '防晒霜、防晒喷雾(最好买SPF50、PA+++的，SPF是防晒黑指数，PA是防晒伤指数，军训时长时间在烈日下暴晒，用指数高的比较适宜。出门前半个小时就要涂，因为防晒霜也要时间吸收。可以随身携带防晒喷雾，军训时出汗多，可以定时补涂一次。防晒霜的涂抹位置最好是脸部、脖子以及所有穿上军训服后能够漏出来的地方。）'},
                   {'num' : '三:' , 'detail' : ' 湿纸巾、吸油面纸（擦汗必备，擦完脸再涂上防晒霜。）'},
                   {'num' : '四:' , 'detail' : ' 润唇膏(可选择一些带有防晒指数的) '},
                   {'num' : '五:' , 'detail' : '晒后修复(可以用芦荟胶或大瓶化妆水做水膜，也可以直接敷保湿面膜。)' }
               ],
               life:[
                   {'num' : '一:' , 'detail' : '防暑药（藿香正气水等）'},
                   {'num' : '二:' , 'detail' : '花露水、驱蚊水（晚上军训时会有一些蚊虫，备上以防止蚊虫叮咬）'},
                   {'num' : '三:' , 'detail' : '风油精(提神醒脑。军训时需要早起，有些同学可能会睡眠不足，可以起到提神的功效。此外，风油精也会让人觉得特别清凉。)'},
                   {'num' : '四:' , 'detail' : '维C片、维E片(补充维生素，淡化黑色素，美白皮肤。)'},
                   {'num' : '五:' , 'detail' : '创可贴、棉签、碘伏(创可贴要随身带几枚，以备不时之需。)'},
                   {'num' : '六:' , 'detail' : '水杯（水杯最好是有盖子的，训练会大量出汗，休息时间有饮水点，备上可以随时补充水）'}
               ],
               good:[
                   {'num' : '一:' , 'detail' : '发绳、发卡(军训时注重仪容仪表，长头发需要绑起来，刘海需要别起来，另外发卡也是卡帽子神器)'},
                   {'num' : '二:' , 'detail' : '厚鞋垫、卫生巾（军训发的鞋子会有点硬，大家请备好厚鞋垫或是垫鞋子的卫生巾。卫生巾可以吸汗，垫着也会更软一点，鞋子穿着了，站军姿、踢正步时会更有力量呐）'},
                   {'num' : '三:' , 'detail' : ' 运动袜（舒适、吸汗。另外，参加走方阵的同学按要求要穿深色的袜子）'},
                   {'num' : '四:' , 'detail' : '零钱（随身带零钱，以备不时之需）'},
                   {'num' : '五:' , 'detail' : '泡脚（军训训练强度会比较大，用热水泡脚既解乏，又利于睡眠）'}
               ]
           }
       }
}
</script>

<style scoped>
.jx_tie{
    width: 632px;
    height: auto;
    margin:0 auto;
    margin-bottom: 20px;
    background-color:#bbd3ff;
    border: 4px solid #3181ef;
}
.jx_tie .tie_con{
    width: 100%;
    height: auto;
    margin-bottom: 40px;
}
.jx_tie .tie_con .tie_eat{
    width: 100%;
    height: 60px;
    margin-top: 50px;
    text-align: center;
}
.jx_tie .tie_con .tie_eat span{
    display: inline-block;
    width: 240px;
    height: 100%;
    text-align: center;
    line-height: 60px;
    color: #fff;
    border-top-right-radius: 10px;
    background-color: #4d75e8;
}
.text_component{
    width: 100%;
    height: auto;
    margin-top: 20px;
    display: flex;
}
.text_component span{
    display: block;
    width: 60px;
    height: 40px;
    text-align: center;
    margin-left: 40px;
    color: #4a6fe8;
    font-size: 28px;
    font-family: 'PingFang-blod';
}
.text_component p{
    display: block;
    width: 500px;
    font-size: 24px;
    line-height: 40px;
    color: #4a6fe8;
    font-family: 'PingFang-blod';
    word-wrap:break-word;
}
@font-face {
    font-family: "PingFang-blod" ;
    font-weight: normal;
    font-style: normal;
    src:url( '../../assets/css/fonts/PingFang_Bold.ttf') format('truetype');
}
</style>
