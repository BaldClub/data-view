<template>
  <div ref="echarts" class="content"></div>
</template>

<script>
import china from '@/assets/map/china.json'
import { letToLocation } from "@/data/trace.data"
export default {
  props: ["maxHeight"],
  data() {
    return {
      echarts: "",
      option: {
        tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>{c} (p / km2)'
        },
        geo: {
          map: 'china',
          zoom: 1.2,
          label: {
            emphasis: {
              show: false
            }
          },
          roam: true, //是否允许缩放
          itemStyle: {
            normal: {
              color: 'rgba(51, 69, 89, .5)', //地图背景色
              borderColor: '#516a89', //省市边界线00fcff 516a89
              borderWidth: 1
            },
            emphasis: {
              color: 'rgba(37, 43, 61, .5)' //悬浮背景
            }
          }
        },
        series: [
          {
            type: 'lines',
            zlevel: 2,
            effect: {
              show: true,
              period: 4, 
              trailLength: 0.02, 
              symbol: 'image:///arrow.png',
              symbolSize: [20, 20], //图标大小
            },
            lineStyle: {
              color:  '#33ccd2',
              curveness: .4,
              width: 1,
            },
            data: [
              [
                {
                  coord: [107.0408, 27.729605]
                },
                {
                  coord: [102.939478,25.106606],
                  value: 10
                }
              ]
            ]
          }
        ]
      },
    };
  },
  mounted() {
    this.initData()
    this.initCharts()
  },
  methods: {
    initCharts() {
      this.echarts = this.$echarts.init(this.$refs.echarts);
      this.$echarts.registerMap('china', china);
      this.echarts.setOption(this.option);
    },
    initData(){
        let data = []
        for(let i = 0;i < letToLocation.length; i++){
            data.push([
            {
              coord: [107.0408, 27.729605]
            },
            {
              coord: letToLocation[i],
              value: 10
            }
          ])
        }
        this.option.series[0].data = data
    }
  },
};
</script>

<style lang="less" scoped>
.content{
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
}
</style>
