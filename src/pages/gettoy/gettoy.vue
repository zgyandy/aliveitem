<template>
    <div class="gettoy">
        <nav class="navbar">
            <div class="left">
                <span class="iconfont icon-svg-" @click="go"></span>
            </div>
            <div class="right">
                <div class="players">房间人数</div>
                <ul class="player-list">
                    <li>
                        <img src="../../assets/images/free.png" alt="">
                    </li>
                    <li>
                        <img src="../../assets/images/free.png" alt="">
                    </li>
                    <li>
                        <img src="../../assets/images/free.png" alt="">
                    </li>
                </ul>
            </div>
        </nav>
        <!-- 视屏 -->
        <videos></videos>

        <!-- 玩具详情 -->
        <toydetail toyid="toyid"></toydetail>
    </div>
</template>

<script>
import videos from "@/components/video/video.vue";
import toydetail from "@/components/toydetail/toydetail.vue"
export default {
    data () {
        return {
            toyid: '',      // 玩具id
        }
    },
    methods:{
        go(){
            this.$router.go(-1)
        }
    },
    components:{
        videos,toydetail
    }

}
</script>

<style scoped lang="scss">
    .gettoy {
        .navbar {
            height: .8rem;
            width: 6.9rem;
            padding: 0 .3rem;
            background-color: #ccc;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .left {
                .iconfont {
                    color: #fff;
                }
            }
            .right {
                height: .8rem;
                width: 3rem;
                display: flex;
                background-color: #fff;
                .players {
                    height: .8rem;
                    width: .6rem;
                }
                .player-list {
                    height: .8rem;
                    width: 2.4rem;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                    li {
                        height: .6rem;
                        width: .6rem;
                        margin-left: .2rem;
                        overflow: hidden;
                        border-radius: .3rem;
                        img {
                            width: .6rem;
                        }
                    }
                }

            }
        }
    }
</style>
