<!--
 * @author: kaito-kuroba
 * @since: 2023-03-01
 * conter-one.vue
-->
<template>
  <div class="container-item" :style="{ height: maxHeight + 'px' }">
    <div class="redius-bg" :style="{ height: maxHeight * 0.6 + 'px' }">
      <div class="item" v-for="(_, index) in 6" :class="['position-' + (index + 1)]">
        <div>
          <p>{{ dataList[index].name }}</p>
          <p class="proportion">{{ dataList[index].num }}%</p>
        </div>
      </div>
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
          name: "摄像头",
          num: 15,
        },
        {
          name: "透传",
          num: 10,
        },
        {
          name: "气象站",
          num: 5,
        },
        {
          name: "灭菌锅",
          num: 2,
        },
        {
          name: "传感器",
          num: 40,
        },
        {
          name: "其他",
          num: 28,
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
@top-list: 42%, 15%, 30%, 69%, 50%, 58%;
@left-list: 18%, 60%, 84%, 20%, 50%, 88%;

each(range(6), {
  .position-@{value} {
    width: if(@value = 5, 37%, 21%);
    height: if(@value = 5, 37%, 23%);
    top: if(@value = 5, calc(50% - 19%), calc(extract(@top-list, @value) - 12.5%));
    left: if(@value = 5, calc(50% - 19%), calc(extract(@left-list, @value) - 12.5%));
    background-color: #ffffffb4;
  }
});


.container-item {
  width: 100%;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  .redius-bg {
    background-color: #76e8bc;
    width: 90%;
    border-radius: 50%;
    position: relative;

    .item {
      opacity: 0.8;
      position: absolute;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #000;
      font-size: 2rem;

      .proportion {
        text-align: center;
        font-size: 22px;
      }

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
