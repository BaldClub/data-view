<template>
    <environmentData title="菇房区实时环境数据" :max-height="maxHeight" :data="data"></environmentData>
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
                    value: '21 ℃'
                },
                {
                    name: '空气湿度',
                    value: '65 %'
                },
                {
                    name: '光照',
                    value: '1250 Lux'
                },
                {
                    name: 'CO2浓度',
                    value: '890 ppm'
                },
                {
                    name: 'CO浓度',
                    value: '100 ppm'
                },
                {
                    name: '菌包PH值',
                    value: '0'
                }
            ]
        }
    },
};
</script>