<template>
    <div class="machines">
        <!-- 顶部导航 -->
        <navbar :content="content"></navbar>
        <!-- 娃娃机列表 -->
        <machineslist></machineslist>
        <!-- 底部 -->
        <bottoms></bottoms>
    </div>
</template>

<script>
import navbar from '@/components/common/navbar.vue'
import bottoms from "@/components/common/bottom.vue"

import machineslist from "@/components/machineslist/machineslist.vue"

export default {
    data () {
        return {
            content: "娃娃机列表"
        }
    },
    components:{
        navbar,machineslist,bottoms
    }
}
</script>

<style scoped lang="scss">
    
</style>
