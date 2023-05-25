<template>
    <div class="content">
        <h2>工厂设备数量</h2>
        <div ref="echarts" :style="{ height: `${maxHeight * 0.9}px` }"></div>
    </div>
</template>

<script>
import { left2 } from '../../../../data/data-statistics';

const { deviceList, yearList } = left2;

export default {
    props: ['maxHeight', 'data'],
    data() {
        return {
            echarts: '',
            option: {
                xAxis: {
                    type: 'category',
                    name: '单位（年）',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#ffffff',
                        },
                    },
                    data: yearList,
                },
                yAxis: {
                    type: 'value',
                    name: '单位（个）',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#ffffff',
                        },
                    },
                    splitLine: {
                        show: false,
                    },
                },
                legend: {
                    data: ['设备数量'],
                    textStyle: {
                        color: '#fff',
                    },
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    },
                },
                grid: {
                    top: 40,
                    right: 70,
                    bottom: 50,
                },
                series: [
                    {
                        name: '设备数量',
                        color: ['#e9b633'],
                        data: deviceList,
                        type: 'line',
                    },
                ],
            },
        };
    },
    mounted() {
        this.initCharts();
    },
    watch: {
        data(val, old) {
            if (val) {
                this.option.xAxis.data = val.yearList;
                this.option.series[0].data = val.deviceList;
                this.initCharts();
            }
        },
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
