<template>
    <div class="content">
        <h2>气象站数据</h2>
        <div class="list">
            <div
                class="item"
                :class="['color-' + (index + 1)]"
                v-for="(item, index) in data"
                :key="item.name"
                :style="{ padding: maxHeight * 0.055 + 'px 0px' }"
            >
                <p>{{ item.value }}</p>
                <span>{{ item.name }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { randomData } from '../../../../utils/';
import { left1 } from '../../../../data/environmental';

export default {
    props: ['maxHeight', 'apiData'],
    data() {
        return {
            data: left1.data,
            ms: 0,
        };
    },
    watch: {
        apiData(val, old) {
            if (val) {
                this.data = val.data;
                this.ms = val.data.ms;
                randomData(this, this.ms);
            }
        },
    },
    mounted() {
        randomData(this, left1.ms);
    },
};
</script>

<style lang="less" scoped>
@colorList: #00e29a, #b9e200, #005ee2, #8386e2, #00c928, #83c977;

each(@colorList, {
    .color-@{index} {
        color : @value
    }
});

.content {
    h2 {
        padding-left: 0.6em;
        text-align: left;
    }

    .list {
        display: grid;
        grid-template-columns: 33.33% 33.33% 33.33%;

        .item {
            margin: 10px 12px;
            background-color: #1c1c21;

            p {
                font-size: 2rem;
                text-align: center;
            }

            span {
                font-size: 1rem;
            }
        }
    }
}
</style>
