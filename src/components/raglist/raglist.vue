<template>
    <div class="rag-list">
        <!-- <h5 class="title">玩具列表</h5> -->
        <ul class="toy-list">
            <li @click="toGet(item)" v-for="(item,key) in ragList" :key="key">
                <div class="num">娃娃机数量</div>
                <img src="../../assets/images/demo1.png" alt="">
                <h6>玩具名</h6>
                <div>价格/次</div>
                <div class="leisure">空闲设备</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            ragList:[1,2,3,4,5,6,7,8,9],
        }
    },
    methods:{
        toGet(id){
            this.$router.push({name:"machines",params:{toy_id: id}})
        }
    }
}
</script>

<style lang="scss" scoped>
    .rag-list {
        width: 7.5rem;
        padding: 0 .25rem;
        .title {
            height: .6rem;
            font-size: .3rem;
            line-height: .6rem;
        }
        .toy-list {
            display: flex;
            flex-wrap: wrap;
            margin-top: .2rem;
            li {
                height: 3.5rem;
                width: 3.4rem;
                margin-bottom: .2rem;
                background-color: #fff;
                .num {
                    height: .3rem;
                    line-height: .3rem;
                }
                img {
                    width: 100%;
                }
            }
            li:nth-child(2n){
                margin-left: .2rem;
            }
        }
    }
</style>
