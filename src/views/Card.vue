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
    width: 750px;
    .word {
      color: red;
      font-size: 48px;
      background: yellow;
    }
  }
</style>
