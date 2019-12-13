<template>
  <div class="card-wrapper">
    <div class="word">{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      name: 'card'
    }
  }
}
</script>

<style lang="less">
  .card-wrapper {
    width: ~`unit(750)`;
    .word {
      color: red;
      font-size: ~`unit(48)`;
      background: yellow;
    }
  }
</style>
