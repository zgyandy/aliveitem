<template>
    <mt-swipe :auto="4000">
        <mt-swipe-item>
            <img src="../../assets/images/demo.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="../../assets/images/demo.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="../../assets/images/demo.jpg" alt="">
        </mt-swipe-item>
    </mt-swipe>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .mint-swipe {
        
        height: 3rem;
        width: 7.3rem;
        margin: 0 auto;
        .mint-swipe-items-wrap {
            img {
                width: 100%;
            }
        }

    }
</style>


