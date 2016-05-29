<template>
  <div class="footer-bar">
    <p>
      <a :v-link="path" class="button button-fill">
        {{btnText}}
      </a>
    </p>
  </div>
</template>
<script>
  export default {
    props: ['btnText', 'path']
  }
</script>
<style lang="less">
  @import url(../assets/less/common.less);
  .footer-bar {
    .ab-bottom();
    width: 14rem;
    left: 1rem;
    a {
      @h: 2rem;
      font-size: .8rem;
      height: @h!important;
      line-height: @h!important;
    }
  }
</style>