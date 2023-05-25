<template>
    <div class="content">
        <h2>数据资源</h2>
        <div ref="echarts" :style="{ height: `${maxHeight * 0.9}px` }"></div>
    </div>
</template>

<script>
import { left3 } from '../../../../data/data-statistics';

const { dataResource, yearList } = left3;

export default {
    props: ['maxHeight', 'data'],
    data() {
        return {
            echarts: '',
            option: {
                color: [
                    '#5470c6',
                    '#91cc75',
                    '#fac858',
                    '#ee6666',
                    '#73c0de',
                    '#3ba272',
                    '#fc8452',
                    '#9a60b4',
                    '#ea7ccc',
                ],
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
                    name: '单位（GB）',
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
                    data: [],
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
                    top: 80,
                    right: 70,
                    bottom: 50,
                },
                series: [],
            },
        };
    },
    mounted() {
        this.initData(dataResource);
    },
    watch: {
        data(val, old) {
            this.option.xAxis.data = val.yearList;
            if (val) {
                this.initData(val.dataResource);
            }
        },
    },

    methods: {
        initCharts() {
            this.echarts = this.$echarts.init(this.$refs.echarts);
            this.echarts.setOption(this.option);
        },
        initData(dataResource) {
            this.option.series = [];
            this.option.legend.data = [];
            let series = {
                name: '设备数量',
                data: [],
                type: 'line',
            };
            let allData = [0, 0, 0, 0, 0];
            this.option.legend.data = ['总数据资源', ...Object.keys(dataResource)];
            Object.keys(dataResource).forEach(item => {
                series.name = item;
                series.data = dataResource[item];
                dataResource[item].forEach((item, index) => {
                    allData[index] += item;
                });
                this.option.series.push(JSON.parse(JSON.stringify(series)));
            });
            this.option.series.push({
                name: '总数据资源',
                data: allData,
                type: 'line',
            });
            this.initCharts();
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
