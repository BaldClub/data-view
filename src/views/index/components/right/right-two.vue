<template>
  <div class="content">
    <h2>食用菌总产量/产值</h2>
    <div ref="echarts" :style="{ height: `${maxHeight * 0.9}px` }"></div>
  </div>
</template>

<script>
import { dateYears } from '../../data'
export default {
  props: ["maxHeight"],
  data() {
    return {
      echarts: "",
      option: {
        xAxis: {
          type: "category",
          name: "单位（月）",
          axisLabel: {
            show: true,
            textStyle: {
              color: "#ffffff",
            },
          },
          data: [],
        },
        yAxis: {
          type: "value",
          name: "单位（吨/万元）",
          axisLabel: {
            show: true,
            textStyle: {
              color: "#ffffff",
            },
          },
        },
        legend: {
          data: ["产量", "产值"],
          textStyle: {
            color: "#fff",
            // ...
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          top: 40,
          right: 70,
          bottom: 50,
        },
        series: [
          {
            name: "产量",
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#9ec9e2", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#057be2", // 100% 处的颜色
                  }
                ],
                global: false, // 缺省为 false
              },
            },
            data: [120, 200, 150, 80, 70, 110, 130, 13, 130, 130, 130, 130],
            type: "bar",
          },
          {
            name: "产值",
            color: ["#e24d3f"],
            data: [
              150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135, 147,
            ],
            type: "line",
          },
        ],
      },
    };
  },
  mounted() {
    this.initData()
    this.initCharts();
  },
  methods: {
    initCharts() {
      this.echarts = this.$echarts.init(this.$refs.echarts);
      this.echarts.setOption(this.option);
    },
    initData(){
      this.option.xAxis.data = dateYears
    }
  },
};
</script>

<style lang="less" scoped>
.content {
  h2 {
    padding-left: 0.6em;
    text-align: left;
  }
}
</style>
