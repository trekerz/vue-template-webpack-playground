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
      <div :class="showGetAnimation ? 'back' : 'front'"></div>
      <div :class="showGetAnimation ? 'front' : 'back'">
        <img :src="imgBack" />
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
  props: {
    nextIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      showBtnGet: false,
      showTurnAnimation: false,
      showGetAnimation: false,
      imgBack: imgExample
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
      let cardX = 0, cardY = 0, boxX = 0, boxY = 0, cardReact, boxReact
      const zoom = 0.18
      const keyframe100Percent = `100% { transform: scale(${zoom}) translate({x}, {y}); }`
      const keyframeTemp = `
        @keyframes ${animationZoomOut} {
          0% { transform: scale(1); }
          50% { transform: scale(${zoom}); }
          70% { transform: scale(${zoom}); }
          ${keyframe100Percent}
        }
      `
      const cardClassName = 'card'
      const cardBoxClassName = 'card-box'
      const style = document.styleSheets || []
      function fillKeyframeTemp(template) {
        return template
          .replace(/{x}/g, ((boxY - cardY) * (1 / zoom)).toFixed(0) + 'px')
          .replace(/{y}/g, ((cardX - boxX) * (1 / zoom)).toFixed(0) + 'px')
      }
      function checkIfKeyframeRule(rule) {
        return new RegExp(animationZoomOut).test(rule.name) &&
          (rule.type === CSSRule.KEYFRAMES_RULE || rule.type === CSSRule.WEBKIT_KEYFRAMES_RULE)
      }
      // 计算卡片和盒子的相对坐标
      const cardNode = document.querySelector(`.${cardClassName}`)
      const boxNode = (document.querySelectorAll(`.${cardBoxClassName}`) || [])[this.nextIndex]
      if (cardNode && boxNode) {
        cardReact = cardNode.getBoundingClientRect()
        boxReact = boxNode.getBoundingClientRect()
      } else {
        return
      }
      if (cardReact && boxReact) {
        boxX = -(boxReact.top + boxReact.height / 2)
        boxY = boxReact.left + boxReact.width / 2
        cardX = -(cardReact.top + cardReact.height / 2)
        cardY = cardReact.left + cardReact.width / 2
      }
      if (style.length) {
        // 删除旧keyframe，插入新keyframe
        const lastStyle = style[style.length - 1]
        const keyframeStyle = Array.from(lastStyle.cssRules)
          .filter(rule => checkIfKeyframeRule(rule))[0]
        if (keyframeStyle) {
          // 替换keyframe模板关键字、替换规则
          const rule = fillKeyframeTemp(keyframe100Percent)
          keyframeStyle.deleteRule('100%')
          keyframeStyle.appendRule(rule)
        } else {
          // 替换keyframe模板关键字、替换规则
          const rule = fillKeyframeTemp(keyframeTemp)
          lastStyle.insertRule(rule)
        }
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
      width: ~`unit(370)`;
      height: ~`unit(480)`;
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
</style>
