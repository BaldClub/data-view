<!--
 * @author: kaito-kuroba
 * @since: 2023-02-28
 * left-one.vue
-->
<template>
  <div class="container-item">
    <h2>设备状态</h2>
    <div class="content">
      <div class="item" v-for="item in config">
        <div>
          <dv-water-level-pond
            :config="item"
            :style="{
              height: maxHeight * 0.5 + 'px',
              width: maxHeight * 0.5 + 'px',
            }"
          />
          <span :style="{ color: item.colors[0] }">{{ item.name }} {{ item.num }} 个</span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["maxHeight"],
  data() {
    return {
      config: [
        {
          data: [80],
          shape: "round",
          waveHeight: 10,
          waveOpacity: 0.8,
          colors: ["#66e200", "#00e213", "#00e275"],
          name: "在线",
          num: 90
        },
        {
          data: [15],
          shape: "round",
          waveHeight: 10,
          waveOpacity: 0.8,
          colors: ["#00e2e2", "#5fdee2", "#97e2e2"],
          name: "离线",
          num: 20
        },
        {
          data: [5],
          shape: "round",
          waveHeight: 10,
          waveOpacity: 0.8,
          colors: ["#e26900", "#e24d2b", "#e21d3b"],
          name: "异常",
          num: 10
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
.container-item {
  h2 {
    padding-left: 0.6em;
    padding-bottom: 0.3em;
    text-align: left;
  }
  .content {
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;
    text-align: center;
    margin-top: 20px;
    .item {
      display: flex;
      justify-content: center;
      span {
        line-height: 2.3em;
        font-size: 1.8rem;
      }
    }
  }
}
</style>
