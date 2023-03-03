<template>
    <div class="content">
        <h2>能源消耗</h2>
        <div ref="echarts" :style="{height: maxHeight * 0.9 + 'px'}">
  
        </div>
    </div>
  </template>
  
  <script>
    export default {
      props: [ 'maxHeight' ],
      data(){
        return {
          echarts:'',
          option :{
            xAxis: {
              type: 'category',
              name: '单位（月）',
              axisLabel: {
                  show: true,
                  textStyle: {
                      color: '#ffffff'
                  }
              },
              data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月','八月','九月','十月','十一月','十二月']
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
            grid:{
                top: 40,
                right: 70,
                bottom: 50
            },
            series: [
              {
                itemStyle: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                          offset: 0, color: 'rgb(255, 0, 135)' // 0% 处的颜色
                      }, 
                      {
                          offset: 0.1, color: 'rgb(135, 0, 157)' // 100% 处的颜色
                      },
                      {
                          offset: 0.5, color: 'rgb(55, 162, 255)' // 100% 处的颜色
                      },
                      {
                          offset: 0.7, color: 'rgb(0, 221, 255)' // 100% 处的颜色
                      },
                      {
                          offset: 1, color: 'rgb(128, 255, 165)' // 100% 处的颜色
                      }
                    ],
                    global: false // 缺省为 false
                  }
                },
                data: [120, 200, 150, 80, 70, 110, 130, 13, 130, 130, 130, 130],
                type: 'bar'
              }
            ]
          }
        }
      },
      mounted(){
          this.initCharts()
      },
      methods:{
        initCharts(){
            this.echarts = this.$echarts.init(this.$refs.echarts) 
            this.echarts.setOption(this.option)
        }
      }
    }
  </script>
  
  <style lang="less" scoped>
  .content{
    h2{
      padding-left: 0.6em;
      text-align: left;
    }
  }
  </style>
  