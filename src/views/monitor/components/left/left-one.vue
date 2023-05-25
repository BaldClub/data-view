<!--
 * @author: kaito-kuroba
 * @since: 2023-02-28
 * left-one.vue
-->
<template>
    <div class="container-item">
        <h2>设备状态</h2>
        <div class="content">
            <div class="item" v-for="item in config">
                <div>
                    <dv-water-level-pond
                        :config="item"
                        :style="{
                            height: maxHeight * 0.5 + 'px',
                            width: maxHeight * 0.5 + 'px',
                        }"
                    />
                    <span :style="{ color: item.colors[0] }">{{ item.name }} {{ item.num }} 个</span>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { monitorStatus } from '@/api/monitor';
export default {
    props: ['maxHeight'],
    data() {
        return {
            colorsList: {
                在线: ['#66e200', '#00e213', '#00e275'],
                离线: ['#00e2e2', '#5fdee2', '#97e2e2'],
                异常: ['#e26900', '#e24d2b', '#e21d3b'],
            },
            config: [],
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            monitorStatus().then(res => {
                res.data.sort((a, b) => b.count - a.count);
                let sum = 0;
                res.data.forEach(item => {
                    sum += Number(item.count);
                });
                res.data.forEach(item => {
                    this.config.push({
                        data: [Math.floor((item.count / sum) * 100)],
                        shape: 'round',
                        waveHeight: 10,
                        waveOpacity: 0.8,
                        colors: this.colorsList[item.status],
                        name: item.status,
                        num: item.count,
                    });
                });
            });
        },
    },
};
</script>

<style scoped lang="less">
.container-item {
    h2 {
        padding-left: 0.6em;
        padding-bottom: 0.3em;
        text-align: left;
    }
    .content {
        display: grid;
        grid-template-columns: 33.33% 33.33% 33.33%;
        text-align: center;
        margin-top: 20px;
        .item {
            display: flex;
            justify-content: center;
            span {
                line-height: 2.3em;
                font-size: 1.8rem;
            }
        }
    }
}
</style>
