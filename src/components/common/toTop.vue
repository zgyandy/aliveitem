<template>
    <div class="to-top" @click.stop="toTop" v-show="position>200">
        <span class="iconfont icon-top"></span>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                scroll:null,
                position:0,
            }
        },
        methods:{
            toTop(){
                document.documentElement.scrollTop ? document.documentElement.scrollTop = 0 : document.body.scrollTop = 0;
            }
        },
        created(){
            window.addEventListener('scroll',() => {
                this.position = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
            })
        }
    }
</script>

<style lang="scss" scoped>
    .to-top {
        height: .8rem;
        widows: .8rem;
        border-radius: 100%;
        position: fixed;
        z-index: 80;
        right: .3rem;
        bottom: 1.2rem;
        .iconfont {
            color: #FF8788;
            font-size: .8rem;
        }
    }
</style>
