<template>
  <div class="content">
    <h2>工厂资金投入</h2>
    <div ref="echarts" :style="{ height: `${maxHeight * 0.9}px` }"></div>
  </div>
</template>

<script>
import { right1 } from '../../../../data/data-statistics';

const { data, yearList } = right1;

export default {
  props: ["maxHeight"],
  data() {
    return {
      echarts: "",
      option: {
        xAxis: {
          type: "category",
          name: "单位（年）",
          axisLabel: {
            show: true,
            textStyle: {
              color: "#ffffff",
            },
          },
          data: yearList,
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
        legend: {
          data: ["资金投入"],
          textStyle: {
            color: "#fff",
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
            name: "资金投入",
            color: ["rgb(128, 255, 165)"],
            data,
            type: "line",
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
