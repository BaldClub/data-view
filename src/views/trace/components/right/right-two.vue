<template>
  <div class="content">
    <h2>扫码销售对比</h2>
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
        legend: {
          data: ["扫码", "售出"],
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
          name: "单位（数量/次数）",
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
            name: "扫码",
            type: "bar",
            data: [
              232, 241, 156,
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
            name: "售出",
            type: "bar",
            data: [
              332, 441, 256,
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
