<template>
  <div>
    <h2>园区总览</h2>
    <div class="content">
      <div class="item">
        <div class="icon">
          <dv-decoration-9
            :style="{
              height: maxHeight * 0.35 + 'px',
              width: maxHeight * 0.35 + 'px',
            }"
          >
            <img
              src="@/assets/images/icon-area.png"
              :style="{ height: maxHeight * 0.2 + 'px' }"
              alt=""
            />
          </dv-decoration-9>
        </div>
        <div class="name">园区面积</div>
        <dv-digital-flop :config="areaConfig" />
      </div>
      <div class="item">
        <div class="icon">
          <dv-decoration-9
            :style="{
              height: maxHeight * 0.35 + 'px',
              width: maxHeight * 0.35 + 'px',
            }"
          >
            <img
              src="@/assets/images/icon-factory.png"
              :style="{ height: maxHeight * 0.2 + 'px' }"
              alt=""
            />
          </dv-decoration-9>
        </div>
        <div class="name">菇房数量</div>
        <dv-digital-flop
          :config="houseNumConfig"
          style="width: 100%; color: aquamarine"
        />
      </div>
      <div class="item">
        <div class="icon">
          <dv-decoration-9
            :style="{
              height: maxHeight * 0.35 + 'px',
              width: maxHeight * 0.35 + 'px',
            }"
          >
            <img
              src="@/assets/images/icon-mushroom.png"
              :style="{ height: maxHeight * 0.2 + 'px' }"
              alt=""
            />
          </dv-decoration-9>
        </div>
        <div class="name">栽培品种</div>
        <dv-digital-flop
          :config="varietyConfig"
          style="width: 100%; color: aquamarine"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["maxHeight"],
  data() {
    return {
      areaConfig: {
        number: [100],
        toFixed: 0,
        content: "{nt}亩",
      },
      houseNumConfig: {
        number: [21],
        toFixed: 0,
        content: "{nt}个",
      },
      varietyConfig:{
        number: [6],
        toFixed: 0,
        content: "{nt}种",
      }
    };
  }
};
</script>

<style lang="less" scoped>
  h2 {
    padding-left: 0.6em;
    text-align: left;
  }
.content {
  padding-top: 10px;
  display: grid;
  grid-template-columns: 33.333% 33.333% 33.333%;
  .item {
    margin: 0px auto;
    text-align: center;
    .name {
      margin-top: 20px;
      font-size: 1.5rem;
    }
    .icon {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
