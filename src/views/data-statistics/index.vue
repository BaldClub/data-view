<template>
  <el-row>
    <background></background>
    <el-col :span="7">
      <div :style="{ height: kHOne + 'px' }" class="bg-container">
        <dv-border-box-12 class="container-item" style="padding: 12px">
          <leftOne :max-height="kHOne"></leftOne>
        </dv-border-box-12>
      </div>
      <div :style="{ height: kHTwo + 'px' }">
        <dv-border-box-12 class="container-item" style="padding: 12px">
          <leftTwo :max-height="kHTwo"></leftTwo>
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
        <div class="container-item" style="padding: 12px">
          <conterOne :max-height="kHFour"></conterOne>
        </div>
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
import leftOne from "./components/left/left-one.vue";
import leftTwo from "./components/left/left-two.vue";
import leftThree from "./components/left/left-three.vue";
import conterOne from "./components/conter/conter-one.vue";
import rightOne from "./components/right/right-one.vue";
import rightTwo from "./components/right/right-two.vue";
import rightThree from "./components/right/right-three.vue";
import background from "@/components/background.vue";
export default {
  name: "index",
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
      screenHeight:
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight,
      screenWidth:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth,
      kHOne: 200,
      kHTwo: 500,
      kHThree: 300,
      kHFour: 500,
      kHFive: 450,
      kHSix: 300,
      kHSeven: 400,
      kHEight: 400,
    };
  },
  created() {
    this.getScreenHeight();
  },
  mounted() {
    // ???????????????????????????
    window.addEventListener("resize", this.getScreenHeight, false);
    // ???????????????????????????
    window.addEventListener("resize", this.getScreenWidth, false);
    // ?????????????????????
  },
  beforeDestroy() {
    // ???????????????????????????
    window.removeEventListener("resize", this.getScreenHeight, false);
    // ???????????????????????????
    window.removeEventListener("resize", this.getScreenWidth, false);
  },
  methods: {
    getScreenHeight() {
      this.screenHeight =
        window.innerHeight ||
        document.documentElement.innerHeight ||
        document.body.clientHeight;
      this.kHOne = Math.round(this.screenHeight * 0.309);
      this.kHTwo = Math.round(this.screenHeight * 0.298);
      this.kHThree = Math.round(this.screenHeight * 0.320);
      this.kHFour = Math.round(this.screenHeight * 0.925);
      this.kHSix = Math.round(this.screenHeight * 0.28);
      this.kHSeven = Math.round(this.screenHeight * 0.32);
      this.kHEight = Math.round(this.screenHeight * 0.325);
    },
    getScreenWidth() {
      this.screenWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    },
  },
};
</script>

<style lang="scss" scoped></style>
