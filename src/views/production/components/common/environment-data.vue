<template>
    <div class="content">
        <h2>{{ title }}</h2>
        <div class="list">
            <div
                class="item"
                :class="[`color-${index + 1}`]"
                v-for="({ name, value }, index) in data"
                :key="name"
                :style="{ padding: `${maxHeight * 0.055}px 0px` }"
            >
                <p>{{ value }}</p>
                <span>{{ name }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['maxHeight', 'title', 'data'],
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
                font-size: 1.8rem;
                text-align: center;
            }

            span {
                font-size: 1rem;
            }
        }
    }
}
</style>
