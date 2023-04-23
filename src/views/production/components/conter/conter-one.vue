<template>
  <div class="content">
    <div class="video" v-for="item in dataList" :key="item.id">
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
import { monitorList } from "@/api/monitor"
export default {
  props: ["maxHeight"],
  data() {
    return {
      dataList:[]
    };
  },
  mounted(){
    this.getData()
  },
  methods:{
    getData(){
      monitorList().then(res =>{
        this.dataList = res.data.slice(0,4)
      })
    }
  }
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
