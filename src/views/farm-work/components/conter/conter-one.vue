<template>
    <div class="content">
        <h2>总费用</h2>
        <div ref="echarts" :style="{ height: `${maxHeight * 0.9}px` }"></div>
    </div>
</template>

<script>
import { yearList } from '../../../../data/data';
import { centre1 } from '@/data/farm-work';
export default {
    props: ['maxHeight', 'data'],
    data() {
        return {
            echarts: '',
            colorStopsList: [
                [
                    { offset: 0, color: 'rgb(128, 255, 165)' },
                    { offset: 1, color: 'rgb(1, 191, 236)' },
                ],
            ],
            seriesItem: {
                name: 'Line 1',
                type: 'line',
                lineStyle: {
                    width: 0,
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgb(128, 255, 165)',
                            },
                            {
                                offset: 1,
                                color: 'rgb(1, 191, 236)',
                            },
                        ],
                        global: false,
                    },
                },
                emphasis: {
                    focus: 'series',
                },
                data: [140, 232, 101, 264, 90, 340, 250],
            },
            titleList: ['总费用'],
            option: {
                xAxis: {
                    type: 'category',
                    name: '单位（年）',
                    boundaryGap: false,
                    data: yearList,
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#ffffff',
                        },
                    },
                },
                yAxis: {
                    type: 'value',
                    name: '单位（万元）',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#ffffff',
                        },
                    },
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985',
                        },
                    },
                },
                grid: {
                    top: 40,
                    right: 70,
                    bottom: 50,
                },
                series: [],
            },
        };
    },
    mounted() {
        this.initData(centre1.allExpense);
    },
    watch: {
        data(val, old) {
            if (val) {
                this.initData(val.allExpense);
            }
        },
    },
    methods: {
        initCharts() {
            this.echarts = this.$echarts.init(this.$refs.echarts);
            this.echarts.setOption(this.option);
        },
        initData(allExpense) {
            this.option.series = [];
            for (let i = 0; i < this.titleList.length; i++) {
                let item = JSON.parse(JSON.stringify(this.seriesItem));
                item.name = this.titleList[i];
                item.type = 'line';
                item.areaStyle.color.colorStops = this.colorStopsList[i];
                let arr = allExpense;
                item.data = arr;
                this.option.series.push(item);
            }
            this.initCharts();
        },
    },
};
</script>

<style lang="less" scoped>
.content {
    h2 {
        padding-left: 0.6em;
        text-align: conter;
    }
}
</style>
