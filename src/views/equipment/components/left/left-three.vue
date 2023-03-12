<template>
  <div class="content">
    <h2>设备状态</h2>
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
          bottom: "20",
          textStyle: {
            color: "#fff",
          },
        },
        color:['#27ba7a','#bab21e','#ba6052'],
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "设备状态",
            type: "pie",
            radius: [50, 150],
            center: ["50%", "40%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 8,
            },
            data: [
              { value: 90, name: "正常" },
              { value: 5, name: "故障" },
              { value: 5, name: "报废" },
            ],
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
