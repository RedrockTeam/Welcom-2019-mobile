<template>
  <div>
    <div id="content2">
      <select-f :school="xueyuan" class="select-f" v-model="index"></select-f>
      <div class="chart-wrapper2">
        <v-chart :options="opt" />
      </div>
    </div>
  </div>
</template>

<script>
import { difficultSubject } from "@/assets/js/data.js";
import selectF from "@/components/base/select.vue";
export default {
  data() {
    return {
      difficultSubject,
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
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: [
              this.difficultSubject[a][0].subject,
              this.difficultSubject[a][1].subject,
              this.difficultSubject[a][2].subject
            ],
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              lineStyle: {
                color: "#4d75e8",
                width: 4
              }
            },
            zlevel: 1,
            axisLabel: {
              textStyle: {
                fontWeight: "bold"
              },
              formatter: value => {
                let ret = ""; // 拼接加\n返回的类目项
                const maxLength = 5; // 每项显示文字个数
                const valLength = value.length; // X轴类目项的文字个数
                const rowN = Math.ceil(valLength / maxLength); // 类目项需要换行的行数
                if (rowN > 1) {
                  for (let i = 0; i < rowN; i += 1) {
                    let temp = ""; // 每次截取的字符串
                    const start = i * maxLength; // 开始截取的位置
                    const end = start + maxLength; // 结束截取的位置
                    // 这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                    temp = `${value.substring(start, end)}\n`;
                    ret += temp; // 凭借最终的字符串
                  }
                  return ret;
                }
                return value;
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "#4d75e8",
                width: 4
              }
            },
            axisLabel: {
              textStyle: {
                fontWeight: "bold"
              }
            }
          }
        ],
        series: [
          {
            name: "挂科比例",
            type: "bar",
            barWidth: "30%",
            data: [
              this.difficultSubject[a][0].percentage,
              this.difficultSubject[a][1].percentage,
              this.difficultSubject[a][2].percentage
            ],
            label: {
              show: true,
              color: "#2954ba",
              formatter: "{c}",
              position: "top",
              distance: 10,

              color: "#7095ff",
              fontSize: 14,
              fontWeight: 500,
              fontFamily: "pingfang-regular",
              align: "middle",
              verticalAlign: "middle"
            },
            itemStyle: {
                // shadowColor: "#fff",
                // shadowBlur: 8,
                // opacity: 1,
                color(params) {
                  // build a color map as your need.
                  const colorList = ["#ff9dba", "#7095ff", "#7ef7ff"];
                  return colorList[params.dataIndex];
                }
            }
          }
        ]
      };
    }
  },
  components: {
    selectF
  },
  computed: {
    index: function() {
      console.log(this.$route.query["id"]);
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

#content2 {
  width: 640px;
  height: 452px;
  background-color: #c5e0ff;
  border: 2px solid #3181ef;
  margin: 10px auto 48px auto;

  .select-f {
    margin: 28px 30px 0 0;
  }
  .chart-wrapper2 {
    width: 440px;
    height: 366px;
    .echarts {
      // margin-top: -50px;
      transform: scale(0.8, 0.8);
    }
  }
}
</style>