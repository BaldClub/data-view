<template>
    <environmentData title="灭菌强冷区实时环境数据" :max-height="maxHeight" :data="data"></environmentData>
</template>

<script>
import environmentData from '../common/environment-data.vue';
import { randomData } from '../../../../utils/';
import { left3 } from '../../../../data/production';

const { data, ms } = left3;

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