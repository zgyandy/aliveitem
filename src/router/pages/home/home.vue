<template>
    <div class="home">
        <!-- 顶部导航 -->
        <navbar :content="content"></navbar>
        <!-- 轮播图 -->
        <banner></banner>
        <!-- 娃娃列表 -->
        <raglist></raglist>
        <!-- 底部 -->
        <bottoms></bottoms>
    </div>
</template>

<script>
import navbar from "@/components/common/navbar.vue";
import bottoms from "@/components/common/bottom.vue"

import banner from "@/components/banner/banner.vue"
import raglist from "@/components/raglist/raglist.vue"
    export default {
        data (){
            return {
                content: "欢乐抓娃娃"
            }
        },
        mounted(){
            
        },
        components: {
            navbar,banner,raglist,bottoms
        },
    }
</script>

<style lang="scss" scoped>

</style>
