<template>
    <div class="content">
        <h2>扫码品种趋势</h2>
        <div ref="echarts" :style="{ height: `${maxHeight * 0.9}px` }"></div>
    </div>
</template>

<script>
const ONE_DAY = 24 * 3600 * 1000;
export default {
    props: ['maxHeight'],
    data() {
        return {
            echarts: '',
            titleList: ['平菇', '黑木耳', '香菇', '金针菇', '茶树菇', '杏鲍菇'],
            // 数据范围
            rangeData: [
                [30, 100],
                [40, 70],
                [80, 100],
                [100, 200],
                [20, 60],
                [20, 50],
            ],
            option: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        animation: false,
                    },
                },
                legend: {
                    data: ['平菇', '黑木耳', '香菇', '金针菇', '茶树菇', '杏鲍菇'],
                    textStyle: {
                        color: '#fff',
                    },
                },
                xAxis: {
                    type: 'time',
                    splitLine: {
                        show: false,
                    },
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%'],
                    splitLine: {
                        show: false,
                    },
                },
                series: [],
            },
        };
    },
    mounted() {
        this.initData();
        this.initCharts();
    },
    methods: {
        initCharts() {
            this.echarts = this.$echarts.init(this.$refs.echarts);
            this.echarts.setOption(this.option);
        },
        // 格式整理
        clearUpData(now, value) {
            return {
                name: now.toString(),
                value: [[now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'), value],
            };
        },
        // 随机数据生成
        randomVale(arr) {
            return Math.round(Math.random() * (arr[1] - arr[0])) + arr[0];
        },
        // 数据初始化
        initData() {
            let numDay = Math.floor((new Date().getTime() - new Date(2023, 0, 1).getTime()) / ONE_DAY);
            for (let j = 0; j < 6; j++) {
                let now = new Date(2023, 0, 1);
                let item = [];
                let series = {
                    name: 'Fake Data',
                    type: 'line',
                    showSymbol: false,
                    data: [],
                };
                for (var i = 0; i < numDay; i++) {
                    now = new Date(+now + ONE_DAY);
                    item.push(this.clearUpData(now, this.randomVale(this.rangeData[j])));
                }
                series.name = this.titleList[j];
                series.data = JSON.parse(JSON.stringify(item));
                this.option.series.push(JSON.parse(JSON.stringify(series)));
            }
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
