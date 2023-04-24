<template>
    <environmentData title="接种区实时环境数据" :max-height="maxHeight" :data="data"></environmentData>
</template>

<script>
import environmentData from '../common/environment-data.vue';
import { randomData } from '../../../../utils/';
import { left2 } from '../../../../data/production';

export default {
    components: {
        environmentData
    },
    props: ["maxHeight", "apiData"],
    data() {
        return {
            data: left2.data,
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
        randomData(this, left2.ms);
    }
};
</script>