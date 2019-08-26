<template>
    <div class="jx_lv">
        <div class="time">
             <div class="time_title">
                 <span>作息时间</span>
             </div>
             <div class="time_icon_con">
                  <div :class=" !( (index + 1) % 3 === 0) ? ['icon_component' , 'right'] : ['icon_component']" v-for="(item , index) in timeList">
                      <div class="icon">
                          {{item['0']}}
                      </div>
                      <div class="icon_time">{{item['1']}}</div>
                      <div class="icon_things">{{item['2']}}</div>
                  </div>
             </div>
             <div class="food_title">
                 <span>请销假制度</span>
             </div>
             <div class="food_detail">
                 <div class="food_component" v-for="item in holiday">
                      <span>{{item.num}}</span>
                      <p>{{item.detail}}</p>
                 </div>
             </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            timeList:[
                ["06:20" , "06:20" , '起床'],
                ["06:30" , "06:30-7:20" , '早操'],
                ["08:00" , "08:00-12:00" , '操课'],
                ["12:00" , "12:00-14:50" , '午休'],
                ["15:00" , "15:00-17:00" , '操课'],
                ["17:00" , "17:00-17:30" , "操课"],
                ["17:30" , "17:30-19:00" , '晚餐'],
                ["19:00" , "19:00-21:00" , '训练'],
            ],
             holiday:[
                 {'num' :'一:'  , 'detail' : '军训期间请假遵循一事一请假的原则，无特殊事由不得请假；'},
                 {'num' : '二:' , 'detail' : '学生在军训场上感到不适，可直接通过“打报告”的形式向教官请假，在训练场边暂时休息；'},
                 {'num' :'三:'  , 'detail' : '请假半天以下的由军训排排长经商辅导员同意后批准；'},
                 {'num' : '四:' , 'detail' : '请假半天以上，3天以下的，由学生本人提出书面申请（请假条见附页），经辅导员签字后报校武装部审批，并由学生本人将审批后的申请交军训排排长实施；'},
                 {'num' : '五:' , 'detail' : '请假3天以上的需报请军训师领导同意；'},
                 {'num' : '六:' , 'detail' :'请假须外出的，须详细说明原因，并定期向辅导员报告动态；'},
                 {'num' : '七:' , 'detail' : '请假时间累计原则上不得超过军训时间的1/3（即5天）；'},
                 {'num' : '八:' , 'detail' : '如有其他特殊原因请假超过5天的，须专门报请军训师批准。'}
             ]
        }
    }

}
</script>

<style scoped>
.jx_lv{
    width: 632px;
    height: auto;
    margin:0 auto;
    margin-bottom: 20px;
    background-color:#bbd3ff;
    border: 4px solid #3181ef;
}
.jx_lv .time{
    width: 100%;
    height: auto;
    margin-top: 50px;
    margin-bottom: 40px; 
}
.jx_lv .time .time_title , .jx_lv .time .food_title{
    width: 100%;
    height: 60px;
    text-align: center;
}
.jx_lv .time .time_title span , .jx_lv .time .food_title span{
    display: inline-block;
    width: 240px;
    height: 100%;
    text-align: center;
    line-height: 60px;
    color: #fff;
    border-top-right-radius: 10px;
    background-color: #4d75e8;
}
.jx_lv .time .time_icon_con{
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
}
.jx_lv .time .time_icon_con .icon_component{
    width: 180px;
    height: 160px;
    margin-top: 40px;
}
.jx_lv .time .time_icon_con .icon_component .icon{
    width: 160px;
    height: 100px;
    margin: 0 auto;
    line-height: 116px;
    text-align: center;
    color: #fff;
    font-size: 24px;
    background: url('../../assets/img/jxIcon.jpg');
    background-position: center 0;
    background-repeat: no-repeat;
    background-size:cover;
}
.jx_lv .time .time_icon_con .icon_component .icon_time{
    width: 100%;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-family: 'not specified';
    color: #4a6fe8;
    font-size: 24px;
}
.jx_lv .time .time_icon_con .icon_component .icon_things{
    width: 100%;
    height: 30px;
    font-family: 'not specified';
    color: #4a6fe8;
    font-size: 24px;
    text-align: center;
}
.right{
    margin-right: 35px;
}
.jx_lv .time .food_title{
    margin-top: 40px;
    margin-bottom: 40px;
}
.jx_lv .time .food_detail{
    width: 100%;
}
.jx_lv .time .food_detail .food_component{
    width: 100%;
    height: auto;
    display: flex;
    margin-top: 20px;
}
.jx_lv .time .food_detail .food_component span{
    display: block;
    width: 50px;
    height: 40px;
    text-align: center;
    margin-left: 40px;
    color: #4a6fe8;
    font-size: 26px;
    font-family: 'PingFang-blod';
}
.jx_lv .time .food_detail .food_component p{
    display: block;
    width: 500px;
    color: #4a6fe8;
    font-family: 'PingFang-blod';
    word-wrap:break-word;
    font-size: 24px;
    line-height: 40px;
}
@font-face {
    font-family: "PingFang-blod" ;
    font-weight: normal;
    font-style: normal;
    src:url( '../../assets/css/fonts/PingFang_Bold.ttf') format('truetype');
}
</style>
