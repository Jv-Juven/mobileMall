<template>
  <div class="circle checked"></div>
</template>

<script>
  export default {}
</script>

<style lang="less">
  @circle-w: .9rem;
  .circle {
    position: relative;
    top: .1rem;
    width: @circle-w;
    height: @circle-w;
    margin-right: .2rem;
    display: inline-block;

    background: url(../assets/images/common/pic_car_unselect.png);
    background-size: 100% 100%;
  }
  .checked {
    background: url(../assets/images/common/pic_car_select.png);
    background-size: 100% 100%;
  }
</style>
