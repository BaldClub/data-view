<template>
  <environmentData title="接种区实时环境数据" :max-height="maxHeight" :data="data"></environmentData>
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
                value: '19 ℃'
            },
            {
                name: '空气湿度',
                value: '58 %'
            },
            {
                name: '光照',
                value: '1510 Lux'
            },
            {
                name: 'CO2浓度',
                value: '870 ppm'
            },
            {
                name: 'CO浓度',
                value: '98 ppm'
            },
            
        ]
      }
  },
};
</script>