<template>
    <environmentData title="拌料袋装区实时环境数据" :max-height="maxHeight" :data="data"></environmentData>
</template>
  
<script>
import environmentData from '../common/environment-data.vue';
import { randomData } from '../../../../utils/';
import { left4 } from '../../../../data/production';

export default {
    components: {
        environmentData
    },
    props: ["maxHeight", "apiData"],
    data() {
        return {
            data: left4.data,
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
        randomData(this, left4.ms);
    }
};
</script>