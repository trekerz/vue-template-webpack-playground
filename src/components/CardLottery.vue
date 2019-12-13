<template>
  <div class="card-lottery-wrapper">
    <div class="card">
      <div class="front">
        <img :src="imgFront" />
      </div>
      <div class="back">
        <!-- <img :src="imgBack" /> -->
        中奖啦
      </div>
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
      transform-style: preserve-3d;
      animation: turnBack 1s ease-in .8s forwards;
      .front,
      .back {
        .position(absolute);
        overflow: hidden;
        border-radius: ~`unit(16)`;
        backface-visibility: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .back {
        background: #eee;
        transform: rotateY(180deg);
      }
    }
  }
  @keyframes zoomIn {
    0% { transform: scale(0.2); }
    100% { transform: scale(1); }
  }
  @keyframes turnBack {
    0% { transform: rotateY(0); }
    100% { transform: rotateY(180deg); }
  }
</style>
