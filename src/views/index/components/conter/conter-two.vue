<template>
  <div class="content">
      <h2>食用菌实时批发价格</h2>
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
        colorStopsList:[
          [
            {offset: 0, color: 'rgb(128, 255, 165)' }, 
            {offset: 1, color: 'rgb(1, 191, 236)' }
          ],
          [
            {offset: 0, color: 'rgb(0, 221, 255)' }, 
            {offset: 1, color: 'rgb(77, 119, 255)' }
          ],
          [
            {offset: 0, color: 'rgb(255, 162, 0)' }, 
            {offset: 1, color: 'rgb(255, 231, 179)' }
          ],
          [
            {offset: 0, color: 'rgb(255, 0, 135)' }, 
            {offset: 1, color: 'rgb(135, 0, 157)' }
          ],
          [
            {offset: 0, color: 'rgb(255, 191, 0)' }, 
            {offset: 1, color: 'rgb(224, 62, 76)' }
          ],
          [
            {offset: 0, color: 'rgb(255, 0, 191)' }, 
            {offset: 1, color: 'rgb(255, 179, 200)' }
          ],
        ],
        seriesItem:{
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
        titleList: ['平菇', '黑木耳', '香菇', '金针菇', '茶树菇','杏鲍菇'],
        option :{
          legend: {
            data: ['平菇', '黑木耳', '香菇', '金针菇', '茶树菇','杏鲍菇'],
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
                name: '单位（元/kg）',
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
            series: []
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
        for(let i = 0; i< this.titleList.length ;i++){
          let item = JSON.parse(   JSON.stringify(this.seriesItem)   )
          item.name = this.titleList[i]
          item.areaStyle.color.colorStops = this.colorStopsList[i]
          let arr = []
          for(let j =0; j < 12;j++){
              arr.push(Math.random(j)* 100)
          }
          item.data = arr
          this.option.series.push(item)
        }
        console.log(this.option.series);
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
