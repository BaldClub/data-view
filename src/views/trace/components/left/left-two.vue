<template>
  <div class="content">
    <h2>扫码趋势</h2>
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
          name: "单位（次）",
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
            data: [],
            type: "bar",
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
    initData() {
      let xData = []
      let now = new Date().getMonth();
      for (var i = 0; i <= now; i++) {
        xData.push((i + 1) + '月')
      }
      this.option.xAxis.data = xData
      for (let i = 0; i < 12; i++) {
        this.option.series[0].data.push((Math.floor(Math.random() * 500) % 100 + 200))
      }
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
