<!--  -->
<template>
  <div id="index">
      <!--  DataV-Loading加载动画 -->
      <dv-loading v-if="loading">Loading...</dv-loading>
      <!-- 总体布局-start -->
      <div v-else class="koi-body">
          <!-- 第一部分-头部-start -->
            <div class="header">
              <ul class="link-list left">
                <li>首页</li>
                <li>溯源统计</li>
                <li>智能监控</li>
                <li>数据统计</li>
              </ul>
              <ul class="link-list right  ">
                <li>农资农事</li>
                <li>设备管理</li>
                <li>环境监测</li>
                <li>生产管理</li>
              </ul>
              <!-- 时间 -->
              <!-- <div class="localTime colorPink" :style="{'font-size': Math.round(this.screenWidth/100) + 'px'}">{{ dateYear }} {{ dateWeek }} {{ dateDay }}</div> -->
              <!-- 装饰10 -->
              <dv-decoration-10 class="dv-dec-10-left" />
              <!-- 装饰8 -->
              <dv-decoration-8 class="dv-dec-8-left" :color="decorationColor"/>
              <!-- 标题 -->
              <h1 class="title font-bold colorText" :style="{'font-size': Math.round(this.screenWidth/60) + 'px'}">
                  食用菌生产全程可视化管理系统
              </h1>
              <!-- 装饰8 -->
              <dv-decoration-8 class="dv-dec-8-right" :reverse="true" :color="decorationColor" />
              <!-- 装饰10 -->
              <dv-decoration-10 class="dv-dec-10-right"/>
            </div>
          <!-- 第一部分-头部-end -->
        <!-- Element-UI Layout布局 -->
        <div class="layoutHome">
          <router-view></router-view>
        </div>
          <!-- 总体布局end -->
      </div>
   </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      loading: false,
      // 装饰8颜色
      decorationColor: ['#568aea', '#000000'],
      // 时间
      // 获取浏览器可视区域高度（包含滚动条）、
      // 获取浏览器可视区域高度（不包含工具栏高度）、
      // 获取body的实际高度  (三个都是相同，兼容性不同的浏览器而设置的)
      screenWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    }
  },
  mounted(){
    // 页面大小改变时触发
    window.addEventListener('resize',this.getScreenWidth, false);
  },
  beforeDestroy () {
    // 页面大小改变时触发
    window.removeEventListener('resize',this.getScreenWidth, false);
  },
  watch: {
    screenWidth: function (news, old) {
          if (news <= 1200) {
            this.$notify({
              title: '浏览器高度提示',
              dangerouslyUseHTMLString: true,
              message: '<strong style= "color: teal">浏览器宽度<1200px将不再进行自适应</strong>',
              type: 'warning',
              position: 'bottom-right',
              duration: 2000
            });
          }
      },
      screenHeight: function (news, old) {
          if (news <= 700) {
            this.$notify({
              title: '浏览器宽度提示',
              dangerouslyUseHTMLString: true,
              message: '<strong style= "color: teal">浏览器高度<700px将不再进行自适应</strong>',
              type: 'warning',
              position: 'bottom-right',
              duration: 2000
            });
          }
      }
  },
  methods: {
    // 字体大小根据宽度自适应
    getScreenWidth(){
      this.screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      //console.log("hh-"+this.screenWidth+"-"+this.screenHeight);
    }
  }
}
</script>

<style lang="less" scoped>
</style>
