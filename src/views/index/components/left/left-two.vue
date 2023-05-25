<template>
    <div>
        <h2>园区总览</h2>
        <div class="content">
            <div class="item">
                <div class="icon">
                    <dv-decoration-9
                        :style="{
                            height: maxHeight * 0.35 + 'px',
                            width: maxHeight * 0.35 + 'px',
                        }"
                    >
                        <img src="@/assets/images/icon-area.png" :style="{ height: maxHeight * 0.2 + 'px' }" alt="" />
                    </dv-decoration-9>
                </div>
                <div class="name">园区面积</div>
                <div class="data">{{ data.factoryArea }}亩</div>
            </div>
            <div class="item">
                <div class="icon">
                    <dv-decoration-9
                        :style="{
                            height: maxHeight * 0.35 + 'px',
                            width: maxHeight * 0.35 + 'px',
                        }"
                    >
                        <img
                            src="@/assets/images/icon-factory.png"
                            :style="{ height: maxHeight * 0.2 + 'px' }"
                            alt=""
                        />
                    </dv-decoration-9>
                </div>
                <div class="name">菇房数量</div>
                <div class="data">{{ data.mushroomHouses }}个</div>
            </div>
            <div class="item">
                <div class="icon">
                    <dv-decoration-9
                        :style="{
                            height: maxHeight * 0.35 + 'px',
                            width: maxHeight * 0.35 + 'px',
                        }"
                    >
                        <img
                            src="@/assets/images/icon-mushroom.png"
                            :style="{ height: maxHeight * 0.2 + 'px' }"
                            alt=""
                        />
                    </dv-decoration-9>
                </div>
                <div class="name">栽培品种</div>
                <div class="data">{{ data.cultivatedVarieties }}种</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['maxHeight', 'data'],
    data() {
        return {};
    },
};
</script>

<style lang="less" scoped>
h2 {
    padding-left: 0.6em;
    text-align: left;
}
.content {
    padding-top: 10px;
    display: grid;
    grid-template-columns: 33.333% 33.333% 33.333%;
    .item {
        margin: 0px auto;
        text-align: center;
        .name {
            margin-top: 20px;
            font-size: 1.5rem;
        }
        .icon {
            display: flex;
            justify-content: center;
        }
        .data {
            font-size: 2rem;
            margin-top: 1em;
        }
    }
}
</style>
