<template>
  <div class="content">
    <h2>设备总数</h2>
    <div ref="echarts" :style="{ height: `${maxHeight * 0.9}px` }">

    </div>
  </div>
</template>
  
<script>
import { left1 } from '../../../../data/equipment';

const { yearList, data } = left1;

export default {
  props: ['maxHeight'],
  data() {
    return {
      echarts: '',
      option: {
        xAxis: {
          type: 'category',
          name: '单位（年）',
          axisLabel: {
            show: true,
            textStyle: {
              color: '#ffffff'
            }
          },
          data: yearList,
        },
        yAxis: {
          type: 'value',
          name: '单位（台）',
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
              color: '#2fb5ba'
            },
            data,
            type: 'bar'
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
  