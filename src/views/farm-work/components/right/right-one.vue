<template>
    <div class="content">
        <h2>药品消耗</h2>
        <div ref="echarts" :style="{ height: `${maxHeight * 0.9}px` }"></div>
    </div>
</template>

<script>
import { right1 } from '../../../../data/farm-work';

export default {
    props: ['maxHeight', 'data'],
    data() {
        return {
            echarts: '',
            option: {
                xAxis: {
                    type: 'category',
                    name: '单位（月）',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#ffffff',
                        },
                    },
                    data: right1.monthList,
                },
                yAxis: {
                    type: 'value',
                    name: '单位（元）',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#ffffff',
                        },
                    },
                },
                legend: {
                    data: ['杀虫剂', '杀菌剂'],
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
                        name: '杀虫剂',
                        color: ['rgb(128, 255, 165)'],
                        data: right1.data[0],
                        type: 'line',
                        itemStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 1,
                                        color: 'rgb(255, 0, 135)', // 0% 处的颜色
                                    },
                                    {
                                        offset: 0.5,
                                        color: 'rgb(135, 0, 157)', // 100% 处的颜色
                                    },
                                    {
                                        offset: 0,
                                        color: 'rgb(55, 162, 255)', // 100% 处的颜色
                                    },
                                ],
                                global: false, // 缺省为 false
                            },
                        },
                    },
                    {
                        name: '杀菌剂',
                        color: ['rgb(128, 255, 165)'],
                        data: right1.data[1],
                        type: 'line',
                        itemStyle: {
                            color: 'rgb(128, 255, 165)',
                        },
                    },
                ],
            },
        };
    },
    watch: {
        data(val, old) {
            if (val) {
                this.option.xAxis.data = val.monthList;
                this.option.series[0].data = val.data[0];
                this.option.series[1].data = val.data[1];
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
