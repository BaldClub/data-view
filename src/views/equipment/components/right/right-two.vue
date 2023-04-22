<template>
  <div class="content">
    <h2>设备构成</h2>
    <div ref="echarts" :style="{ height: `${maxHeight * 0.9}px` }"></div>
  </div>
</template>

<script>
import { right2 } from '../../../../data/equipment';


export default {
  props: ["maxHeight", "data"],
  data() {
    return {
      echarts: "",
      option: {
        legend: {
          bottom: "20",
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: [50, 100],
            center: ["50%", "40%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 8,
            },
            data: right2.data,
          },
        ],
      },
    };
  },
  mounted() {
    this.initCharts();
  },
  watch:{
    data(val, old){
      if(val){
        this.option.series[0].data = val.data
        this.initCharts();
      }
    }
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
