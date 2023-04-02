<!--
 * @author: kaito-kuroba
 * @since: 2023-02-28
 * right-one.vue
-->
<template>
  <div class="container-item" :style="{ height: maxHeight * 0.97 + 'px' }">
    <div
      class="item"
      :style="{ width: maxHeight * 0.62 + 'px' }"
    >
      <div class="name">摄像头1-0</div>
      <!-- <video width="100%" controls>
        <source
          src="http://www.w3school.com.cn/example/html5/mov_bbb.mp4"
          type="video/mp4"
        />
      </video> -->
      <img style="width: 100%" src="@/assets/images/微信图片_20230313122833.png" alt="">
    </div>
    <div
      class="item"
      :style="{ width: maxHeight * 0.62 + 'px' }"
    >
      <div class="name">摄像头1-1</div>
      <!-- <video width="100%" controls>
        <source
          src="http://www.w3school.com.cn/example/html5/mov_bbb.mp4"
          type="video/mp4"
        />
      </video> -->
      <img style="width: 100%" src="@/assets/images/微信图片_20230313122859.png" alt="">
    </div>
    <div
      class="item"
      v-for="item in 4"
      :style="{ width: maxHeight * 0.62 + 'px' }"
    >
      <div class="name">摄像头1-{{ item + 1 }}</div>
      <video width="100%" controls>
        <source
          src="#"
          type="video/mp4"
        />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  props: ["maxHeight"],
};
</script>

<style scoped lang="less">
.container-item {
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  .item {
    margin: 8px;
    margin-top: 40px;
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
