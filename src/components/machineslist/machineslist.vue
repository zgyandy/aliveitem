<template>
    <div class="machineslist">
        <div class="title">
            <div class="left">
                <img src="../../assets/images/free.png" alt="">
                <span class="toy-name">玩具名</span>
            </div>
            <div class="right">
                <div class="price">19币/次</div>
                <div class="totol">共50台</div>
            </div>
        </div>
        <ul class="mach-list">
            <li :key="key" v-for="(item,key) in machlist">
                <div class="mach-status"  @click="toGetToy(item)">
                    <img src="../../assets/images/demo2.png" alt="">
                </div>
                <div class="status">
                    <div class="left">
                        <div>编号：1</div>
                        <div>状态：游戏中</div>
                        <div>排队人数：3</div>
                    </div>
                    <div v-show="key != machId" class="knob" @click.stop="scribe(key)">预约</div>
                    <div v-show="key == machId & blScribe" class="scribed">取消预约</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            machlist: [1,2,3,4,5,6],    // 娃娃机列表
            blScribe: false,            // 是否是预约状态
            machId: '',
        }
    },
    mounted () {
          this.machId = sessionStorage.getItem("machId")
    },
    methods:{
        toGetToy(id){
            this.$router.push({name:"gettoy",params:{toy_id: this.$route.params.toy_id, mac_id: id}})
        },
        scribe(id){
            this.blScribe = !this.blScribe;
            sessionStorage.setItem('machId',id)
            console.log(id)
        }
    }
}
</script>

<style lang="scss" scoped>
    .machineslist {
        .title {
            height: .6rem;
            width: 7rem;
            padding: 0 .25rem;
            background-color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .left {
                height: .6rem;
                display: flex;
                align-items: center;
                img {
                    height: .3rem;
                    width: .6rem;
                    margin-right: .2rem;
                }
            }
            .right {
                height: .6rem;
                display: flex;
                justify-content: space-around;
                align-items: center;
                .price {
                    margin-right: .2rem;
                }
            }
        }
        .mach-list {
            width: 7rem;
            margin: 0 auto;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            li {
                height: 5rem;
                width: 3.4rem;
                background-color: #fff;
                margin-bottom: .2rem;
                .mach-status {
                    height: 4.2rem;
                    overflow: hidden;
                    img {
                        height: 4.2rem;
                        width: 100%;
                    }
                }
                .status {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .left {
                        height: .8rem;
                    }
                    .knob {
                        height: .6rem;
                        width: 2rem;
                        background-color: #0ff;
                        border-radius: .2rem;
                        border: none;
                        color: #fff;
                        font-size: .24rem;
                        text-align: center;
                        line-height: .6rem;
                    }
                    .scribed {
                        height: .6rem;
                        width: 2rem;
                        background-color: #f00;
                        border-radius: .2rem;
                        border: none;
                        color: #fff;
                        font-size: .24rem;
                        text-align: center;
                        line-height: .6rem;
                    }
                }
            }
            li:nth-child(2n){
                margin-left: .2rem;
            }
        }
    }
</style>
