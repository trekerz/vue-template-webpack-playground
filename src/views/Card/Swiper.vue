<template>
  <div class="page-wrapper">
    <div class="word">{{ name }}</div>
    <swiper-view :list="cardList" />
    <van-button class="btn-lottery" type="primary" @click="startLottery">立即抽卡</van-button>
    <card-box :list="cardBoxList" />
    <van-popup
      class="popup-wrapper"
      v-model="showPopup"
      :close-on-popstate="false"
      :close-on-click-overlay="false">
      <card-lottery v-if="showPopup" :nextIndex="nextBoxIndex" @getCard="onGetCard" />
    </van-popup>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import Swiper from '@/components/Swiper'
import CardBox from '@/components/CardBox'
import CardLottery from '@/components/CardLottery'
import { Button, Popup } from 'vant'
const imgExample = require('../../assets/example.jpg')

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
      cardBoxList: [],
      nextBoxIndex: 0,
      cardList: [
        {
          id: 1,
          img: imgExample,
          text: '爱岗福'
        },
        {
          id: 2,
          img: imgExample,
          text: '敬业福'
        },
        {
          id: 3,
          img: imgExample,
          text: '诚信福'
        },
        {
          id: 4,
          img: imgExample,
          text: '友善福'
        }
      ]
    }
  },
  mounted() {
    this.cardBoxList = new Array(5).fill({})
  },
  methods: {
    startLottery() {
      this.showPopup = true
      this.nextBoxIndex = this.cardBoxList.findIndex(card => !card.id)
    },
    onGetCard() {
      this.showPopup = false
      this.$set(this.cardBoxList, this.nextBoxIndex, {
        id: +new Date(),
        img: imgExample,
        text: '敬业福'
      })
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
      overflow: visible;
    }
  }
</style>
