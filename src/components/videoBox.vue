<template>
    <div class="content">
        <div class="loading-box" v-show="show">
            <loading />
        </div>
        <div class="video">
            <video width="100%" @loadedmetadata="onloadeddata" ref="video" loop autoplay muted="false">
                <source :src="url" type="video/mp4" />
            </video>
        </div>
        <div class="time">
            {{ time }}
        </div>
    </div>
</template>

<script>
import loading from './loading.vue';
export default {
    props: ['url'],
    components: { loading },
    data() {
        return {
            time: '',
            interval: null,
            show: true,
        };
    },
    destroyed() {
        clearInterval(this.interval);
    },
    methods: {
        initTime() {
            const date = new Date();
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            const time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

            this.time = `${year} / ${month} / ${day}  ${time}`;
        },
        // 加载完成执行
        onloadeddata() {
            this.show = false;
            this.interval = setInterval(() => {
                this.initTime();
            }, 1000);
        },
    },
};
</script>

<style lang="less" scoped>
.loading-box {
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #000000;
}
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
