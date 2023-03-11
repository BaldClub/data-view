<template>
  <div class="content">
    <h2>工厂设备数量</h2>
    <div ref="echarts" :style="{ height: `${maxHeight * 0.9}px` }"></div>
  </div>
</template>

<script>
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
          data: [
            "2019","2020","2021", "2022",
          ],
        },
        yAxis: {
          type: "value",
          name: "单位（个）",
          axisLabel: {
            show: true,
            textStyle: {
              color: "#ffffff",
            },
          },
          splitLine: {
            show: false
          }
        },
        legend: {
          data: ["设备数量"],
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
            name: "设备数量",
            color: ["#e9b633"],
            data: [
              55, 130, 144,150,180, 210
            ],
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
