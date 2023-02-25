<template>
  <div class="content">
      <h2>扫码品种趋势</h2>
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
          legend: {
            data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5'],
            textStyle: {
              color: '#fff'
              // ...
            }
          },
          xAxis: {
                type: 'category',
                name: '单位（月）',
                boundaryGap: false,
                data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月','八月','九月','十月','十一月','十二月'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#ffffff'
                    }
                }
            },
            yAxis: {
                type: 'value',
                name: '单位（次）',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#ffffff'
                    }
                }
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                label: {
                  backgroundColor: '#6a7985'
                }
              },
            },
            grid:{
                top: 40,
                right: 70,
                bottom: 50
            },
            series: [
              {
                name: 'Line 1',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                  width: 0
                },
                showSymbol: false,
                areaStyle: {
                  opacity: 0.8,
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                          offset: 0, color: 'rgb(128, 255, 165)' // 0% 处的颜色
                      }, 
                      {
                          offset: 1, color: 'rgb(1, 191, 236)' // 100% 处的颜色
                      }
                    ],
                    global: false // 缺省为 false
                  }
                },
                emphasis: {
                  focus: 'series'
                },
                data: [140, 232, 101, 264, 90, 340, 250]
              },
              {
                name: 'Line 2',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                  width: 0
                },
                showSymbol: false,
                areaStyle: {
                  opacity: 0.8,
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                          offset: 0, color: 'rgb(0, 221, 255)' // 0% 处的颜色
                      }, 
                      {
                          offset: 1, color: 'rgb(77, 119, 255)' // 100% 处的颜色
                      }
                    ],
                    global: false // 缺省为 false
                  }
                },
                emphasis: {
                  focus: 'series'
                },
                data: [140, 232, 101, 264, 90, 340, 250]
              },
              {
                name: 'Line 3',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                  width: 0
                },
                showSymbol: false,
                areaStyle: {
                  opacity: 0.8,
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                          offset: 0, color: 'rgb(55, 162, 255)' // 0% 处的颜色
                      }, 
                      {
                          offset: 1, color: 'rgb(116, 21, 219)' // 100% 处的颜色
                      }
                    ],
                    global: false // 缺省为 false
                  }
                },
                emphasis: {
                  focus: 'series'
                },
                data: [140, 232, 101, 264, 90, 340, 250]
              },
              {
                name: 'Line 4',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                  width: 0
                },
                showSymbol: false,
                areaStyle: {
                  opacity: 0.8,
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
                          offset: 1, color: 'rgb(135, 0, 157)' // 100% 处的颜色
                      }
                    ],
                    global: false // 缺省为 false
                  }
                },
                emphasis: {
                  focus: 'series'
                },
                data: [140, 232, 101, 264, 90, 340, 250]
              },
              {
                name: 'Line 5',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                  width: 0
                },
                showSymbol: false,
                areaStyle: {
                  opacity: 0.8,
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                          offset: 0, color: 'rgb(255, 191, 0)' // 0% 处的颜色
                      }, 
                      {
                          offset: 1, color: 'rgb(224, 62, 76)' // 100% 处的颜色
                      }
                    ],
                    global: false // 缺省为 false
                  }
                },
                emphasis: {
                  focus: 'series'
                },
                data: [140, 232, 101, 264, 90, 340, 250]
              },
            ]
        }
      }
    },
    mounted(){
        this.gataData()
        this.initCharts()
    },
    methods:{
      initCharts(){
          this.echarts = this.$echarts.init(this.$refs.echarts) 
          this.echarts.setOption(this.option)

      },
      gataData(){
        for(let i in this.option.series){
          let arr = []
          for(let i =0; i < 12;i++){
              arr.push(Math.random(i)* 100)
          }
          console.log(arr);
          this.option.series[i].data = arr
        }
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
