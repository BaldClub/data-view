<template>
  <div class="content">
    <h2>预警报警次数</h2>
    <div ref="echarts" :style="{ height: `${maxHeight * 0.9}px` }">

    </div>
  </div>
</template>
  
<script>
export default {
  props: ['maxHeight'],
  data() {
    return {
      echarts: '',
      option: {
        xAxis: {
          type: 'category',
          name: '单位（月）',
          axisLabel: {
            show: true,
            textStyle: {
              color: '#ffffff'
            }
          },
          data: []
        },
        yAxis: {
          type: 'value',
          name: '单位（次）',
          axisLabel: {
            show: true,
            textStyle: {
              color: '#ffffff'
            }
          },
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: 40,
          right: 70,
          bottom: 50
        },
        series: [
          {
            itemStyle: {
              color: '#ba7f86'
            },
            data: [21, 31, 12],
            type: 'bar'
          }
        ]
      }
    }
  },
  mounted() {
    this.initData()
    this.initCharts()
  },
  methods: {
    initCharts() {
      this.echarts = this.$echarts.init(this.$refs.echarts)
      this.echarts.setOption(this.option)
    },
    // 数据初始化
    initData() {
      let xData = []
      let now = new Date().getMonth();
      for (var i = 0; i <= now; i++) {
        xData.push((i + 1) + '月')
      }
      this.option.xAxis.data = xData
    }
  }
}
</script>
  
<style lang="less" scoped>
.content {
  h2 {
    padding-left: 0.6em;
    text-align: left;
  }
}
</style>
  