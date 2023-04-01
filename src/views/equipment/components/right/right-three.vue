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
          <tr v-for="{ location, time, detail,id } in dataList" :key="id">
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
export default {
  props: ["maxHeight"],
  data() {
    return {
      dataList: [
        {
          id:"1633225138344296442",
          location: '菇房1',
          detail: "掉线",
          time: '2023/3/10 13:34:45'
        },
        {
          id:"1633225138344296448",
          location: '菇房2',
          detail: "故障",
          time: '2023/3/10 14:24:25'
        },
        {
          id:"1633225138344296432",
          location: '菇房3',
          detail: "故障",
          time: '2023/3/09 8:24:43'
        },

      ]
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
