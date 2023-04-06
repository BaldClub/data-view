<template>
  <div class="content">
    <div class="video">
      <img style="width: 100%" src="@/assets/images/微信图片_20230313122833.png" alt="">
    </div>
    <div class="video">
      <img style="width: 100%" src="@/assets/images/微信图片_20230313122859.png" alt="">
    </div>
    <div class="video" v-for="item in 2">
      <video width="100%" controls>
        <source
          src="https://cmgw-vpc.lechange.com:8890/LCO/4M04A4DPAZ027E8/12/0/20211024T043518/2e1dcd9870537b15e912af01cfe50e98.m3u8?proto=https"
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
