<template>
    <div class="content">
        <h2>气候统计</h2>
        <div ref="echarts" :style="{ height: `${maxHeight * 0.9}px` }"></div>
    </div>
</template>

<script>
import { conter_two } from '../../../../data/environmental';

const { indicator, data } = conter_two;

export default {
    props: ['maxHeight', 'data'],
    data() {
        return {
            echarts: '',
            option: {
                title: {
                    top: 10,
                    left: 10,
                },
                tooltip: {
                    trigger: 'item',
                },
                radar: {
                    indicator: conter_two.indicator,
                },
                series: [
                    {
                        type: 'radar',
                        symbol: 'none',
                        lineStyle: {
                            width: 1,
                        },
                        emphasis: {
                            areaStyle: {
                                color: '#4e76bf',
                            },
                        },
                        areaStyle: {
                            color: '#95bfbc',
                        },
                        data: conter_two.data,
                    },
                ],
            },
        };
    },
    watch: {
        data(val, old) {
            if (val) {
                this.option.radar.indicator = val.indicator;
                this.option.series[0].data = val.data;
                this.initCharts();
            }
        },
    },
    mounted() {
        this.initCharts();
    },
    methods: {
        initCharts() {
            this.echarts = this.$echarts.init(this.$refs.echarts);
            this.echarts.setOption(this.option);
        },
    },
};
</script>

<style lang="less" scoped>
.content {
    h2 {
        padding-left: 0.6em;
        text-align: left;
    }
}
</style>
