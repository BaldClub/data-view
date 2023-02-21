<template>
  <div class="bg">
    <div id="your-element-selector" class="bg-echarts" :style="{ height: 100 + 'vh'}"></div>
    <div class="login-from" v-show="status">
        <h1>食用菌生产全程可视化管理系统</h1>
        <div class="item">
            <label class="let-spa-2">账号</label>
            <el-input
                placeholder="请输入内容"
                v-model="loginFrom.username"
                clearable>
            </el-input>
        </div>
        <div class="item">
            <label class="let-spa-2">密码</label>
            <el-input
                placeholder="请输入内容"
                v-model="loginFrom.username"
                clearable>
            </el-input>
        </div>
        <div class="btu">
            <button class="mr-30" @click="changeStatus(false)">注册</button>
            <button @click="changeStatus(true)">登录</button>
        </div>
    </div>
    <div class="login-from register" v-show="!status">
        <h1>食用菌生产全程可视化管理系统</h1>
        <div class="item">
            <label class="let-spa-2">账号 </label>
            <el-input
                placeholder="请输入内容"
                v-model="loginFrom.username"
                clearable>
            </el-input>
        </div>
        <div class="item">
            <label class="let-spa-2">密码 </label>
            <el-input
                placeholder="请输入内容"
                v-model="loginFrom.username"
                clearable>
            </el-input>
        </div>
        <div class="item">
            <label>确认密码 </label>
            <el-input
                placeholder="请输入内容"
                v-model="loginFrom.username"
                clearable>
            </el-input>
        </div>
        <div class="btu">
            <button class="mr-30" @click="changeStatus(false)">注册</button>
            <button @click="changeStatus(true)">登录</button>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
      name: "login",
      data(){
        return {
          status: true,
          loginFrom:{
              username: '',
              password: ''
          },
        }
      },
      mounted(){
          this.initCharts()
      },
      methods:{
        changeStatus(status){
          console.log(111);
          console.log(this.status);
          this.status = status
        },
        initCharts(){
          VANTA.NET({
            el: "#your-element-selector",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x3bff,
            backgroundColor: 0x0,
            spacing: 18.00
          })
        },
        
      },
      
  }
</script>

<style lang="less" scoped>
.bg{
  width: 100%;
  height: 100vh;
  position: relative;
  .bg-echarts{
      position: relative;
      z-index: 10;
  }
  .login-from{
      background-color: rgb(253, 253, 253);
      box-shadow: 0px 2px 10px rgba(26,79,146,0.2);
      border-radius: 6px;
      position: absolute;
      top: 27%;
      right: 17%;
      z-index: 999;
      padding: 64px 100px 50px;
      h1{
        font-size: 32px;
        margin-bottom: 70px;
      }
      .item{
        display: flex;
        align-items: center;
        margin: 20px 0px;
        label{
            width: 100px;
            text-align: left;
            flex-shrink: 0;
        }
      }
      .btu{
        display: flex;
        padding-top: 20px;
        button{
          flex: 1;
          padding: 7px 36px;
          border: 0px;
          border-radius: 6px;
          color: #fff;
          font-size: 20px;
          background-color: rgba(72, 91, 255, 0.5);
        }
        .mr-30{
          margin-right: 30px;
        }
      }
  }
  .register{
    .item{
      label{
        width: 100px;
      }
    }
  }
  .let-spa-2{
    letter-spacing: 2em;
  }
}
</style>
