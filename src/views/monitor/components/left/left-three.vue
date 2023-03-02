<template>
  <div class="content" :style="{ height: maxHeight + 'px' }">
    <h2>警告</h2>
    <table>
      <thead>
        <tr>
          <th>警告详情</th>
          <th>级别</th>
          <th>时间</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in 4">
          <td>设备1异常</td>
          <td>I 级别</td>
          <td>时间</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["maxHeight"],
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.content {
  overflow: auto;
  h2 {
    padding-left: 0.6em;
    text-align: left;
  }
  table {
    width: 100%;
    margin-top: 10px;
    thead {
      color: #fff;
      background-color: rgb(55, 162, 255);
      tr {
        display: grid;
        grid-template-columns: 40% 20% 40%;
        th {
          padding: 6px 0px;
        }
      }
    }
    tbody {
      color: #fff;
      :hover {
        background-color: rgba(55, 162, 255, 0.156);
      }
      tr {
        display: grid;
        margin: 10px 0px;
        background-color: rgba(55, 162, 255, 0.356);
        grid-template-columns: 40% 20% 40%;
        td {
          color: red;
          padding: 6px 0px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
