<template>
  <div id="jiemiscroll">
    <div class="chart-wrapper">
      <v-chart :options="opt" />
    </div>
  </div>
</template>

<script>
import { shengyuan } from "@/assets/js/data.js";
export default {
  data() {
    return {
      shengyuan: Object.fromEntries(
        Object.entries(shengyuan).sort(
          ([, current], [, next]) => current - next
        )
      ),
      opt: {}
    };
  },
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      this.opt = {
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          show: false,
          max: 800
        },
        yAxis: {
          type: "category",
          data: Object.keys(this.shengyuan),
          boundaryGap: true,
          axisLine: {
            lineStyle: {
              color: "#4d75e8",
              width: 4,
              type:'solid'
            }
          },
          axisTick: {
            alignWithLabel: true
          },
          axisLable: {
            textStyle: {
              fontWeight: "bold",
              fontFamily: "pingfang-bold"
            }
          },

          zlevel: 1
        },
        series: [
          {
            type: "bar",
            name: "生源比例",
            data: Object.values(this.shengyuan),
            label: {
              show: true,
              color: "#2954ba",
              formatter: "{c}",
              position: "insideRight",
              distance: -13,

              color: "#7095ff",
              fontSize: 10,
              fontWeight: 500,
              fontFamily: "pingfang-regular",
              align: "middle",
              verticalAlign: "middle"
            },

            barWidth: "65%",
            barCategoryGap: "60%",
            // barWidth: 20,
            // barHeight: 50,
            itemStyle: {
              // borderColor: "#fff",
              // borderWidth: 1,
              shadowColor: "#fff",
              shadowBlur: 8,
              opacity: 1,

              color(params) {
                // build a color map as your need.
                const colorList = [
                  "#ff9dba",
                  "#ffd1a0",
                  "#fff5b4",
                  "#7ef7ff",
                  "#7095ff"
                ];
                return colorList[params.dataIndex % 5];
              }
            }
          }
        ]
      };
    }
  }
};
</script>
<style lang="scss" scoped>
#jiemiscroll {
  width: 640px;
  height: 452px;
  background-color: #c5e0ff;
  border: 2px solid #3181ef;
  margin: 10px auto 48px auto;
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
  .chart-wrapper {
    width: 577px;
    height: 1500px;
    margin: 0 auto;
    .echarts {
      width: 100%;
      height: 100%;
      margin-top: -50px;
      margin-left: -30px;
    }
  }
}
</style>