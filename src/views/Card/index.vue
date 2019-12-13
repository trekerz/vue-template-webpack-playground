<template>
  <div class="card-wrapper">
    <div class="word">{{ name }}</div>
    <router-link to="/card/swiper">Swiper →</router-link>
    <router-link to="/card/vant-swiper">VantSwiper →</router-link>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      name: 'Index'
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../style/common.less';
  .card-wrapper {
    .flex(column, center);
    width: ~`unit(750)`;
    .word {
      color: white;
      font-size: ~`unit(48)`;
      background: green;
    }
  }
</style>
