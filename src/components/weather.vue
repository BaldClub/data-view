<!--
 * @author: kaito-kuroba
 * @since: 2023-02-28
 * left-one.vue
-->
<template>
    <div class="content" ref="hefeng" :style="{ height: maxHeight + 'px'}">
      <div id="he-plugin-standard"></div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['maxHeight'],
    data(){
      return {
        width: 0
      }
    },
    mounted() {
      this.initHefen()
      // 页面大小改变时触发
      window.addEventListener("resize", this.initHefen, false);
    },
    methods:{
      initHefen(){
        this.width = this.$refs.hefeng.offsetWidth
        window.WIDGET = {
          "CONFIG": {
            "layout": "1",
            "width": this.width  -22,
            "height": this.maxHeight - 24,
            "background": "5",
            "dataColor": "FFFFFF",
            "borderRadius": "5",
            "city": "CN101260201",
            "key": "9c112fffe3f849068a1c91abf817c26e"
          }
        }
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0';
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    }
  };
  </script>
  
  <style scoped lang="less">
  .content{
    width: 100%;
    padding: 12px;
  }
  </style>
  