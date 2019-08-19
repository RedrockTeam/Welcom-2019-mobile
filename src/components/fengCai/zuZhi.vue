<template>
    <div class="zu_btn_con">
        <ul>
            <li @click="indexChange(0)"><span><a :class="(isactive === 0) ? 'zu_btn_active' : 'zu_btn_notactive'">校级组织</a></span></li>
            <li @click="indexChange(1)" ><span> <a :class="(isactive === 1) ? 'zu_btn_active' : 'zu_btn_notactive'">红岩网校</a></span> </li>
            <li @click="indexChange(2)" ><span> <a :class="(isactive === 2) ? 'zu_btn_active' : 'zu_btn_notactive'">学生社团</a> </span></li>
        </ul>
        <div class="school" v-if=" isactive == 0">
            <select-vue :school="school"></select-vue>
            <fengDetail-vue></fengDetail-vue>
        </div>
        <div class="redRock" v-else-if="isactive == 1">
            <div class="redRock_con">
                <div class="redRock_name">
                    <span>
                        红岩网校
                    </span>
                </div>
                <div class="introduction" v-for="(item , key) in redRock">
                    <p>{{item.name}}</p>
                    <div>{{item.detail}}</div>
                </div>
            </div>
        </div>
        <div class="student" v-else-if="isactive == 2">
            <div v-for="(item , index) in student">
                 {{item.name}}
            </div>            
        </div>
    </div>
</template>

<script>
import detail from './detail.vue'
import select from '@/components/base/select.vue'
export default {
     data(){
         return{
           index : 0,
           school:[
               {'name' : '团委办公室'},
               {'name' : '团委组织部'},
               {'name' : '团委宣传部'},
               {'name' : '学生社团联合会'},
               {'name' : '学生科技联合会'  },
               {'name' : '青协志愿者协会'},
               {'name' : '学生会'},
               {'name' : '大学生艺术团'},
           ],
           redRock:[
               {'name' : '红岩网校工作站简介' , 'detail' : '重庆邮电大学红岩网校工作站是学校唯一一个从事互联网产品开发运营的校级学生组织。该团队自创立以来，始终坚持以技术见长，充分结合同学们的话语体系和视觉风格建设网络平台，繁荣网络文化。红岩网校工作站在校团委的指导下，由学生自我管理，多年来走出了一大批优秀的IT互联网人才，深受电信运营商、腾讯、阿里巴巴和百度等知名互联网企业的青睐。团队先后获评“全国五四红旗团支部”、“团中央新媒体专业工作室”、“重庆市IT杰出青年群体”等系列荣誉。红岩网校工作站属于校级学生组织，其中包括五个部门：产品策划及运营部，视觉设计部，Web研发部，移动开发部和运维安全部。工作中，各个部门相互协作、共同进步，开发上线了重邮小帮手微信公众号，掌上重邮、BTdown铺等一系列优秀的校园网络产品，深受广大师生的好评。红岩网校工作站被大家誉为“重邮互联网大咖的摇篮”。' },
               {'name' : '产品策划及运营部' , 'detail' :'Ta是用户需求的倾听者，也是提出解决方案的总设计师。活跃在各部门之间，是促进各部门沟通的桥梁。Ta是创意的缔造者，拥有独特严谨的产品思维。一份原型图、一篇PRD可以让程序员和设计师开启工作模式，也可以写出优秀的文案对活动和产品形成强有力的助推，Office、Axure、Xmind等软件是Ta们的好帮手。产品策划及运营部旨在培养出优秀的产品经理，产品运营者和新媒体运营师。'},
               {'name' : '视觉设计部' , 'detail' : 'Ta是设计产品图形用户界面，跟踪产品视觉及体验效果的设计师。需要经常同Photopshop、Adobe Illustrator打交道的Ta们，主要负责针对pc端、移动端、海报等界面的设计，团队协作设定产品整体界面视觉风格与创意规划，对设计成果进行定期评估和研究，进行视觉元素的优化设计。视觉设计部旨在设计出优秀的互联网产品，培养视觉设计师和UI设计师。'},
               {'name' : '移动开发部' , 'detail' : 'Ta主要负责移动端产品的开发，以 Java & Kotlin，Objective-C & Swift为主要开发语言，涵盖Android、iOS两个平台。在这里你不但可以学到App开发，还能认识一大群志同道合的朋友。如果你对App开发感兴趣，对App制作有欲望，移动开发部将是你的秀场。来吧，如果你曾抱怨被大神虐哭，现在一个成为大神的机会等着你！'},
               {'name' : 'Web研发部' ,'detail' : 'Ta的职责包括“重邮小帮手”微信公众号、移动端／PC端网站开发、助力掌上重邮APP、提供强大的后台驱动等。目前分为前端和后端方向，前端主要采用html、css、JavaScript等利器，针对PC端、移动端等不同交互领域采用不同的设计风格与技术，将视觉无限的创意以行行代码形式转化为交互良好的网站页面，并通过一系列优化手段使用户体验达到最佳。后端主要负责将产品细致入微的现实需求转化为清晰的数据模型与业务逻辑，采用PHP、Java等开发语言操作数据库并进行严格的分析处理，掌控数据传递处理路上的每个流程，从而为网校提供最为坚实的数据后盾'},
               {'name' : '运维安全部' , 'detail' : 'Ta既是红岩网校运维安全部(内部称之为 网校 SRE ( Site Reliability Engineering ))，也是重庆邮电大学 Linux 协会( CQUPT Linux User Group )，主要负责维护网校的服务器稳定和安全，同时也负责新项目的部署、环境安全配置和性能优化，还负责了重庆邮电大学的公益项目：重庆邮电大学开源镜像站。Ta们使用 Python语言来开发好玩有趣的项目，在这里你可以利用服务器资源来搭建自己想做的任何项目。你要对技术执着、对高性能孜孜不倦，“如果不能优雅的解决这个问题，那我们就有了两个问题”。'}
           ],
           student:[
               {'name' : '电子协会'},
               {'name' : '畅响室内乐社'},
               {'name' : '爱心社'},
               {'name' : '科技论文讲习社'},
               {'name' : '曲艺社百闻'},
               {'name' : '茶道社'},
               {'name' : 'CF对外交流协会'},
               {'name' : '移动互联网创新中心'},
               {'name' : '信息安全协会'},
               {'name' : '电子竞技协会'},
               {'name' : '数码协会'},
               {'name' : '软件技术与应用协会'},
               {'name' : 'Linux协会'},
               {'name' : '硬件技术与应用协会'},
               {'name' : '街舞协会'},
               {'name' : '软通动力英才俱乐部'},
               {'name' : 'ACM程序设计协会'},
               {'name' : '机器人协会'},
               {'name' : '推理协会'},
               {'name' : '创客部落粤语社'},
               {'name' : '象棋协会'},
               {'name' : '物联网协会'},
               {'name' : '桌游协会航模协会'},
               {'name' : '科幻协会'},
               {'name' : '半导体协会'},
               {'name' : 'TG精英社'},
               {'name' : '科技创新协会'},
               {'name' : '道路交通安全协会'},
               {'name' : '素质拓展协会'},
               {'name' : '龙影棍道协会'},
               {'name' : '跑步爱好者协会'},
               {'name' : '西乐社CSDN俱乐部'},
               {'name' : '天文爱好者协会'},
               {'name' : '数学俱乐部'},
               {'name' : '数学建模协会'},
               {'name' : '物理协会'},
               {'name' : '科普写作社'},
               {'name' : '电子商务协会'},
               {'name' :'金融协会'},
               {'name' : '创业者协会'},
               {'name' : '市场营销协会'},
               {'name' : 'ERP协会'},
               {'name' : 'CQUPT动漫协会'},
               {'name' : '电影协会'},
               {'name' : '摄影协会'},
               {'name' : '镝鹤汉服文化协会'},
               {'name' : '手作社民族乐器协会'},
               {'name' : '重邮剧社音乐协会'},
               {'name' : '南山文学社'},
               {'name' : '魔术协会'},
               {'name' : '美妆社'},
               {'name' : '花卉绿植社'},
               {'name' : '文峰画社'},
               {'name' : '兰亭书社'},
               {'name' : '英语辩论协会'},
               {'name' : '翻译协会'},
               {'name' : '饮食文化协会'},
               {'name' : '英语俱乐部'},
               {'name' : 'Beat-box协会'},
               {'name' : '印迹3D打印社'},
               {'name' : '红色社团'},
               {'name' : '射艺协会'},
               {'name' : '政法论坛诵读协会'},
               {'name' : '识途社'},
               {'name' : '三农协会'},
               {'name' : '健身协会'},
               {'name' : '足球协会'},
               {'name' : '篮球协会'},
               {'name' : '武术协会'},
               {'name' : '乒乓球协会'},
               {'name' : '羽毛球协会'},
               {'name' : '体育舞蹈协会'},
               {'name' : '健美操协会'},
               {'name' : '跆拳道协会'},
               {'name' : '瑜伽协会'},
               {'name' : '排球社'},
               {'name' : '花样跳绳协会'},
               {'name' : '骆驼社'},
               {'name' : '吉他社'},
               {'name' : '辩论协会'},
               {'name': '无线电定向测向运动协会'},
               {'name' : '学生消防志愿者协会'},
               {'name' : '教育信息化创新创业协会'},
               {'name' : '支付宝俱乐部'},
               {'name' : '创业俱乐部'}
           ] 

         }
     },
     methods:{
         indexChange:function(i){
            this.index = i
         },
     },
     computed:{
         isactive:function(){
             return this.index
         },
    },
    components:{
        'fengDetail-vue' : detail,
        'select-vue'     : select
    }
}
</script>
<style scoped>
.zu_btn_notactive{
    background-color: #174bdd;
    color:#a7ddf9;
}
.zu_btn_active{
    background-color: #43b3ff;
    color:#fff;
    box-sizing: content-box;
    border-bottom: 2px solid #154fef; 
    /* border-top:5px solid #43b3ff; */
    /* height: 101%;    */
}
.zu_btn_con{
    width: 100%;
    height:100%;
    margin-top: 30px;
}
.zu_btn_con ul{
   /* width: 100%; */
   width: 630px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    background-color: #174bdd;
}
.zu_btn_con ul li{
    width: 210px;
    height: 100%;
    text-align: center;
    line-height: 50px;
    border:1px solid #174bdd;
}
.zu_btn_con ul li span{
    display: block;
    width: 100%;
    height: 100%;
}
.zu_btn_con ul li span a{
    display: block;
    width: 100%;
    height: 100%;   
    font-size: 26px;
}
.zu_btn_con  .redRock{
    width: 100%;
    margin-bottom: 20px;
    background-color: #c5e0ff;
    border: 4px solid #3182ee;
}

.zu_btn_con .school , .zu_btn_con .student{
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    width: 100%;
    height: auto;
    margin-top: 20px;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: #c5e0ff;
    border: 4px solid #3182ee;
}
/*.zu_btn_con .school div ,*/ .zu_btn_con .student div{
    width: 200px;
    height: 80px;
    text-align: center;
    margin-bottom: 10px;
    font-family: 'PingFang-blod';
}
/*.zu_btn_con .school div a ,*/ .zu_btn_con .student div{
    font-size: 24px;
    color:#4369e8;
}
.zu_btn_con .redRock{
    width: 100%;
    height: auto;
    margin-top: 20px;
    padding-bottom: 60px;
}
.zu_btn_con .redRock .introduction{
    width: 100%;
    height: auto;
    width: 580px;
    margin: 0 auto;
    font-family: 'not specified'
}
.zu_btn_con .redRock .introduction p{
    display: block;
    margin-top: 20px;
    font-size: 26px;
    font-weight: 600;
    color: #174bdd;
}
.zu_btn_con .redRock .introduction div{
    margin-top: 10px;
    font-size: 24px;
    line-height: 40px;
    color:#4369e8;
    font-family: 'PingFang-blod'
}
.zu_btn_con .redRock .redRock_name{
    width: 100%;
    height: 80px;
    margin-top: 30px;
}
.zu_btn_con .redRock .redRock_name span{
    display:block;
    height: 100%;
    width: 200px;
    text-align: center;
    line-height: 80px;
    margin: 0 auto;
    color: #fff;
    border-top-right-radius: 20px;
    background-color: #4b75e5;
}
@font-face {
    font-family: "PingFang-blod" ;
    font-weight: normal;
    font-style: normal;
    src:url( '../../assets/css/fonts/PingFang_Bold.ttf') format('truetype');
}
</style>
