<template>
  <div class="content">
    <h2>能源消耗统计</h2>
    <div ref="echarts" :style="{ height: `${maxHeight * 0.9}px` }"></div>
  </div>
</template>

<script>
import { energy } from '../../data'
export default {
  props: ["maxHeight"],
  data() {
    return {
      echarts: "",
      color: ['#4c92ba', 'rgb(55, 162, 255)', 'rgb(128, 255, 165)'],
      option: {
        legend: {
          data: ["水", "电", '煤'],
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
          data: [],
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
        series: [],
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
    // 数据初始化
    initData() {
      let xData = []
      let now = new Date().getMonth();
      for (var i = 0; i <= now; i++) {
        xData.push((i + 1) + '月')
      }
      for (let i = 0; i < energy.length; i++) {
        let series = {
          name: energy[i].name,
          type: "bar",
          data: energy[i].data,
          markLine: {
            data: [{ type: "average", name: "Avg" }],
          },
          itemStyle: {
            color: this.color[i]
          },
        }
        this.option.series.push(series)
      }
      this.option.xAxis.data = xData
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
