<template>
  <div class="content">
    <h2>食用菌实时批发价格</h2>
    <div ref="echarts" :style="{ height: maxHeight * 0.9 + 'px' }"></div>
  </div>
</template>

<script>
export default {
  props: ["maxHeight"],
  data() {
    return {
      echarts: "",
      titleList: ["平菇", "黑木耳", "香菇", "金针菇", "茶树菇", "杏鲍菇"],
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            animation: false
          }
        },
        legend: {
          data:["平菇", "黑木耳", "香菇", "金针菇", "茶树菇", "杏鲍菇"],
          textStyle: {
            color: "#fff",
          },
        },
        xAxis: {
          type: 'time',
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%'],
          splitLine: {
            show: false
          }
        },
        series: []
      }
    }
  },
  mounted() {
    this.getData()
    this.initCharts();
  },
  methods: {
    initCharts() {
      this.echarts = this.$echarts.init(this.$refs.echarts);
      this.echarts.setOption(this.option);
    },
    randomData(now, value) {
      return {
        name: now.toString(),
        value: [
          [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
          Math.round(value)
        ]
      };
    },
    getData(){
      let oneDay = 24 * 3600 * 1000;
      let value = Math.random() * 1000;
      for(let j=0; j < 6;j++){
        let now = new Date(2022, 9, 3);
        let item = []
        let series = {
          name: 'Fake Data',
          type: 'line',
          showSymbol: false,
          data: []
        }
        for (var i = 0; i < 100; i++) {
          now = new Date(+ now + oneDay);
          value = value + Math.random() * 21 - 10;
          item.push(this.randomData(now,value));
        }
        series.name = this.titleList[j]
        series.data = JSON.parse(JSON.stringify(item))
        this.option.series.push(JSON.parse(JSON.stringify(series)));
      }
      console.log(this.option.series);
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
