<template>
  <div class="content">
    <h2>设备使用时长排名</h2>
    <div class="ranking-list">
      <dv-scroll-ranking-board :config="config" style="color:aqua"
        :style="{ height: `${maxHeight * 0.8}px`, width: '100%' }" />
    </div>
  </div>
</template>

<script>
import { right1 } from '../../../../data/equipment';

const { data } = right1;

export default {
  props: ["maxHeight"],
  data() {
    return {
      echarts: "",
      config: {
        data,
        unit: 'h'
      }
    };
  }
};
</script>

<style lang="less" scoped>
.content {
  h2 {
    padding-left: 0.6em;
    text-align: left;
  }

  .ranking-list {
    padding: 0px 10px;
  }
}
</style>
