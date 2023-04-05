<template>
    <environmentData title="菇房区实时环境数据" :max-height="maxHeight" :data="data"></environmentData>
</template>
  
<script>
import environmentData from '../common/environment-data.vue';
import { randomData } from '../../../../utils/';
import { left1 } from '../../../../data/production';

const { data, ms } = left1;

export default {
    components: {
        environmentData
    },
    props: ["maxHeight"],
    data() {
        return {
            data,
        }
    },
    mounted() {
        randomData(this, ms);
    }
};
</script>