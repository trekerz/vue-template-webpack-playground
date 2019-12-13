<template>
  <div class="home-wrapper">
    <Helloworld />
    <router-link to="/card">卡片页 →</router-link>
  </div>
</template>

<script>
import Helloworld from '@/components/HelloWorld'

export default {
  name: 'Home',
  components: {
    Helloworld
  }
}
</script>

<style lang="less">
  .home-wrapper {
    color: #35495d;
  }
</style>
