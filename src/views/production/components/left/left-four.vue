<template>
    <environmentData title="拌料袋装区实时环境数据" :max-height="maxHeight" :data="data"></environmentData>
  </template>
  
  <script>
  import environmentData from '../common/environment-data.vue';
  export default {
    components:{
        environmentData
    },
    props: ["maxHeight"],
    data(){
        return {
          data: [
              {
                  name: '空气温度',
                  value: '22 ℃'
              },
              {
                  name: '空气湿度',
                  value: '57 %'
              },
              {
                  name: '光照',
                  value: '1020 Lux'
              },
              {
                  name: 'CO2浓度',
                  value: '750 ppm'
              },
              {
                  name: 'CO浓度',
                  value: '86 ppm'
              },
              
          ]
        }
    },
  };
  </script>