<template>
  <div class="w-search">
    <input class="input" type="text" placeholder="搜索商品">
    <i class="icon icon-search"></i>
  </div>
</template>

<style lang="less" scoped>
  @s-input-h: 36px;

  .w-search {
    width: 90%;
    margin: 10px auto;

    border: 1px solid rgb(245, 245, 245);
    border-radius: 4px;
  }
  .icon {
    float: right;
    margin-top: 10px;
    margin-right: 14px;

    display: inline-block;
    width: 20px;
    height: 30px;

    background: url(../assets/images/home/btn_shopindex_search.png) no-repeat;
    background-size: 100%;
  }
  .input {
    // width: 100%;
    height: @s-input-h;
    padding-top: 2px;
    padding-left: 8px;
    overflow: hidden;
  }
</style>

<script>
  export default {}
</script>