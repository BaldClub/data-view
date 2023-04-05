<template>
  <div class="content">
    <div class="video" v-for="item in 4">
      <video width="100%" controls>
        <source
          src="http://www.w3school.com.cn/example/html5/mov_bbb.mp4"
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
