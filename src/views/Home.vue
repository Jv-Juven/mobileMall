<template>
  <div class="body-wrapper" :transition="transitionName">
    <title-header :title-text="headerText"></title-header>
    <search-box></search-box>
    <slider></slider>
    <h1>商城首页</h1>
    <h2>
      {{transitionName}}
    </h2>
    <a v-link="{ path: '/classes' }">商品分类</a>
  </div>
</template>

<script>
  import titleHeader from '../components/header'
  import searchBox from '../components/w-bg-search'
  import slider from '../components/sliders'

  export default {
    components: {
      titleHeader,
      searchBox,
      slider
    },
    data () {
      return {
        headerText: '商城',
        transitionName: 'expand'
      }
    },
    ready () {
      // router.go({ path: '/home' })
    }
  }
</script>

<!-- 加scoped属性局部作用 -->
<style lang="less">

@import url('../assets/less/transition.less');
  
</style>