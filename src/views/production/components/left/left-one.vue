<template>
    <environmentData title="菇房区实时环境数据" :max-height="maxHeight" :data="data"></environmentData>
</template>
  
<script>
import environmentData from '../common/environment-data.vue';
import { randomData } from '../../../../utils/';
import { left1 } from '../../../../data/production';

export default {
    components: {
        environmentData
    },
    props: ["maxHeight", "apiData"],
    data() {
        return {
            data: left1.data,
            ms: 0
        }
    },
    watch:{
        apiData(val, old){
            if(val){
                this.data = val.data
                this.ms = val.data.ms
                randomData(this, this.ms);
            }
        }
    },
    mounted() {
        randomData(this, left1.ms);
    }
};
</script>