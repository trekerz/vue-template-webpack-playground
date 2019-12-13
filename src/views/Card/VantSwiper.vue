<template>
  <div class="page-wrapper">
    <div class="word">{{ name }}</div>
    <Swipe style="height: 200px">
      <SwipeItem>1</SwipeItem>
      <SwipeItem>2</SwipeItem>
      <SwipeItem>3</SwipeItem>
      <SwipeItem>4</SwipeItem>
      <SwipeItem>5</SwipeItem>
      <SwipeItem>6</SwipeItem>
    </Swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant'

export default {
  name: 'VantSwiper',
  components: {
    Swipe,
    SwipeItem
  },
  data() {
    return {
      name: 'Swiper',
      cardList: [
        {
          id: 1,
          img: 'http://img5.imgtn.bdimg.com/it/u=3008142408,2229729459&fm=26&gp=0.jpg'
        },
        {
          id: 2,
          img: 'http://img5.imgtn.bdimg.com/it/u=3008142408,2229729459&fm=26&gp=0.jpg'
        },
        {
          id: 3,
          img: 'http://img5.imgtn.bdimg.com/it/u=3008142408,2229729459&fm=26&gp=0.jpg'
        },
        {
          id: 4,
          img: 'http://img5.imgtn.bdimg.com/it/u=3008142408,2229729459&fm=26&gp=0.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../style/common.less';
  .page-wrapper {
    width: ~`unit(750)`;
    .word {
      color: white;
      font-size: ~`unit(48)`;
      background: green;
    }
  }
  .van-swipe {
    margin-top: ~`unit(24)`;
    .van-swipe-item {
      background: #eee;
      overflow: hidden;
      border-radius: ~`unit(16)`;
      opacity: 1;
    }
  }
</style>
