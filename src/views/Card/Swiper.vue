<template>
  <div class="page-wrapper">
    <div class="word">{{ name }}</div>
    <swiper-view :list="cardList" />
    <van-button class="btn-lottery" type="primary" @click="startLottery">立即抽卡</van-button>
    <card-box :list="[1,2,3]" />
    <van-popup class="popup-wrapper" v-model="showPopup">
      <card-lottery v-if="showPopup" />
    </van-popup>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import Swiper from '@/components/Swiper'
import CardBox from '@/components/CardBox'
import CardLottery from '@/components/CardLottery'
import { Button, Popup } from 'vant'

export default {
  name: 'Swiper',
  components: {
    'swiper-view': Swiper,
    'card-box': CardBox,
    'card-lottery': CardLottery,
    'van-button': Button,
    'van-popup': Popup
  },
  data() {
    return {
      name: 'Swiper',
      showPopup: false,
      cardList: [
        {
          id: 1,
          img: 'http://img5.imgtn.bdimg.com/it/u=3008142408,2229729459&fm=26&gp=0.jpg',
          text: '爱岗福'
        },
        {
          id: 2,
          img: 'http://img5.imgtn.bdimg.com/it/u=3008142408,2229729459&fm=26&gp=0.jpg',
          text: '敬业福'
        },
        {
          id: 3,
          img: 'http://img5.imgtn.bdimg.com/it/u=3008142408,2229729459&fm=26&gp=0.jpg',
          text: '诚信福'
        },
        {
          id: 4,
          img: 'http://img5.imgtn.bdimg.com/it/u=3008142408,2229729459&fm=26&gp=0.jpg',
          text: '友善福'
        }
      ]
    }
  },
  methods: {
    startLottery() {
      this.showPopup = true
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
    .swiper-container {
      margin-top: ~`unit(16)`;
    }
    .card-box-wrapper {
      margin-top: ~`unit(48)`;
    }
    .btn-lottery {
      margin-top: ~`unit(32)`;
    }
    .popup-wrapper {
      background: none;
    }
  }
</style>
