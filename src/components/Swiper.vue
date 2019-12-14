<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(card, i) in list" v-bind:key="i">
      <img :src="card.img" @click="onClickSlide(card)" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Swiper',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      name: 'Swiper',
      swiperOption: {
        initialSlide: 0,
        slidesPerView: 2,
        spaceBetween: 5,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        on: {
          slideChange: this.onChangeSlide
        }
      }
    }
  },
  methods: {
    onChangeSlide() {
      this.$emit('changeSlide')
    },
    onClickSlide(card) {
      this.$emit('clickSlide', card)
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../style/common.less';
  .swiper-container {
    padding: ~`unit(28)` 0;
    .swiper-slide {
      height: ~`unit(480)`;
      background: #eee;
      overflow: hidden;
      border-radius: ~`unit(16)`;
      opacity: 1;
      transition: transform .5s;
      img {
        width: 100%;
        height: 100%;
      }
      &.swiper-slide-active {
        box-shadow: ~`unit(4)` ~`unit(4)` ~`unit(24)` rgba(12, 12, 12, .5);
      }
      &:not(.swiper-slide-active) {
        transform: scale(0.9);
      }
    }
    .swiper-pagination {
      /deep/ .swiper-pagination-bullet-active {
        background: #1baf63;
      }
    }
  }
</style>
