<template>
  <div class="page page-current" transition="expand">
    <title-header title-text="搜索栏">
      <a href="javascript: history.go(-1)" class="icon icon-left pull-left" slot="left-btn"></a>
    </title-header>
    <div class="bar bar-header-secondary">
      <div class="searchbar">
        <a class="searchbar-cancel">取消</a>
        <div class="search-input">
          <label class="icon icon-search" for="search"></label>
          <input type="search" id='search' placeholder='输入关键字...'/>
        </div>
      </div>
    </div>

    <div class="content content-padded grid-demo">
      <h3 class="hot-search">
        热门搜索
      </h3>
      <div class="row">
        <div class="col-33">
          <a class="search-tag">
            蜂蜜
          </a>
        </div>
        <div class="col-33">
          <a class="search-tag">
            蜂蜜
          </a>
        </div>
        <div class="col-33">
          <a class="search-tag">
            蜂蜜
          </a>
        </div>
        <div class="col-33">
          <a class="search-tag">
            蜂蜜
          </a>
        </div>
        <div class="col-33">
          <a class="search-tag">
            蜂蜜
          </a>
        </div>
        <div class="col-33">
          <a class="search-tag">
            蜂蜜
          </a>
        </div>
        <div class="col-33">
          <a class="search-tag">
            蜂蜜
          </a>
        </div>
        <div class="col-33">
          <a class="search-tag">
            蜂蜜
          </a>
        </div>
      </div>
    </div>

  </div>
  
</template>

<script>
  import titleHeader from '../components/header'
  export default {
    components: {
      titleHeader
    }
  }
</script>

<style lang="less" scoped>
  .hot-search {
    color: rgb(140, 140, 140);
  }
  .row {
    margin-top: 8px;
    .col-33 {
      margin-top: .4rem;
    }
  }
  .search-tag {
    font-size: .8rem;
    text-align: center;
    color: black;

    width: 100%;
    padding: .3rem 0;
    border-radius: 5px;
    display: block;
    background: rgb(226, 226, 226);
  }
</style>
