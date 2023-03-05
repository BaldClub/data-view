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
        <dv-digital-flop :config="config" />
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
        <div class="name">厂房数量</div>
        <dv-digital-flop
          :config="config"
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
          :config="config"
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
      config: {
        number: [0],
        toFixed: 2,
        content: "{nt}个",
      },
      config1: {
        number: [999],
        toFixed: 2,
        content: "{nt}个",
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.config = this.config1;
    }, 1000);
  },
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
