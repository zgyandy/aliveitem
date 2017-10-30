<template>
    <div class="toydetail">
        <mt-navbar v-model="selected" value=1>
            <mt-tab-item id="1">选项一</mt-tab-item>
            <mt-tab-item id="2">选项二</mt-tab-item>
            <mt-tab-item id="3">选项三</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <ul>
                    <li>
                        <img src="../../assets/images/demo1.png" alt="">
                    </li>
                    <li>
                        <img src="../../assets/images/demo1.png" alt="">
                    </li>
                </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <ul>
                    <li>
                        <img src="../../assets/images/demo2.png" alt="">
                    </li>
                    <li>
                        <img src="../../assets/images/demo2.png" alt="">
                    </li>
                </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <ul>
                    <li>
                        <img src="../../assets/images/demo1.png" alt="">
                    </li>
                    <li>
                        <img src="../../assets/images/demo1.png" alt="">
                    </li>
                </ul>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
export default {
  props: {
    toy_id: {
            default: Number
        }
    },
    data(){
        return {
            num: 1,
            selected: "1",
        }
    }

};
</script>

<style lang="scss" scoped>
.toydetail {
    width: 6.9rem;
    margin: 0 0.3rem;
    .mint-navbar .mint-tab-item {
        font-size: .3rem;
        .is-selected {
            color: #0ff;
        }
    }
    .mint-tab-container-item {
        img {
            width: 100%;
        }        
    }
}
</style>
