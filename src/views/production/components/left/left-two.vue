<template>
    <environmentData title="接种区实时环境数据" :max-height="maxHeight" :data="data"></environmentData>
</template>

<script>
import environmentData from '../common/environment-data.vue';
import { randomData } from '../../../../utils/';
import { left2 } from '../../../../data/production';

const { data, ms } = left2;

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