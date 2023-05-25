<template>
    <div class="content" :style="{ height: maxHeight + 'px' }">
        <h2>扫码记录</h2>
        <table>
            <thead>
                <tr>
                    <th>产品名</th>
                    <th>产品编号</th>
                    <th>位置</th>
                    <th>时间</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in dataList">
                    <td>{{ item.name }}</td>
                    <td>{{ item.number }}</td>
                    <td>{{ item.location }}</td>
                    <td>{{ item.time }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { scanRecord } from '../../data';
export default {
    props: ['maxHeight'],
    data() {
        return {
            dataList: [],
        };
    },
    mounted() {
        this.initData();
    },
    methods: {
        initData() {
            this.dataList = scanRecord;
        },
    },
};
</script>

<style lang="less" scoped>
.content {
    overflow: auto;
    h2 {
        padding-left: 0.6em;
        text-align: left;
    }
    table {
        width: 100%;
        margin-top: 10px;
        thead {
            color: #fff;
            background-color: rgb(55, 162, 255);
            tr {
                display: grid;
                grid-template-columns: 25% 25% 25% 25%;
                th {
                    padding: 6px 0px;
                }
            }
        }
        tbody {
            color: #fff;
            :hover {
                background-color: rgba(55, 162, 255, 0.156);
            }
            tr {
                display: grid;
                margin: 10px 0px;
                background-color: rgba(55, 162, 255, 0.356);
                grid-template-columns: 25% 25% 25% 25%;
                td {
                    padding: 6px 0px;
                    overflow: hidden;
                    /*文本不会换行*/
                    white-space: nowrap;
                    /*当文本溢出包含元素时，以省略号表示超出的文本*/
                    text-overflow: ellipsis;
                }
            }
        }
    }
}
</style>
