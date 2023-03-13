<template>
  <div class="content">
    <h2>扫码数据分析</h2>
    <div class="list">
      <div class="item color-1" :style="{ padding: maxHeight * 0.055 + 'px 0px' }">
        <p>17</p>
        <span>今日扫码次数</span>
      </div>
      <div class="item color-2" :style="{ padding: maxHeight * 0.055 + 'px 0px' }">
        <p>580</p>
        <span>累计扫码次数</span>
      </div>
      <div class="item color-3" :style="{ padding: maxHeight * 0.055 + 'px 0px' }">
        <p>440</p>
        <span>今日售出数量</span>
      </div>
      <div class="item color-4" :style="{ padding: maxHeight * 0.055 + 'px 0px' }">
        <p>9870</p>
        <span>累计售出数量</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["maxHeight"],
};
</script>

<style lang="less" scoped>
@colorList: #00e29a, #b9e200 ,#005ee2 ,#8386e2 ;
each(@colorList, {
  .color-@{index}{
    color : @value
  }
});
.content {
  h2 {
    padding-left: 0.6em;
    text-align: left;
  }
  .list {
    display: grid;
    grid-template-columns: 50% 50%;
    .item {
      margin: 4px 18px;
      background-color: #1c1c21;
      p {
        font-size: 2.4rem;
        text-align: center;
      }
      span {
        font-size: 1rem;
      }
    }
  }
}
</style>
