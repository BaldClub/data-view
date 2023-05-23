<template>
    <div class="content">
        <div class="video">
            <video width="100%" loop autoplay muted="false">
                <source :src="url" type="video/mp4" />
            </video>
        </div>
        <div class="time">
            {{ time }}
        </div>
    </div>
</template>
  
<script>
  export default {
    props: ["url"],
    data() {
      return {
        time: '2023 / 05 / 23  22:30:33',
        interval : null

      };
    },
    mounted(){
        if(this.url !== '/'){
            this.interval = setInterval(()=>{
                this.initTime()
            },1000)
        }else{
            this.time = ''
        }
    },
    destroyed(){
        clearInterval(this.interval)
    },
    methods:{
        initTime(){
            let date = new Date();
            let year = date.getFullYear() 
            let month = date.getMonth()
            let day = date.getDate()
            let time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()

            this.time =  `${year} / ${month} / ${day}  ${time}`
        }
    }
  };
  </script>
  
  <style lang="less" scoped>
  .content {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #000;
  
    .video {
      width: 100%;
      margin: 0px auto;
    }
  
    .time {
        position: absolute;
        top: 10px;
        right: 23px;
        font-size: 18px;
        color: aliceblue;
        cursor: alias;
    }
  }
  </style>
  