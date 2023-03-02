<!--
 * @author: kaito-kuroba
 * @since: 2023-03-01
 * conter-one.vue
-->
<template>
    <div class="container-item" :style="{height: maxHeight + 'px'}">
          <div class="redius-bg" :style="{height: maxHeight * 0.6 + 'px'}">
              <div class="item" v-for="item,index in dataList" :style="{'background-image': `linear-gradient(to right, ${item.color[0]}, ${item.color[0]})`, 
                      top: ((index) / 3) * 50 % (100 - item.num / 1.4) + '%',
                      left: ((index) % 3) * 50 % (100 - item.num / 1.5) + '%',
                      height: item.num  + '%',
                      width: item.num + '%'
                  }">
                  {{ item.name }}
              </div>
          </div>
    </div>
  </template>
  
  <script>
  export default {
      props: ['maxHeight'],
      data(){
          return {
              dataList: [
                  {
                      name: '光照',
                      color:[
                          'rgb(128, 255, 165)',
                          'rgb(1, 191, 236)'
                      ],
                      num: 60
                  },
                  {
                      name: '光照',
                      color:[
                          'rgb(0, 221, 255)',
                          'rgb(77, 119, 255)'
                      ],
                      num: 10
                  },
                  {
                      name: '光照',
                      color:[
                          'rgb(255, 162, 0)',
                          'rgb(255, 231, 179)'
                      ],
                      num: 5
                  },
                  {
                      name: '光照',
                      color:[
                          'rgb(255, 0, 135)',
                          'rgb(135, 0, 157)'
                      ],
                      num: 15
                  },
                  {
                      name: '光照',
                      color:[
                          'rgb(255, 191, 0)',
                          'rgb(224, 62, 76)'
                      ],
                      num: 10
                  },
                  {
                      name: '光照',
                      color:[
                          'rgb(255, 0, 191)',
                          'rgb(255, 179, 200)'
                      ],
                      num: 60
                  }
              ],
          }
      }
  }
  </script>
  
  <style scoped lang="less">
  .container-item{
      width: 100%;
      position: relative;
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;
      .redius-bg{
          background-color: #e1e2e3bd;
          width: 90%;
          border-radius: 50%;
          position: relative;
          .item{
              width: 40px;
              height: 100px;
              opacity: 0.8;
              position: absolute;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              color: #fff;
              font-size: 2rem;
              &:hover{
                  opacity: 1;
              }
          }
      }
  }
  </style>