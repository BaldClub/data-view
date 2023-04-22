<template>
  <div class="content">
    <h2>食用菌总产量/产值</h2>
    <div ref="echarts" :style="{ height: `${maxHeight * 0.9}px` }"></div>
  </div>
</template>

<script>
import { yearList } from '../../../../data/data'
import { allYield } from '../../../../data/index.data'
import { allYieldApi } from '@/api/index'
export default {
  props: ["maxHeight"],
  data() {
    return {
      echarts: "",
      option: {
        xAxis: {
          type: "category",
          name: "单位（月）",
          axisLabel: {
            show: true,
            textStyle: {
              color: "#ffffff",
            },
          },
          data: [],
        },
        yAxis: {
          type: "value",
          name: "单位（吨/万元）",
          axisLabel: {
            show: true,
            textStyle: {
              color: "#ffffff",
            },
          },
        },
        legend: {
          data: ["产量", "产值"],
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          top: 40,
          right: 70,
          bottom: 50,
        },
        series: [
          {
            name: "产量",
            color: '#5dd5f0',
            data:[],
            type: "bar",
          },
          {
            name: "产值",
            color: ["#e24d3f"],
            data: [],
            type: "line",
          },
        ],
      },
    };
  },
  mounted() {
    this.initData()
    
  },
  methods: {
    initCharts() {
      this.echarts = this.$echarts.init(this.$refs.echarts);
      this.echarts.setOption(this.option);
    },
    initData(){
      this.option.xAxis.data = yearList
      allYieldApi().then(res =>{
        let data = res.data.allYield

        this.option.series[0].data = data[0]
        this.option.series[1].data = data[1]

        console.log(this.option.series[0].data);

      }).catch(err=>{
        this.option.series[0].data = allYield[0]
        this.option.series[1].data = allYield[1]
      }).finally(()=>{
        this.initCharts();
      })
    }
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
