<template>
  <div class="content">
      <h2>扫码销售对比</h2>
      <div ref="echarts" :style="{height: maxHeight * 0.9 + 'px'}">

      </div>
  </div>
</template>

<script>
  export default {
    props: [ 'maxHeight' ],
    data(){
      return {
        echarts:'',
        option :{
          backgroundColor: '#000',
            globe: {
              baseTexture: 'https://echarts.apache.org/examples' + '/data-gl/asset/earth.jpg',
              heightTexture: 'https://echarts.apache.org/examples' + '/data-gl/asset/bathymetry_bw_composite_4k.jpg',
              displacementScale: 0.1,
              shading: 'lambert',
              environment: 'https://echarts.apache.org/examples' + '/data-gl/asset/starfield.jpg',
              light: {
                ambient: {
                  intensity: 0.1
                },
                main: {
                  intensity: 1.5
                }
              },
              layers: [
                {
                  type: 'blend',
                  blendTo: 'emission',
                  texture: 'https://echarts.apache.org/examples' + '/data-gl/asset/night.jpg'
                },
                {
                  type: 'overlay',
                  texture: 'https://echarts.apache.org/examples' + '/data-gl/asset/clouds.png',
                  shading: 'lambert',
                  distance: 5
                }
              ]
            },
            series: []
        }
      }
    },
    mounted(){
        this.initCharts()
    },
    methods:{
      initCharts(){
          this.echarts = this.$echarts.init(this.$refs.echarts) 
          this.echarts.setOption(this.option)
      }
    }
  }
</script>

<style lang="less" scoped>
.content{
  h2{
    padding-left: 0.6em;
    text-align: left;
  }
}
</style>
