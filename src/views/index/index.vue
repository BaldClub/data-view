<template>
    <el-row>
        <background></background>
        <el-col :span="7">
            <div :style="{ height: kHOne + 'px' }" class="bg-container">
                <dv-border-box-12 class="container-item">
                    <weather :max-height="kHOne"></weather>
                </dv-border-box-12>
            </div>
            <div :style="{ height: kHTwo + 'px' }">
                <dv-border-box-12 class="container-item" style="padding: 12px">
                    <leftTwo :max-height="kHTwo" :data="park"></leftTwo>
                </dv-border-box-12>
            </div>
            <div :style="{ height: kHThree + 'px' }">
                <dv-border-box-12 class="container-item" style="padding: 12px">
                    <leftThree :max-height="kHThree"></leftThree>
                </dv-border-box-12>
            </div>
        </el-col>

        <el-col :span="10">
            <div :style="{ height: kHFour + 'px' }">
                <dv-border-box-12 class="container-item" style="padding: 12px">
                    <conterOne :max-height="kHFour" :url="park.url"></conterOne>
                </dv-border-box-12>
            </div>
            <div :style="{ height: kHFive + 'px' }">
                <dv-border-box-12 class="container-item" style="padding: 12px">
                    <conterTwo :max-height="kHFive"></conterTwo>
                </dv-border-box-12>
            </div>
        </el-col>

        <el-col :span="7">
            <div :style="{ height: kHSix + 'px' }">
                <dv-border-box-12 class="container-item" style="padding: 12px">
                    <rightOne :max-height="kHSix"></rightOne>
                </dv-border-box-12>
            </div>
            <div :style="{ height: kHSeven + 'px' }">
                <dv-border-box-12 class="container-item" style="padding: 12px">
                    <rightTwo :max-height="kHSeven"></rightTwo>
                </dv-border-box-12>
            </div>
            <div :style="{ height: kHEight + 'px' }">
                <dv-border-box-12 class="container-item" style="padding: 12px">
                    <rightThree :max-height="kHEight"></rightThree>
                </dv-border-box-12>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import weather from '@/components/weather.vue';
import leftTwo from './components/left/left-two.vue';
import leftThree from './components/left/left-three.vue';
import conterOne from './components/conter/conter-one.vue';
import conterTwo from './components/conter/conter-two.vue';
import conterThree from './components/conter/conter-three.vue';
import rightOne from './components/right/right-one.vue';
import rightTwo from './components/right/right-two.vue';
import rightThree from './components/right/right-three.vue';
import background from '@/components/background.vue';

import { park } from '@/api/index';

export default {
    name: 'index',
    components: {
        background,
        weather,
        leftTwo,
        leftThree,
        conterOne,
        conterTwo,
        conterThree,
        rightOne,
        rightTwo,
        rightThree,
    },
    data() {
        return {
            screenHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
            screenWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            kHOne: 200,
            kHTwo: 500,
            kHThree: 300,
            kHFour: 500,
            kHFive: 450,
            kHSix: 300,
            kHSeven: 400,
            kHEight: 400,
            park: {},
        };
    },
    created() {
        this.getScreenHeight();
    },
    mounted() {
        this.getData();
        // 页面大小改变时触发
        window.addEventListener('resize', this.getScreenHeight, false);
        // 页面大小改变时触发
        window.addEventListener('resize', this.getScreenWidth, false);
        // 鼠标移动时触发
    },
    beforeDestroy() {
        // 页面大小改变时触发
        window.removeEventListener('resize', this.getScreenHeight, false);
        // 页面大小改变时触发
        window.removeEventListener('resize', this.getScreenWidth, false);
    },
    methods: {
        getScreenHeight() {
            this.screenHeight =
                window.innerHeight || document.documentElement.innerHeight || document.body.clientHeight;
            this.kHOne = Math.round(this.screenHeight * 0.25);
            this.kHTwo = Math.round(this.screenHeight * 0.3);
            this.kHThree = Math.round(this.screenHeight * 0.375);
            this.kHFour = Math.round(this.screenHeight * 0.54);
            this.kHFive = Math.round(this.screenHeight * 0.386);
            this.kHSix = Math.round(this.screenHeight * 0.28);
            this.kHSeven = Math.round(this.screenHeight * 0.32);
            this.kHEight = Math.round(this.screenHeight * 0.325);
        },
        getScreenWidth() {
            this.screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        },
        getData() {
            park().then(res => {
                this.park = res.data;
            });
        },
    },
};
</script>

<style lang="scss" scoped></style>
