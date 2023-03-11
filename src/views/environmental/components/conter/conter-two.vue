<template>
  <div class="content">
    <h2>气候统计</h2>
    <div ref="echarts" :style="{ height: `${maxHeight * 0.9}px` }"></div>
  </div>
</template>

<script>
const ONE_DAY = 24 * 3600 * 1000
export default {
  props: ["maxHeight"],
  data() {
    return {
      echarts: "",
      option: {
        title: {
          top: 10,
          left: 10
        },
        tooltip: {
          trigger: 'item'
        },
        radar: {
          indicator: [
            { text: '晴天', max: 100 },
            { text: '多云', max: 100 },
            { text: '阴天', max: 100 },
            { text: '小雨', max: 100 },
            { text: '中雨', max: 100 },
            { text: '大雨', max: 100 },
            { text: '雪', max: 100 }
          ]
        },
        series: [
          {
            type: 'radar',
            symbol: 'none',
            lineStyle: {
              width: 1
            },
            emphasis: {
              areaStyle: {
                color: '#4e76bf'
              }
            },
            areaStyle: {
                color: '#95bfbc',
            },
            data: [
              {
                name: '天气',
                value: [
                  70,90,67,32,23,30,30,
                ]
              }
            ]
          }
        ]
      }
    }
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      this.echarts = this.$echarts.init(this.$refs.echarts);
      this.echarts.setOption(this.option);
    },
  }
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
