<template>
  <div class="content">
    <h2>原材料消耗统计</h2>
    <div ref="echarts" :style="{ height: `${maxHeight * 0.9}px` }"></div>
  </div>
</template>

<script>
import { left2 } from '../../../../data/farm-work';

const { monthList, materialOut } = left2;

export default {
  props: ["maxHeight", 'data'],
  data() {
    return {
      echarts: "",
      color: ['#4c92ba', 'rgb(55, 162, 255)', 'rgb(128, 255, 165)'],
      option: {
        legend: {
          data: ["木屑", "石膏", '玉米面'],
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
          data: monthList,
        },
        yAxis: {
          type: "value",
          name: "单位（吨）",
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
    this.initData(materialOut)
  },
  watch:{
    data(val,old){
      if(val){
        this.initData(val.materialOut)
      }
    }
  },
  methods: {
    initCharts() {
      this.echarts = this.$echarts.init(this.$refs.echarts);
      this.echarts.setOption(this.option);
    },
    // 数据初始化
    initData(materialOut) {
      this.option.series = []
      for (let i = 0; i < materialOut.length; i++) {
        let series = {
          name: materialOut[i].name,
          type: "bar",
          data: materialOut[i].data,
          markLine: {
            data: [{ type: "average", name: "Avg" }],
          },
          itemStyle: {
            color: this.color[i]
          },
        }
        this.option.series.push(series)
      }
      this.initCharts();
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
