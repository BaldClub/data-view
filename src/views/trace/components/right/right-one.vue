<template>
  <div class="content">
    <h2>客户分布统计</h2>
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
        xAxis: {
          type: "category",
          name: "单位（地区）",
          axisLabel: {
            show: true,
            textStyle: {
              color: "#ffffff",
            },
          },
          data: [
            "贵州",
            "重庆",
            "四川",
            "湖南",
            "湖北",
            "广东",
            "上海",
          ],
        },
        yAxis: {
          type: "value",
          name: "单位（人数）",
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
            data: [650, 423, 310, 280, 220, 180, 150],
            type: "bar",
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
