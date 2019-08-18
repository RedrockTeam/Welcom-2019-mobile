<template>
  <div>
    <div id="top">
      <btn-h></btn-h>
    </div>
    <main-card>
      <div id="main">
        <div v-for="item in items" :key="item.index" class="item">
          <img :src="item.url" />
          <div class="word">
            <p class="tit">{{item.title}}</p>
            <p class="con">{{item.content}}</p>
          </div>
        </div>
      </div>
    </main-card>
  </div>
</template>

<script>


import cqupt from "../../assets/images/gonglue/gongzhonghao/cqupt.jpg";
import help from "../../assets/images/gonglue/gongzhonghao/help.jpg";
import teg from "../../assets/images/gonglue/gongzhonghao/teg.jpg";
import school from "../../assets/images/gonglue/gongzhonghao/school.png";
import job from "../../assets/images/gonglue/gongzhonghao/job.jpg";
import work from "../../assets/images/gonglue/gongzhonghao/work.jpg";
import protect from "../../assets/images/gonglue/gongzhonghao/protect.png";
import party from "../../assets/images/gonglue/gongzhonghao/party.jpg";



export default {
  data() {
    return {
      items: [
        {
          url: cqupt,
          title: "重庆邮电大学",
          content:
            "负责学校新闻的制作与发布，校务信息发布，师生作品推送，校园文化建设。"
        },
        {
          url: help,
          title: "重邮小帮手",
          content:
            "重邮影响力最大、关注量最高的新媒体平台，“重庆十大微信公众号”。先后获得“首届全国高校优秀网络栏目提名奖”、腾讯校园应用“最佳人气产品”等殊荣。"
        },
        {
          url: teg,
          title: "重邮青年",
          content:
            "致力于为广大重邮学子提供最精彩的校园动态一一这里有最引人注目的新闻资讯|这里 有最方便实用的知识信息、逗趣感动的青春互动。"
        },
        {
          url: school,
          title: "重邮微校",
          content:
            "重庆邮电大学党委学生工作处运营，功能定位:学生教育管理，评奖评优，心理健康教育，学生党员教育，职业生涯规划，学业辅导，学生资助等推送。"
        },
        {
          url: job,
          title: "重庆邮电大学就业中心",
          content:
            "重庆邮电大学就业中心官方微信，实时发布校内招聘信息，就业动态等相关信息。"
        },
        {
          url: work,
          title: "重庆邮电大学招生办公室",
          content:
            "提供重庆邮电大学招生计划、录取分数线、招生简章、新生班级、宿舍分配情况、新生缴费情况的查询和咨询服务。"
        },
        {
          url: protect,
          title: "重邮小卫士",
          content:
            "重庆邮电大学保卫处运营，集安全教育、安全服务、信息通报、应急处置等功能为一体旨在传播安全知识，增强师生安全防范意识，服务于校园安全稳定工作。"
        },
        {
          url: party,
          title: "学生会",
          content: "认真，诚恳，有态度。尽我们所能，为重邮学生服务。"
        }
      ]
    };
  }

};
</script>
<style lang="scss" scoped>
$theme: #003ee0;

#main {

  height: 1480px;

  padding: 22px auto;
  margin: 0 auto;

  .item {
    width: 640px;
    height: 238px;
    border: solid 3px $theme;
    background-color: #c5e0ff;
    margin: 14px auto;
    display: flex;
    img {
      width: 211px;
      height: 211px;
      margin: 8px;
      border: solid 2px $theme;
    }
    .word {
      
      opacity: 0.8;
      color: $theme;
      letter-spacing: 2px;

      width: 426px;
      margin: 24px 26px auto 5px;
      .tit {
        font-size: 28px;
        font-weight: bold;
        opacity: 0.9;
        margin-bottom: 14px;
        font-family: "pingfang-bold";
      }
      .con {
        font-size: 20px;
        opacity: 0.8;
        line-height: 28px;
        font-family: "pingfang-regular";
      }
    }
  }
}

</style>