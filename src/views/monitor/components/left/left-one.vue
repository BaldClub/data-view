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
              height: maxHeight * 0.6 + 'px',
              width: maxHeight * 0.5 + 'px',
            }"
          />
          <span :style="{ color: item.colors[0] }">{{ item.name }}</span>
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
          colors: ["#00e695", "#4ce691", "#ace6c6"],
          name: "在线",
        },
        {
          data: [15],
          shape: "round",
          colors: ["#aba3e6", "#b361e6", "#ace6c6"],
          name: "离线",
        },
        {
          data: [5],
          shape: "round",
          colors: ["#e6171e", "#e6acaa", "#e6acaa"],
          name: "异常",
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
