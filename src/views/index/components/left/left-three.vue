<template>
  <div class="content">
    <h2>物联网设备统计</h2>
      <table>
          <thead>
            <tr>
              <th>总数量</th>
              <th>设备名</th>
              <th>在线率</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in 4">
              <td>30(个)</td>
              <td>实时影像</td>
              <td>
                <dv-percent-pond :config="config" :style="{width: maxHeight * 0.2 +  'px',height:  maxHeight * 0.1 +  'px'}" />
              </td>
            </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
  export default {
    props:['maxHeight'],
    data(){
      return {
        config: {
          value: 99,
          shape: 'round'
        }
      }
    }
  }
</script>

<style lang="less" scoped>
.content{
  h2{
    padding-left: 0.6em;
    text-align: left;
  }
  table{
    width: 100%;
    margin-top: 10px;
    thead{
      color: #fff;
      background-color: rgba(55, 162, 255, 0.649);
      tr{
        display: grid;
        grid-template-columns: 20% 35% 45%;
        th{
          text-align: center;
          padding: 16px 0px;
        }
      }
    }
    tbody{
      color: #fff;
      :hover{
        background-color: rgba(55, 162, 255, 0.156);
      }
      tr{
        display: grid;
        margin: 10px 0px;
        background-color: rgba(55, 162, 255, 0.356);
        grid-template-columns: 20% 35% 45%;
        td{
          padding: 10px 0px;
          overflow: hidden;
          /*文本不会换行*/
          white-space: nowrap;
          /*当文本溢出包含元素时，以省略号表示超出的文本*/
          text-overflow: ellipsis;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
</style>
