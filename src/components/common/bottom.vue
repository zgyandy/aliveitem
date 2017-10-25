<template>
    <div class="bottom">
        <div class="line"></div>
        <div class="center">我是有底线的</div>
        <div class="line"></div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    .bottom {
        height: .8rem;
        display: flex;
        justify-content: center;
        align-items: bottom;
        .line {
            height: .39rem;
            width: 1rem;
            border-bottom: 1px #999 solid;
        }
        .center {
            line-height: .8rem;
            margin: 0 .2rem;
            font-size: .28rem;
        }
    }
</style>
