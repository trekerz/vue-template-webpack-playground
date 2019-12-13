<template>
  <div class="page-wrapper">
    <div class="word">{{ name }}</div>
    <Swipe>
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
      font-size: 24px;
      background: green;
    }
  }
  .van-swipe {
    margin-top: 12px;
    .swiper-slide {
      // width: 60%;
      height: 240px;
      background: #eee;
      overflow: hidden;
      border-radius: 8px;
      opacity: 1;
      transition: transform .5s;
      &:not(.swiper-slide-active) {
        transform: scale(0.9);
      }
    }
  }
</style>
