<template>
  <div class="page-wrapper">
    <div class="word">{{ name }}</div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(card, i) in cardList" v-bind:key="i">
        <img :src="card.img" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Swiper',
  components: {
    swiper,
    swiperSlide
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
      ],
      swiperOption: {
        initialSlide: 1,
        slidesPerView: 2,
        spaceBetween: 5,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
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
  .swiper-container {
    margin-top: ~`unit(24)`;
    .swiper-slide {
      // width: 60%;
      height: ~`unit(480)`;
      background: #eee;
      overflow: hidden;
      border-radius: ~`unit(16)`;
      opacity: 1;
      transition: transform .5s;
      &:not(.swiper-slide-active) {
        transform: scale(0.9);
      }
    }
  }
</style>
