<template>
  <div class="production_content">
    <div class="production_video" v-for="item in dataList" :key="item">
      <videoBox :url="item"/>
    </div>
  </div>
</template>

<script>
import videoBox from '@/components/videoBox.vue';
export default {
  props: ["maxHeight"],
  components: {videoBox},
  data() {
    return {
      dataList:[
        '/video/1.mp4',
        '/video/2.mp4',
        '/video/3.mp4',
        '/video/4.mp4'
      ]
    };
  },
};
</script>

<style lang="less" scoped>
.production_content {
  width: 100%;
  height: 100%;
  background-color: #000;
  display: grid;
  grid-template-columns: 50% 50%;
  .production_video {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
  }
}
</style>
