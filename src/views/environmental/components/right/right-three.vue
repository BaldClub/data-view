<template>
  <div class="content" :style="{ height: `${maxHeight}px` }">
    <h2>预警报警</h2>
    <table>
      <thead>
        <tr>
          <th>菇房号</th>
          <th>参数超标</th>
          <th>时间</th>
        </tr>
      </thead>
    </table>
    <div class="table-container" :style="{ height: `${maxHeight - 100}px` }">
      <table>
        <tbody>
          <tr v-for="{ type, time, id } in dataList">
            <td>{{ id }}</td>
            <td>{{ type }}</td>
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
          id: 1,
          type: '参数超标',
          time: '2023/3/10 13:34:45'
        },
        {
          id: 2,
          type: '采摘',
          time: '2023/3/10 13:34:45'
        },
        {
          id: 3,
          type: '参数超标',
          time: '2023/3/10 13:34:45'
        },
        {
          id: 4,
          type: '参数超标',
          time: '2023/3/10 13:34:45'
        }
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
        grid-template-columns: repeat(3, 33.3%);

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
        grid-template-columns: repeat(3, 33.3%);

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
