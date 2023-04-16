<!--
 * @author: kaito-kuroba
 * @since: 2023-02-28
 * right-one.vue
-->
<template>
  <div class="container-item" :style="{ height: maxHeight * 0.97 + 'px' }">
    <div
      class="item"
      v-for="item,index in monitorList" :key="item.id"
    >
      <div class="name">摄像头1-{{ index + 1 }}</div>
      <video width="100%" controls>
        <source
          :src="item.url"
          type="video/mp4"
        />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  props: ["maxHeight","monitorList"],
};
</script>

<style scoped lang="less">
.container-item {
  display: grid;
  overflow: auto;
  grid-template-columns: 50% 50%;
  .item {
    margin: 8px;
    margin-top: 60px;
    background-color: #fff;
    position: relative;
    .name {
      position: absolute;
      top: -2.9rem;
      padding: 6px 10px;
      font-size: 1.6rem;
      color: #cfcccc;
      background-color: #ffffff4d;
    }
  }
}
</style>
