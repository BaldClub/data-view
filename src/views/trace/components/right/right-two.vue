<template>
  <div class="content">
    <h2>扫码销售对比</h2>
    <div ref="echarts" :style="{ height: maxHeight * 0.9 + 'px' }"></div>
  </div>
</template>

<script>
export default {
  props: ["maxHeight"],
  data() {
    return {
      echarts: "",
      option: {
        legend: {
          data: ["Rainfall", "Evaporation"],
          textStyle: {
            color: "#fff",
            // ...
          },
        },
        xAxis: {
          type: "category",
          name: "单位（时间）",
          axisLabel: {
            show: true,
            textStyle: {
              color: "#ffffff",
            },
          },
          data: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月",
          ],
        },
        yAxis: {
          type: "value",
          name: "单位（数量）",
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
            name: "Rainfall",
            type: "bar",
            data: [
              2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4,
              3.3,
            ],
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
            name: "Evaporation",
            type: "bar",
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0,
              2.3,
            ],
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
