<template>
  <div class="card-lottery-wrapper">
    <div class="card">
      <img class="front" :src="imgFront" />
      <img class="back" :src="imgBack" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardLottery',
  data() {
    return {
      imgFront: 'http://img5.imgtn.bdimg.com/it/u=3008142408,2229729459&fm=26&gp=0.jpg',
      imgBack: 'http://img1.imgtn.bdimg.com/it/u=1806061882,1543357569&fm=26&gp=0.jpg'
    }
  },
  methods: {

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
      border-radius: ~`unit(16)`;
      // animation-name: turnOver;
      // animation-duration: 1s;
      // animation-timing-function: ease-in;
      // transform-style: preserve-3d;
      // backface-visibility: hidden;
      // transition: transform 2s;
      transform-style: preserve-3d;
      animation: turnToBack .8s ease-in;
      .front,
      .back {
        .position(absolute);
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
      }
      .back {
        transform: rotateY(180deg);
        animation: turnToFront .8s ease-in;
      }
    }
  }
  @keyframes zoomIn {
    0% { transform: scale(0.2); }
    100% { transform: scale(1); }
  }
  @keyframes turnToFront {
    0% { transform: rotateY(180deg); }
    100% { transform: rotateY(0); }
  }
  @keyframes turnToBack {
    0% { transform: rotateY(0); }
    100% { transform: rotateY(180deg); }
  }
</style>
