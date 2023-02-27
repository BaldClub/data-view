<template>
  <div id="bg-vanta">

  </div>
</template>

<script>
  export default {
    props:['option'],
    mounted(){
      VANTA.NET({
        el: "#bg-vanta",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x96aa,
        backgroundColor: 0x0,
        points: 7.00,
        maxDistance: 25.00,
        spacing: 18.00
      })
    }
  }
</script>

<style lang="less" scoped>
#bg-vanta{
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh
}
</style>
