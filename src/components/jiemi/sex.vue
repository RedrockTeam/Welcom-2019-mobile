<template>
  <div>
    <div id="content">
      <select-f :school="xueyuan" class="select-f" v-model="index"></select-f>
      <div class="chart-wrapper">
        <v-chart :options="opt" class="piechart" />
      </div>

      <div class="tuli">
        <div class="female-label">
          <span class="bgsex"></span>
          <span class="gender">女</span>
        </div>
        <div class="male-label">
          <span class="bgsex"></span>
          <span class="gender">男</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sex } from "@/assets/js/data.js";
import selectF from "@/components/base/select.vue";
export default {
  data() {
    return {
      sex,
      xueyuan: [
        {
          name: "软件工程学院"
        },
        {
          name: "传媒艺术学院"
        },
        {
          name: "体育学院"
        },
        {
          name: "先进制造工程学院"
        },
        {
          name: "国际半导体学院"
        },

        {
          name: "国际学院"
        },
        {
          name: "外国语学院"
        },
        {
          name: "现代邮政学院"
        },

        {
          name: "理学院"
        },
        {
          name: "生物信息学院"
        },
        {
          name: "经济管理学院"
        },
        {
          name: "网络空间安全与信息法学院"
        },
        {
          name: "自动化学院"
        },
        {
          name: "计算机科学与技术学院"
        },
        {
          name: "通信与信息工程学院"
        },

        {
          name: "光电工程学院"
        },
        {
          name: "学校"
        }
      ],
      opt: {}
    };
  },
  mounted() {
    this.draw(0);
  },
  methods: {
    draw(a) {
      this.opt = {
        // 没起作用
        // legend: {
        //   left:'left',
        //   orient: "horizontal",
        //   width: 160,
        //   height: 16,
        //   itemGap: 16,
        //   itemWidth: 32,
        //   itemHeight: 15,
        //   data: ["男", "女"],
        //   textStyle: {
        //     color: "#4d75e8",
        //     fontFamily: "pingfang-bold",
        //     fontSize: 20,
        //     fontWeight: "bold",
        //     lineHeight: 15
        //   }
        // },
        // baseOption: {
          color: ["#97ffff", "#ff9dba"],
          series: [
            {
              type: "pie",
              name: "男女比例",
              radius: "80%",
              center: ["50%", "50%"],
              label: {
                show: true,
                position: "inside",
                formatter: "{d}%",
                fontFamily: "yinX",
                fontSize: 8,
                fontWeight: "bold",
                align: "center",
                // lineHeight: 20,
                color: "#567eea"
              },
              itemStyle: {
                borderColor: "#4d75e8",
                borderWidth: 1
              },
              data: [
                { value: this.sex[a].male, name: "男" },
                { value: this.sex[a].female, name: "女" }
              ]
            }
          ]
        // },
        //  media:[
        //   {
        //     query: {
        //       minWidth: 480,
        //     },
        //     option: {
        //       series: [
        //         {
        //           radius: "100%",
        //           label: {
        //             fontSize:20,
        //           }
        //         }
                
        //       ]
        //     },
            
        //   },
        // ],
      };
    }
  },
  components: {
    selectF
  },
  computed: {
    index: function() {
      this.draw(this.$route.query["id"]);
      return this.$route.query["id"];
    }
  }
};
</script>
<style lang="scss" scoped>
// 设置样式
// .select-f {
//   // width: 250px;
//   // height: 40px;
//   color: #225bec;
//   font-size: 26px;
//   font-family: "pingfang";
//   background: #b7e8ff;
//   border: 2px solid #225bec;
// }

#content {
  width: 640px;
  height: 452px;
  background-color: #c5e0ff;
  border: 2px solid #3181ef;
  margin: 10px auto 48px auto;

  .select-f {
    margin: 28px 30px 0 0;
  }

  .chart-wrapper {
    width: 290px;
    height: 290px;
    margin-left: 160px;
    margin-top: 100px;

    // border: 3px solid #4d75e8;
    border-radius: 50%;
    // overflow: hidden;
    padding: auto auto;

    .echarts {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 290px;
      height: 290px;

      // transform: scale(1.5);

      // transform: translate(-160px, -60px);
    }
  }

  .tuli {
    display: flex;
    justify-content: space-between;
    width: 160px;
    height: 16px;
    margin: 16px auto;
    .female-label {
      width: 60px;
      height: 15px;
      display: flex;
      justify-content: space-between;
      // margin-right: 35px;
      .gender {
        float: right;
        display: block;
        font-size: 20px;
        font-family: "pingfang";
        color: #4d75e8;
        line-height: 15px;
        font-weight: bold;
      }
      .bgsex {
        display: inline-block;
        width: 32px;
        height: 15px;
        background: #ff9dba;
      }
    }
    .male-label {
      width: 60px;
      height: 15px;

      display: flex;
      justify-content: space-between;
      .gender {
        display: block;
        font-size: 20px;
        font-family: "pingfang";
        color: #4d75e8;
        line-height: 15px;
        font-weight: bold;
      }
      .bgsex {
        display: inline-block;
        width: 32px;
        height: 16px;
        background: #97ffff;
      }
    }
  }
}
</style>