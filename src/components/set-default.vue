<template>
  <div class="set-default-txt">
    <radio-btn></radio-btn>
    设为默认
  </div>
</template>

<script>
  import radioBtn from './radio-btn'
  export default {
    components: {
      radioBtn
    }
  }
</script>

<style lang="less">
  .set-default-txt {
    float: left;
  }
</style>