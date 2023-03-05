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
        <tr v-for="{ num, name, config } in dataList">
          <td>{{ num }}(个)</td>
          <td>{{ name }}</td>
          <td>
            <dv-percent-pond
              :config="config"
              :style="{
                width: maxHeight * 0.2 + 'px',
                height: maxHeight * 0.1 + 'px',
              }"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["maxHeight"],
  data() {
    return {
      dataList:[
        {
          num: 30,
          name: '实时影像',
          config: {
            value: 80,
            shape: "round",
          },
        },
        {
          num: 10,
          name: '室外环境监测',
          config: {
            value: 90,
            shape: "round",
          },
        },
        {
          num: 100,
          name: '菇房环境监测',
          config: {
            value: 86,
            shape: "round",
          },
        }
      ],
      
    };
  },
};
</script>

<style lang="less" scoped>
.content {
  h2 {
    padding-left: 0.6em;
    text-align: left;
  }
  table {
    width: 100%;
    margin-top: 10px;
    thead {
      color: #fff;
      background-color: rgba(55, 162, 255, 0.649);
      tr {
        display: grid;
        grid-template-columns: 20% 35% 45%;
        th {
          text-align: center;
          padding: 16px 0px;
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
        margin: 16px 0px;
        background-color: rgba(55, 162, 255, 0.356);
        grid-template-columns: 20% 35% 45%;
        td {
          padding: 14px 0px;
          overflow: hidden;
          white-space: nowrap;
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
