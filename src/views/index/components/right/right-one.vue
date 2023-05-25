<template>
    <div class="content">
        <h2>品种分布</h2>
        <div ref="echarts" :style="{ height: `${maxHeight * 0.9}px` }"></div>
    </div>
</template>

<script>
import { strains } from '@/api/index';
export default {
    props: ['maxHeight'],
    data() {
        return {
            echarts: '',
            option: {
                tooltip: {
                    trigger: 'item',
                },
                legend: {
                    top: '5%',
                    left: 'center',
                    textStyle: {
                        color: '#fff',
                    },
                },
                series: [
                    {
                        name: '种植面积（亩）',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2,
                        },
                        label: {
                            show: false,
                            position: 'center',
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 40,
                                fontWeight: 'bold',
                            },
                        },
                        labelLine: {
                            show: false,
                        },
                        data: [
                            { value: 1048, name: '平菇' },
                            { value: 735, name: '黑木耳' },
                            { value: 580, name: '香菇' },
                            { value: 484, name: '金针菇' },
                            { value: 300, name: '茶树菇' },
                            { value: 300, name: '杏鲍菇' },
                        ],
                    },
                ],
            },
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        initCharts() {
            this.echarts = this.$echarts.init(this.$refs.echarts);
            this.echarts.setOption(this.option);
        },
        getData() {
            strains().then(res => {
                this.option.series[0].data = res.data.map(item => ({
                    value: item.count,
                    name: item.type,
                }));
                this.initCharts();
            });
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
