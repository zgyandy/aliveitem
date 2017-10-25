<template>
    <div class="toydetail">
        <ul class="navbar">
            <li>玩具1</li>
            <li>玩具2</li>
            <li>玩具3</li>
        </ul>
        <ul>
            <li>
                玩具娃娃
            </li>
            <li>
                玩具娃娃
            </li>
            <li>
                玩具娃娃
            </li>
            <li>
                玩具娃娃
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: {
    toy_id: {
      default: Number
    }
  }
};
</script>

<style lang="scss" scoped>
.toydetail {
  width: 6.9rem;
  margin: 0 0.3rem;
  background-color: #f00;
  .navbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      height: 0.8rem;
      line-height: 0.8rem;
    }
  }
}
</style>
