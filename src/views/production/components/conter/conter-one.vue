<template>
  <div class="content">
    <div class="video">
      <img style="width: 100%" src="@/assets/images/微信图片_20230313122833.png" alt="">
    </div>
    <div class="video">
      <img style="width: 100%" src="@/assets/images/微信图片_20230313122859.png" alt="">
    </div>
    <div class="video">
      <img style="width: 100%" src="@/assets/images/微信图片_20230313122853.png" alt="">
    </div>
    <div class="video">
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
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  height: 100%;
  background-color: #000;
  display: grid;
  grid-template-columns: 50% 50%;
  .video {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
  }
}
</style>
