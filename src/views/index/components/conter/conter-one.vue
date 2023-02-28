<template>
  <div class="content">
    <div class="video">
      <video width="100%" controls>
          <source src="http://www.w3school.com.cn/example/html5/mov_bbb.mp4" type="video/mp4">
      </video>
    </div>
    <div class="text">
      <p>
        视频视频视频视频视频视频视频视频视频视频视频视频视频视频视频视频视频视频视频视频视频视频视频视频视频视频视频视频视频视频视频视频
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['maxHeight'],
    data(){
      return {
        
      }
    }
  }
</script>

<style lang="less" scoped>
.content{
  width: 100%;
  height: 100%;
  background-color: #000;
  .video{
    width: 100%;
    margin: 0px auto;
  }
  .text{
    text-align: left;
  }
}
</style>
