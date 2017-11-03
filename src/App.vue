<template>
    <div id="app">
        <router-view />
        <loading v-show="getLoading"></loading>
    </div>
</template>

<script>
import loading from "@/components/common/loading.vue"
// 状态获取
import { mapActions, mapGetters } from "vuex"
export default {
    name: "app",
    components: {
        loading,
    },
    computed: mapGetters(
        ["getLoading"]
    ),
};
</script>

<style lang="scss" scoped>
    #app {
        width: 7.5rem;
        margin: 0 auto;
        background-color: #ddd;
    }
</style>
