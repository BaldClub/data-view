<template>
  <div class="content">
    <div class="video">
      <video width="100%" controls>
        <source :src="url" type="video/mp4" />
      </video>
    </div>
    <div class="text">
      <p>
        食用菌工厂化栽培，实际上就是封闭式、设施化、机械化、标准化、周年栽培，是在按照菇类生长需要设计的封闭式厂房中，在不同地域不同气候条件下利用温控、湿控、风控、光控设备创造人工环境；利用机械设备自动化（半自动化）操作，高效率生产；通过现代企业管理模式，组织员工有序生产；在单位空间内，立体化、规模化、周年化栽培达到产品的安全绿色（有机）标准的优质食用菌，并通过包装、加工，品牌销售到国内外市场。其目的是提高周年复种指数，提高设施和设备的使用效率，提高资金周转使用率，在短时间内获得可观经济效益的一种新型的、集现代农业企业化管理的栽培方法。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["maxHeight","url"],
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

  .video {
    width: 100%;
    margin: 0px auto;
  }

  .text {
    text-align: left;
    font-size: 1.2rem;
  }
}
</style>
