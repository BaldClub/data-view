<template>
  <div class="content">
    <h2>设备使用时长排名</h2>
    <div ref="echarts" :style="{ height: maxHeight * 0.9 + 'px' }"></div>
  </div>
</template>

<script>
export default {
  props: ["maxHeight"],
  data() {
    return {
      echarts: "",
      data: [],
      option: {
        xAxis: {
          max: "dataMax",
        },
        yAxis: {
          type: "category",
          data: ["A", "B", "C", "D", "E"],
          inverse: true,
          animationDuration: 300,
          animationDurationUpdate: 300,
        },
        series: [
          {
            realtimeSort: true,
            name: "X",
            type: "bar",
            data: {},
            label: {
              show: true,
              position: "right",
              valueAnimation: true,
            },
          },
        ],
        animationDuration: 0,
        animationDurationUpdate: 3000,
        animationEasing: "linear",
        animationEasingUpdate: "linear",
      },
    };
  },
  mounted() {
    this.getData();
    this.initCharts();
  },
  methods: {
    initCharts() {
      this.echarts = this.$echarts.init(this.$refs.echarts);
      this.echarts.setOption(this.option);
    },
    getData() {
      for (let i = 0; i < 5; ++i) {
        this.data.push(Math.round(Math.random() * 200));
      }
      this.option.series[0].data = this.data;
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
