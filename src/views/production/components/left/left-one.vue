<template>
    <div class="content">
        <h2>菇房实时环境参数</h2>
        <div class="list">
            <div class="item" :class="[`color-${index+1}`]"
                v-for="item,index in data" :key="item.name" 
                :style="{ padding: `${maxHeight * 0.055}px 0px` }">
                <p>{{ item.value }}</p>
                <span>{{ item.name }}</span>    
            </div>
        </div>
    </div>
</template>
  
<script>
import { mushroomRoom } from '../../data'
export default {
    props: ["maxHeight"],
    data(){
        return {
            data: []
        }
    },
    mounted(){
        this.initData()
    },
    methods:{
        initData(){
            this.data = mushroomRoom
        }
    }
};
</script>
  
<style lang="less" scoped>
@colorList: #00e29a, #b9e200, #005ee2, #8386e2, #00c928, #83c977;

each(@colorList, {
    .color-@{index} {
        color : @value
    }
});

.content {
    h2 {
        padding-left: 0.6em;
        text-align: left;
    }

    .list {
        display: grid;
        grid-template-columns: 33.33% 33.33% 33.33%;

        .item {
            margin: 10px 12px;
            background-color: #1c1c21;

            p {
                font-size: 2rem;
                text-align: center;
            }

            span {
                font-size: 1rem;
            }
        }
    }
}</style>
  