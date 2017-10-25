<template>
    <div class="user">
        <navbar :content="content"></navbar>
        <!-- 头像 -->
        <div class="header"></div>
        <!-- 信息列表 -->
        <ul class="msg-list">
            <li></li>
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

</style>
