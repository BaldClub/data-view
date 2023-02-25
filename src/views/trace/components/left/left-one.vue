<template>
  <div class="content">
      <h2>扫码数据分析</h2>
      <div class="list">
        <div class="item" :style="{ padding: maxHeight * 0.055 + 'px 0px' }">
            <p>1</p>
            <span>今日扫码次数</span>
        </div>
        <div class="item" :style="{ padding: maxHeight * 0.055 + 'px 0px' }">
            <p>1</p>
            <span>累计扫码次数</span>
        </div>
        <div class="item" :style="{ padding: maxHeight * 0.055 + 'px 0px' }">
            <p>1</p>
            <span>今日售出数量</span>
        </div>
        <div class="item" :style="{ padding: maxHeight * 0.055 + 'px 0px' }">
            <p>1</p>
            <span>累计售出数量</span>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    props: [ 'maxHeight' ]
  }
</script>

<style lang="less" scoped>
.content{
  h2{
    padding-left: 0.6em;
    text-align: left;
  }
  .list{
    display: grid;
    grid-template-columns: 50% 50%;
    .item{
      margin: 5px 18px ;
      background-color: #1c1c21;
      color: #f9c100;
      p{
        font-size: 2.5rem;
        text-align: center;
      }
      span{
        font-size: 0.8rem;
      }
    }
  }
}
</style>
