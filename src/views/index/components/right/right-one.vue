<template>
  <div class="content">
    <h2>品种分布</h2>
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
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
          textStyle: {
            color: "#fff",
          },
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
              { value: 300, name: "Video Ads" },
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
