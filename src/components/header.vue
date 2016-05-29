<template>

  <header class="bar bar-nav">
    <slot name="left-btn"></slot>
    <h1 class="title">{{titleText}}</h1>
  </header>

  <div class="bar bar-header-secondary" v-if='fixHead' v-link="{ path: '/search' }">
    <div class="searchbar">
      <a class="searchbar-cancel">取消</a>
      <div class="search-input">
        <label class="icon icon-search" for="search"></label>
        <input type="search" id='search' placeholder='输入关键字...'/>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    props: [
      'titleText',
      'fixHead'
    ]
  }
</script>