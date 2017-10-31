<template>
    <div class="out">
        <div class="navbar">
            <div class="nav">
                <!-- 判断是否为首页 -->
                <div v-show="!home" class="iconfont icon-svg-" @click.stop="go"></div>
                <div v-show="home" class="iconfont icon-wodecopy" @click.stop="toUser"></div> 
                <div class="content">{{content}}</div>
                <div class="iconfont"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        content:{
            default: "欢乐抓娃娃"
        }
    },
    data (){
        return {
            home: false,        // 是否为首页
        }
    },
    mounted(){
        // 判断是否为首页
        if(this.$route.path.indexOf("home") != -1){
            this.home = true;
        }else {
            this.home = false;
        }
    },
    methods:{
        go(){
            this.$router.go(-1)
        },
        toUser(){
            this.$router.push({name: "user"})
        }
    }
}
</script>

<style scoped lang="scss">
    .out {
        height: .8rem;
        width: 7.5rem;
        margin: 0 auto;
        .navbar {
            height: .8rem;
            width: 6.9rem;
            padding: 0 .3rem;
            background-color: #cdc;
            position: fixed;
            left: 50%;
            top: 0;
            z-index: 99;
            transform: translate(-50%, 0);
            .nav {
                height: .8rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #fff;
                font-size: .28rem;
                .iconfont {
                    width: .3rem;
                    font-size: .3rem;
                }
            }
        }
        .div1 {
            height: .8rem;
            width: 100%;
        }
    }

</style>
