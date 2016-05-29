<template>
  <header class="title-header">
    <div class="menu-btn">
      <img src="../assets/images/common/btn_shop_classification.png" alt="">
    </div>
    <div class="title-container">
      {{titleText}}
    </div>
    <div class="shopcar">
      购物车
    </div>
  </header>
</template>

<script>
  export default {
    props: ['titleText']
  }
</script>

<style lang="less" scoped>

  @import url('../assets/less/common.less');

  @title-p: 60%;
  .title-header {
    position: relative;
    top: 0;
    left: 0;

    color: white;
    // text-align: center;

    width: 100%;
    height: @header-height;
    line-height: @header-height;

    background: @header-blue;
    &>div {
      display: inline-block;
      float: left;
    }
  }
  .title-container {
    text-align: center;
    font-size: 16px;

    width: @title-p;
    height: @header-height;
    line-height: @header-height;
  }

  .menu-btn {
    @top: 5px;

    width: (100% - @title-p)/2;
    
    &>img {
      position: relative;
      top: 0;
      left: 15px;

      width: 26px;
    }
  }
  .shopcar {
    font-size: 14px;
    text-align: center;

    width: (100% - @title-p)/2;
    height: @header-height;
  }

</style>