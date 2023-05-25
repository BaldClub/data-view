<!--
 * @author: kaito-kuroba
 * @since: 2023-03-01
 * conter-one.vue
-->
<template>
    <div class="container-item" :style="{ height: maxHeight + 'px' }">
        <div class="redius-bg" :style="{ height: maxHeight * 0.6 + 'px' }">
            <div class="item" v-for="(item, index) in 9" :class="['position-' + (index + 1)]">
                <div>
                    <p>{{ dataList[index].name }}</p>
                    <p class="proportion">{{ dataList[index].num }}%</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { dataList } from '../../../../data/data-statistics';

export default {
    props: ['maxHeight', 'data'],
    data() {
        return {
            dataList: dataList,
        };
    },
    watch: {
        data(val, old) {
            if (val) {
                this.dataList = val;
            }
        },
    },
};
</script>

<style scoped lang="less">
@top-list: 42%, 15%, 30%, 69%, 50%, 58%, 86%, 21%, 82%;
@left-list: 18%, 60%, 84%, 20%, 50%, 88%, 40%, 32%, 68%;

each(range(9), {
  .position-@{value} {
    width: if(@value =5, 37%, 21%);
    height: if(@value =5, 37%, 23%);
    top: if(@value =5, calc(50% - 19%), calc(extract(@top-list, @value) - 12.5%));
    left: if(@value =5, calc(50% - 19%), calc(extract(@left-list, @value) - 12.5%));
    background-color: #ffffffb4;
  }
});

.container-item {
    width: 100%;
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;

    .redius-bg {
        background-color: #76e8bc;
        width: 90%;
        border-radius: 50%;
        position: relative;

        .item {
            opacity: 0.8;
            position: absolute;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #000;
            font-size: 2rem;

            .proportion {
                text-align: center;
                font-size: 22px;
            }

            &:hover {
                opacity: 1;
            }
        }
    }
}
</style>
