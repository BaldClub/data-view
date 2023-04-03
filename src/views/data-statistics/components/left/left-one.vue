<template>
  <div class="content">
    <h2>工厂产值/利润对比</h2>
    <div ref="echarts" :style="{ height: `${maxHeight * 0.9}px` }"></div>
  </div>
</template>

<script>
import { left1 } from '../../../../data/data-statistics';

export default {
  props: ["maxHeight"],
  data() {
    return {
      echarts: "",
      option: {
        legend: {
          data: ["产值", "利润"],
          textStyle: {
            color: "#fff",
          },
        },
        xAxis: {
          type: "category",
          name: "单位（月）",
          axisLabel: {
            show: true,
            textStyle: {
              color: "#ffffff",
            },
          },
          data: left1.xData,
        },
        yAxis: {
          type: "value",
          name: "单位（万元）",
          axisLabel: {
            show: true,
            textStyle: {
              color: "#ffffff",
            },
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
            name: "产值",
            type: "bar",
            data: left1.outputValue,
            markLine: {
              data: [{ type: "average", name: "Avg" }],
            },
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 1,
                    color: "rgb(255, 0, 135)", // 0% 处的颜色
                  },
                  {
                    offset: 0.5,
                    color: "rgb(135, 0, 157)", // 100% 处的颜色
                  },
                  {
                    offset: 0,
                    color: "rgb(55, 162, 255)", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
          },
          {
            name: "利润",
            type: "bar",
            data: left1.data,
            markLine: {
              data: [{ type: "average", name: "Avg" }],
            },
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0.1,
                    color: "rgb(55, 162, 255)", // 100% 处的颜色
                  },
                  {
                    offset: 0.5,
                    color: "rgb(0, 221, 255)", // 100% 处的颜色
                  },
                  {
                    offset: 0,
                    color: "rgb(128, 255, 165)", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
          },
        ],
      },
    };
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      this.echarts = this.$echarts.init(this.$refs.echarts);
      this.echarts.setOption(this.option);
    },
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
