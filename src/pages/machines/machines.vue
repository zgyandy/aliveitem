<template>
    <div class="machines">
        <navbar :content="content"></navbar>
    </div>
</template>

<script>
import navbar from '@/components/common/navbar.vue'
export default {
    data () {
        return {
            content: "娃娃机列表"
        }
    },
    components:{
        navbar,
    }
}
</script>

<style scoped lang="scss">
    
</style>
