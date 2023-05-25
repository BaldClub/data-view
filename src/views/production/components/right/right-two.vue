<template>
    <div class="content">
        <h2>农事调控</h2>
        <div class="btu-list">
            <div class="item" v-for="({ icon, name, status }, index) in dataList">
                <div class="icon">
                    <img :src="icon" alt="" />
                </div>
                <div class="name">
                    {{ name }}
                </div>
                <div class="btu" @click="changeStatus(index)">
                    <div class="close" :class="{ 'no-active': status }">关闭</div>
                    <div class="open" :class="{ 'no-active': !status }">打开</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { right2 } from '../../../../data/production';

const { dataList } = right2;

export default {
    props: ['maxHeight'],
    data() {
        return {
            dataList,
        };
    },
    methods: {
        changeStatus(index) {
            this.dataList[index].status = !this.dataList[index].status;
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

    .btu-list {
        display: grid;
        grid-template-columns: repeat(2, 50%);

        .item {
            display: flex;
            align-items: center;
            margin-top: 20px;

            .icon {
                width: 20px;
                height: 20px;
                margin: 0px 10px;

                img {
                    width: 100%;
                }
            }

            .name {
                font-size: 1.2rem;
                margin-right: 10px;
            }

            .btu {
                display: flex;
                border-radius: 6px;
                overflow: hidden;
                cursor: pointer;

                .close {
                    color: #fff;
                    padding: 3px 10px;
                    background-color: red;
                }

                .open {
                    color: #fff;
                    padding: 3px 10px;
                    background-color: rgb(28, 206, 28);
                }

                .no-active {
                    background-color: #8d8d8d;
                }
            }
        }
    }
}
</style>
