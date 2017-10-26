<template>
    <div class="user">
        <navbar :content="content"></navbar>
        <!-- 头像 -->
        <div class="header">
            <div class="head-img">
                <img src="../../assets/logo.png" alt="">
            </div>
            <div class="name">昵称</div>
            <div class="user-id">ID</div>
        </div>
        <!-- 信息列表 -->
        <ul class="msg-list">
            <li>
                <div class="left iconfont icon-jinbi1"></div>                
                <div class="content">
                    <div class="coin">我的娃娃币</div>
                    <div class="num">00</div>
                    <div class="right">
                        <span>充值</span>
                        <span class="iconfont icon-left-copy-copy"></span>
                    </div>
                </div>
            </li>
            <li>
                <div class="left iconfont icon-jinbi1"></div>                
                <div class="content">
                    <div class="coin">我的娃娃币</div>
                    <div class="num">00</div>
                    <div class="right">
                        <span>充值</span>
                        <span class="iconfont icon-left-copy-copy"></span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import navbar from "@/components/common/navbar.vue"
export default {
    data(){
        return{
            content: "我的"
        }
    },
    components: {
        navbar
    }
}
</script>

<style lang="scss" scoped>
    .user {
        .header {
            margin-top: .1rem;
            height: 1.2rem;
            background-color: #fff;             
            .head-img {
                width: .6rem;
                height: .6rem;
                margin: 0 auto;
                border-radius: .4rem;
                overflow: hidden;   
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .name {
                height: .28rem;
                line-height: .3rem;
                font-size: .24rem;
                font-weight: bold;
                text-align: center;
            }
            .user-id {
                height: .3rem;
                line-height: .3rem;
                text-align: center;                
            }
        }
        .msg-list {
            width: 100%;
            margin-top: .1rem;
            li {
                height: .4rem;
                width: 6.9rem;
                padding: 0 .3rem;            
                display: flex;
                align-items: center;
                background-color: #fff;
                .iconfont {
                    font-size: .24rem;
                    color: #ffb303;
                }
                .left{
                    width: .3rem;
                }
                .content {
                    height: .4rem;
                    width: 6.6rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-bottom: 1px #ccc solid;
                    .coin {
                        width: 3rem;
                    }
                    .num {
                        width: 3.3rem;
                        text-align: center;
                    }
                    .right {
                        width: 3.3rem;
                        text-align: right;
                        .iconfont {
                           font-size: .16rem;
                           color: #ccc;
                        }
                    }
                }
            }
        }
    }
</style>
