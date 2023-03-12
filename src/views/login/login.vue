<template>
  <div class="bg">
    <div id="your-element-selector" class="bg-echarts" :style="{ height: 100 + 'vh' }"></div>
    <div class="login-from" v-show="status">
      <h1>食用菌生产全程可视化管理系统</h1>

      <div class="item">
        <label class="let-spa-2">账号</label>
        <el-input placeholder="请输入账号" v-model="loginFrom.username" clearable>
        </el-input>
      </div>

      <div class="item">
        <label class="let-spa-2">密码</label>
        <el-input placeholder="请输入密码" type="password" v-model="loginFrom.password" clearable>
        </el-input>
      </div>

      <div class="item">
        <label>验证码 </label>
        <div class="code">
          <el-input placeholder="请输入验证码" v-model="loginFrom.code" clearable>
          </el-input>
          <div class="code-img" @click="changCode()">
            <img :src="codeUrl" alt="">
          </div>
        </div>
      </div>

      <div class="btu">
        <button class="mr-30" @click="changeStatus(false)">注册</button>
        <button @click="changeStatus(true)">登录</button>
      </div>

      <router-link to="/change-password">
        <div class="forget-password">
          <span>忘记密码？</span>
        </div>
      </router-link>

    </div>
    <div class="login-from register" v-show="!status">
      <h1>食用菌生产全程可视化管理系统</h1>

      <div class="item">
        <label class="let-spa-2">账号 </label>
        <el-input placeholder="请输入账号" v-model="loginFrom.username" clearable>
        </el-input>
      </div>

      <div class="item">
        <label class="let-spa-2">密码 </label>
        <el-input placeholder="请输入密码" type="password" v-model="loginFrom.password" clearable>
        </el-input>
      </div>

      <div class="item">
        <label>手机号 </label>
        <el-input placeholder="请输入手机号" v-model="loginFrom.phone" clearable>
        </el-input>
      </div>

      <div class="item">
        <label>邮箱 </label>
        <el-input placeholder="请输入邮箱" v-model="loginFrom.email" clearable>
        </el-input>
      </div>

      <div class="item">
        <label>验证码 </label>
        <div class="code">
          <el-input placeholder="请输入验证码" v-model="loginFrom.code" clearable>
          </el-input>
          <div class="code-img" @click="changCode()">
            <img :src="codeUrl" alt="">
          </div>
        </div>
      </div>

      <div class="btu">
        <button class="mr-30" @click="changeStatus(false)">注册</button>
        <button @click="changeStatus(true)">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router';

export default {
  name: "login",
  data() {
    return {
      status: true,
      loginFrom: {
        username: "",
        password: "",
        code: "",
        phone: "",
        email: ""
      },
      codeUrl: "https://back.data.metaverse-yuanyuzhou.top/system/captcha/generate"
    };
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    changeStatus(status) {
      this.status = status;
    },
    initCharts() {
      VANTA.NET({
        el: "#your-element-selector",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        color: 15359,
        backgroundColor: 0,
        spacing: 18,
      });
    },
    changCode() {
      this.codeUrl = "https://back.data.metaverse-yuanyuzhou.top/system/captcha/generate?time=" + new Date().getTime();
    }
  },
  components: { router }
};
</script>

<style lang="less" scoped>
.bg {
  width: 100%;
  height: 100vh;
  position: relative;

  .bg-echarts {
    position: relative;
    z-index: 10;
  }

  .login-from {
    background-color: rgb(253, 253, 253);
    box-shadow: 0px 2px 10px rgba(26, 79, 146, 0.2);
    border-radius: 6px;
    position: absolute;
    top: 27%;
    right: 17%;
    z-index: 999;
    padding: 64px 100px 50px;

    h1 {
      font-size: 32px;
      margin-bottom: 70px;
    }

    .item {
      display: flex;
      align-items: center;
      margin: 20px 0px;

      label {
        width: 100px;
        text-align: left;
        flex-shrink: 0;
      }

      .code {
        display: flex;
        align-items: center;
      }
    }

    .btu {
      display: flex;
      padding-top: 20px;

      button {
        flex: 1;
        padding: 7px 36px;
        border: 0px;
        border-radius: 6px;
        color: #fff;
        font-size: 20px;
        background-color: rgba(72, 91, 255, 0.5);
      }

      .mr-30 {
        margin-right: 30px;
      }
    }
  }

  .register {
    .item {
      label {
        width: 100px;
      }
    }
  }

  .forget-password {
    text-align: right;
    margin-top: 10px;
    color: rgb(88, 88, 88);
    cursor: pointer;
  }

  .let-spa-2 {
    letter-spacing: 2em;
  }
}
</style>
