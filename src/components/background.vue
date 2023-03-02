<template>
  <div id="bg-vanta"></div>
</template>

<script>
export default {
  props: ["option"],
  mounted() {
    VANTA.NET({
      el: "#bg-vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x96aa,
      backgroundColor: 0x0,
      points: 7.0,
      maxDistance: 25.0,
      spacing: 18.0,
    });
  },
};
</script>

<style lang="less" scoped>
#bg-vanta {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
}
</style>
