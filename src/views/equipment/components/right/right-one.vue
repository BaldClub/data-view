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
export default {
  props: ["maxHeight"],
  data() {
    return {
      echarts: "",
      config: {
        data: [
          {
            name: '传感器8',
            value: 812
          },
          {
            name: '气象站1',
            value: 758
          },
          {
            name: '传感器2',
            value: 703
          },
          {
            name: '传感器21',
            value: 681
          },
          {
            name: '透传9',
            value: 732
          },
        ],
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
