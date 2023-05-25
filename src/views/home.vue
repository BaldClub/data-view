<!--  -->
<template>
    <div id="index">
        <div class="koi-body">
            <dv-border-box-12 class="container-item" style="padding: 0px 16px">
                <headerTop></headerTop>
            </dv-border-box-12>
            <div class="layoutHome">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import headerTop from '../components/header-top.vue';
export default {
    components: {
        headerTop,
    },
    data() {
        return {};
    },
};
</script>

<style lang="less" scoped></style>
