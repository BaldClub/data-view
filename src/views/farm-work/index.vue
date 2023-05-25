<template>
    <el-row>
        <background />
        <el-col :span="7">
            <div :style="{ height: kHOne + 'px' }" class="bg-container">
                <dv-border-box-12 class="container-item" style="padding: 12px">
                    <leftOne :data="data.left1" :max-height="kHOne"></leftOne>
                </dv-border-box-12>
            </div>
            <div :style="{ height: kHTwo + 'px' }">
                <dv-border-box-12 class="container-item" style="padding: 12px">
                    <leftTwo :data="data.left2" :max-height="kHTwo"></leftTwo>
                </dv-border-box-12>
            </div>
            <div :style="{ height: kHThree + 'px' }">
                <dv-border-box-12 class="container-item" style="padding: 12px">
                    <leftThree :data="data.left3" :max-height="kHThree"></leftThree>
                </dv-border-box-12>
            </div>
        </el-col>

        <el-col :span="10">
            <div :style="{ height: kHFour + 'px' }"></div>
            <div :style="{ height: kHFive + 'px' }">
                <dv-border-box-12 class="container-item" style="padding: 12px">
                    <conterOne :data="data.centre1" :max-height="kHFive"></conterOne>
                </dv-border-box-12>
            </div>
        </el-col>

        <el-col :span="7">
            <div :style="{ height: kHSix + 'px' }">
                <dv-border-box-12 class="container-item" style="padding: 12px">
                    <rightOne :data="data.right1" :max-height="kHSix"></rightOne>
                </dv-border-box-12>
            </div>
            <div :style="{ height: kHSeven + 'px' }">
                <dv-border-box-12 class="container-item" style="padding: 12px">
                    <rightTwo :data="data.right2" :max-height="kHSeven"></rightTwo>
                </dv-border-box-12>
            </div>
            <div :style="{ height: kHEight + 'px' }">
                <dv-border-box-12 class="container-item" style="padding: 12px">
                    <rightThree :data="data.right3" :max-height="kHEight"></rightThree>
                </dv-border-box-12>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import leftOne from './components/left/left-one.vue';
import leftTwo from './components/left/left-two.vue';
import leftThree from './components/left/left-three.vue';
import conterOne from './components/conter/conter-one.vue';
import rightOne from './components/right/right-one.vue';
import rightTwo from './components/right/right-two.vue';
import rightThree from './components/right/right-three.vue';
import background from '@/components/background.vue';

import { farmWork } from '@/api/farm-work';
export default {
    name: 'index',
    components: {
        background,
        leftOne,
        leftTwo,
        leftThree,
        conterOne,
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
            data: {},
        };
    },
    created() {
        this.getScreenHeight();
    },
    mounted() {
        // 页面大小改变时触发
        window.addEventListener('resize', this.getScreenHeight, false);
        // 页面大小改变时触发
        window.addEventListener('resize', this.getScreenWidth, false);

        if (!localStorage.getItem('isLogin')) return (location.href = '/#/login');

        this.getData();
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
            this.kHOne = Math.round(this.screenHeight * 0.309);
            this.kHTwo = Math.round(this.screenHeight * 0.308);
            this.kHThree = Math.round(this.screenHeight * 0.308);
            this.kHFour = Math.round(this.screenHeight * 0.2);
            this.kHFive = Math.round(this.screenHeight * 0.56);
            this.kHSix = Math.round(this.screenHeight * 0.28);
            this.kHSeven = Math.round(this.screenHeight * 0.32);
            this.kHEight = Math.round(this.screenHeight * 0.325);
        },
        getScreenWidth() {
            this.screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        },
        getData() {
            farmWork().then(res => {
                this.data = res.data;
            });
        },
    },
};
</script>

<style lang="scss" scoped></style>
