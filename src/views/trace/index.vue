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
      <div :style="{ height: kHFive + 'px' }"></div>
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
    leftOne,
    leftTwo,
    leftThree,
    conterOne,
    rightOne,
    rightTwo,
    rightThree,
    background,
  },
  data() {
    return {
      // 获取浏览器可视区域高度（包含滚动条）、
      // 获取浏览器可视区域高度（不包含工具栏高度）、
      // 获取body的实际高度  (三个都是相同，兼容性不同的浏览器而设置的)
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
    // 页面大小改变时触发
    window.addEventListener("resize", this.getScreenHeight, false);
    // 页面大小改变时触发
    window.addEventListener("resize", this.getScreenWidth, false);
    // 鼠标移动时触发
  },
  beforeDestroy() {
    // 页面大小改变时触发
    window.removeEventListener("resize", this.getScreenHeight, false);
    // 页面大小改变时触发
    window.removeEventListener("resize", this.getScreenWidth, false);
  },
  methods: {
    // 获取浏览器高度进行自适应
    getScreenHeight() {
      this.screenHeight =
        window.innerHeight ||
        document.documentElement.innerHeight ||
        document.body.clientHeight;
      // 四舍五入取整数
      this.kHOne = Math.round(this.screenHeight * 0.25);
      this.kHTwo = Math.round(this.screenHeight * 0.375);
      this.kHThree = Math.round(this.screenHeight * 0.3);
      this.kHFour = Math.round(this.screenHeight * 0.38);
      this.kHFive = Math.round(this.screenHeight * 0.385);
      this.kHSix = Math.round(this.screenHeight * 0.28);
      this.kHSeven = Math.round(this.screenHeight * 0.32);
      this.kHEight = Math.round(this.screenHeight * 0.325);
      //console.log(this.screenHeight +"-"+ Math.round(this.percentHThirty) +"-"+ Math.round(this.percentHForty));
    },
    // 字体大小根据宽度自适应
    getScreenWidth() {
      this.screenWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      //console.log("hh-"+this.screenWidth+"-"+this.screenHeight);
    },
  },
};
</script>

<style lang="scss" scoped></style>
