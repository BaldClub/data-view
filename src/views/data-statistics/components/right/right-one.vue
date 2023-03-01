<template>
    <div class="content">
        <h2>工厂资金投入</h2>
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
            legend: {
              data: ['总产量', '产值'],
              textStyle: {
                color: '#fff'
              }
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
                name: '产值',
                color: ['rgb(128, 255, 165)'],
                data: [150, 230, 224, 218, 135, 147, 260,150, 230, 224, 218, 135, 147, ],
                type: 'line'
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
  