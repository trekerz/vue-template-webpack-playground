<template>
  <div class="card-lottery-wrapper">
    <div
      :class="`
        card
        ${showTurnAnimation ? 'turn' : ''}
        ${showGetAnimation ? 'get' : ''}
      `"
      @animationstart="onAnimationStart"
      @animationend="onAnimationEnd">
      <div :class="showGetAnimation ? 'back' : 'front'">
        <img :src="imgFront" />
      </div>
      <div :class="showGetAnimation ? 'front' : 'back'">
        <h6>获得一张</h6>
        <h3>敬业福</h3>
      </div>
    </div>
    <van-button
      :class="`btn-get ${showBtnGet ? 'show' : ''}`"
      type="primary"
      @click="onGetCard">
      收下啦
    </van-button>
  </div>
</template>

<script>
import { Button } from 'vant'
const imgExample = require('../assets/example.jpg')
const animationTurnBack = 'turnBack'
const animationZoomOut = 'zoomOut'

export default {
  name: 'CardLottery',
  components: {
    'van-button': Button
  },
  data() {
    return {
      showBtnGet: false,
      showTurnAnimation: false,
      showGetAnimation: false,
      imgFront: imgExample
    }
  },
  mounted() {
    this.showTurnAnimation = true
  },
  methods: {
    onAnimationStart(e) {
      const name = e.animationName
      if (new RegExp(animationZoomOut).test(name)) {
        // turnBack动画开始
        this.showBtnGet = false
      }
    },
    onAnimationEnd(e) {
      const name = e.animationName
      if (new RegExp(animationTurnBack).test(name)) {
        // turnBack动画结束
        this.showBtnGet = true
      } else if (new RegExp(animationZoomOut).test(name)) {
        // zoomOut动画结束
        setTimeout(() => {
          this.showGetAnimation = false
          this.$emit('getCard')
        }, 200)
      }
    },
    // 点击收下卡片
    onGetCard() {
      this.forgeKeyframe()
      this.showGetAnimation = true
    },
    // 获取要移动到的位置并制作keyframe
    forgeKeyframe() {
      let cardX = 0, cardY = 0, boxX = 0, boxY = 0
      const zoom = 0.15
      const keyframeTemp = `
        @keyframes zoomOut {
          0% { transform: scale(1); }
          50% { transform: scale(${zoom}); }
          70% { transform: scale(${zoom}); }
          100% { transform: scale(${zoom}) translate({x}, {y}); }
        }
      `
      const cardClassName = 'card'
      const cardBoxClassName = 'card-box'
      const style = document.styleSheets || []
      // 计算卡片和盒子的相对坐标
      const cardReact = (document.querySelector(`.${cardClassName}`) || {}).getBoundingClientRect()
      const boxReact = (document.querySelector(`.${cardBoxClassName}`) || {}).getBoundingClientRect()
      if (cardReact && boxReact) {
        boxX = -(boxReact.top + boxReact.height / 2)
        boxY = boxReact.left + boxReact.width / 2
        cardX = -(cardReact.top + cardReact.height / 2)
        cardY = cardReact.left + cardReact.width / 2
      }
      if (style.length) {
        // 插入keyframe
        const rule = keyframeTemp
          .replace(/{x}/g, ((boxY - cardY) * (1 / zoom)).toFixed(0) + 'px')
          .replace(/{y}/g, ((cardX - boxX) * (1 / zoom)).toFixed(0) + 'px')
        style[style.length - 1].insertRule(rule)
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../style/common.less';
  .card-lottery-wrapper {
    perspective: 1000px;
    .card {
      position: relative;
      width: ~`unit(480)`;
      height: ~`unit(620)`;
      transform-style: preserve-3d;
      &.turn {
        animation: turnBack 1.2s cubic-bezier(0.57,-0.59, 0.83, 1.01) .8s forwards;
      }
      &.get {
        animation: zoomOut 1s ease-out forwards;
      }
      .front,
      .back {
        .position(absolute);
        overflow: hidden;
        background: #eee;
        border-radius: ~`unit(16)`;
        backface-visibility: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .back {
        transform: rotateY(180deg);
      }
    }
    .btn-get {
      visibility: hidden;
      margin-top: ~`unit(88)`;
      &.show {
        visibility: visible;
      }
    }
  }
  @keyframes turnBack {
    0% { transform: rotateY(0); }
    100% { transform: rotateY(180deg); }
  }
  // 改为js插入
  // @keyframes zoomOut {
  //   0% { transform: scale(1); }
  //   50% { transform: scale(.15); }
  //   70% { transform: scale(.15); }
  //   100% { transform: scale(.15) translate(~`unit(-800)`, ~`unit(1680)`); }
  // }
</style>
