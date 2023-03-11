<template>
  <div class="header">
    <div class="title" ref="echarts">
      食用菌生产全程可视化管理系统
    </div>
    <div class="system-time">
      {{ dateYear }} {{ dateWeek }} {{ dateDay }}
    </div>
    <div class="link-list">
      <div class="link-item" v-for="{ name, to }, index in routerList" :key="name" @click="changeActive(index)">
        <router-link :to="to" :class="{ active: activeIndex == index }" class="item">
          {{ name }}
        </router-link>
      </div>
    </div>
  </div>
</template>
  
<script>
import { formatTime } from '../utils/index.js';
export default {
  data() {
    return {
      timer: null,
      dateDay: '',
      dateYear: '',
      dateWeek: '',
      weekday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      activeIndex: 0,
      routerList: [
        {
          name: '首页',
          to: '/'
        },
        {
          name: '溯源统计',
          to: '/trace'
        },
        {
          name: '智能监控',
          to: '/monitor'
        },
        {
          name: '数据统计',
          to: '/data-statistics'
        },
        {
          name: '农资农事',
          to: '/fram-work'
        },
        {
          name: '设备管理',
          to: '/equipment'
        },
        {
          name: '环境监测',
          to: '/'
        },
        {
          name: '生产管理',
          to: '/'
        },
        {
          name: '登录',
          to: '/login'
        },
      ]
    }
  },
  mounted() {
    this.timeInterval()
  },
  methods: {
    getDate() {
      this.dateDay = formatTime(new Date(), 'HH: mm: ss')
      this.dateYear = formatTime(new Date(), 'yyyy / MM / dd')
      this.dateWeek = this.weekday[new Date().getDay()]
    },
    timeInterval() {
      this.getDate()
      this.timer = setInterval(() => {
        this.getDate()
      }, 1000)
    },
    changeActive(index){
      this.activeIndex = index
    }
  }
}
</script>
  
<style lang="less" scoped>
.header {
  overflow: hidden;
  display: flex;
  align-items: center;
  height: calc(100vh * 0.075);

  .title {
    font-size: 2.3rem;
    font-weight: 600;
    float: left;
    background: linear-gradient(to bottom, #d0f8f2, #0084f8);
    -webkit-background-clip: text;
    color: transparent;
  }

  .system-time {
    float: left;
    margin: 0px 3rem;
    font-size: 1.4rem;
  }

  .link-list {
    font-size: 1.4rem;
    overflow: hidden;
    width: auto;

    .link-item {
      float: left;
      margin: 0px 8px;

      .item {
        color: #ffffffcd;
        padding: 6px 6px;
        border-radius: 6px;
      }

      .active {
        color: #0084f8;
        font-weight: 600;
      }
    }
  }
}
</style>
  