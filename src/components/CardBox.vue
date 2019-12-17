<template>
  <div class="card-box-wrapper">
    <div v-for="(item, i) in list" :key="i" class="card-box">
      <Icon info="1">
        <img v-if="item.img" :src="item.img" />
      </Icon>
    </div>
  </div>
</template>

<script>
import { Icon } from 'vant'

export default {
  name: 'CardBox',
  components: {
    Icon
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
  @import '../style/common.less';
  .card-box-wrapper {
    .flex(row, center, center);
    .card-box {
      width: ~`unit(68)`;
      height: ~`unit(88)`;
      &:not(:first-of-type) {
        margin-left: ~`unit(40)`;
      }
      .van-icon {
        width: 100%;
        height: 100%;
        background: #e8e8e8;
        border-radius: ~`unit(6)`;
        img {
          width: 100%;
          height: 100%;
          border-radius: ~`unit(6)`;
        }
      }
    }
  }
</style>
