<template>
    <div class="content">
        <h2>实时政策</h2>
        <ul :style="{ height: `${maxHeight * 0.86}px` }">
            <li v-for="{ title, time, link } in data">
                <a href="#">
                    <div class="radius"></div>
                    <div class="title">
                        {{ title }}
                    </div>
                    <div class="time">{{ time }}</div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import dataList from '../../data/policy-data.json';
export default {
    props: ['maxHeight'],
    data() {
        return {
            data: [],
        };
    },
    mounted() {
        this.data = dataList;
    },
    methods: {},
};
</script>

<style lang="less" scoped>
.content {
    h2 {
        padding-left: 0.6em;
        text-align: left;
    }

    ul {
        overflow: auto;

        .thead {
            display: flex;
        }

        li {
            a {
                display: flex;
                margin: 7px 0px;
                color: #fff;
                align-items: center;
                background-color: rgba(55, 162, 255, 0.356);

                &:hover {
                    background-color: rgba(55, 162, 255, 0.156);
                }

                .radius {
                    margin: 5px;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background-color: burlywood;
                }

                .title {
                    flex: 1;
                    padding: 6px 0px;
                    overflow: hidden;
                    /*文本不会换行*/
                    white-space: nowrap;
                    /*当文本溢出包含元素时，以省略号表示超出的文本*/
                    text-overflow: ellipsis;
                    text-align: left;
                    padding-left: 5px;
                    font-size: 1.2rem;
                }

                .time {
                    width: 160px;
                }
            }
        }
    }
}
</style>
