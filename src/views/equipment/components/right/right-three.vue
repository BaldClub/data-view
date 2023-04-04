<template>
  <div class="content" :style="{ height: `${maxHeight}px` }">
    <h2>预警报警</h2>
    <table>
      <thead>
        <tr>
          <th>设备编号</th>
          <th>安装位置</th>
          <th>具体信息</th>
          <th>时间</th>
        </tr>
      </thead>
    </table>
    <div class="table-container" :style="{ height: `${maxHeight - 100}px` }">
      <table>
        <tbody>
          <tr v-for="{ location, time, detail, id } in dataList" :key="id">
            <td>{{ id }}</td>
            <td>{{ location }}</td>
            <td>{{ detail }}</td>
            <td>{{ time }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { right3 } from '../../../../data/equipment';

const { dataList } = right3;

export default {
  props: ["maxHeight"],
  data() {
    return {
      dataList,
    };
  },
  mounted() { },
  methods: {},
};
</script>

<style lang="less" scoped>
.content {
  overflow: auto;

  .table-container {
    overflow: auto;
  }

  h2 {
    padding-left: 0.6em;
    text-align: left;
    margin-bottom: 10px;
  }

  table {
    width: 100%;

    thead {
      color: #fff;
      background-color: rgb(55, 162, 255);

      tr {
        display: grid;
        grid-template-columns: repeat(4, 25%);

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
        grid-template-columns: repeat(4, 25%);

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
