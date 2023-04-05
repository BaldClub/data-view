<template>
    <environmentData title="拌料袋装区实时环境数据" :max-height="maxHeight" :data="data"></environmentData>
</template>
  
<script>
import environmentData from '../common/environment-data.vue';
import { randomData } from '../../../../utils/';
import { left4 } from '../../../../data/production';

const { data, ms } = left4;

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