<template>
  <environmentData title="灭菌强冷区实时环境数据" :max-height="maxHeight" :data="data"></environmentData>
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
                value: '23 ℃'
            },
            {
                name: '空气湿度',
                value: '52 %'
            },
            {
                name: '光照',
                value: '970 Lux'
            },
            {
                name: 'CO2浓度',
                value: '650 ppm'
            },
            {
                name: 'CO浓度',
                value: '46 ppm'
            },
            
        ]
      }
  },
};
</script>