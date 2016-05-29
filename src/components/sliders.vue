<template>
  <div id="sliders" class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      
      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
  </div>
</template>
<style lang="less" scoped>
  @import url(../assets/lib/swiper.min.css);
  .swiper-container {
    position: relative;
    top: 10px;
    left: 0;

    width: 100%;
  }
</style>

<script>
  import Swiper from 'swiper'
  export default {
    ready () {
      Swiper('#sliders', {
        direction: 'vertical',
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        // 如果需要滚动条
        scrollbar: '.swiper-scrollbar'
      })
    }
  }
</script>
