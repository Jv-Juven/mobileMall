<template>

  <div class="page page-current" transition="expand">
    <title-header title-text="地址管理">
      <a class="icon icon-left pull-left" href="javascript:window.history.go(-1)" slot="left-btn"></a>
    </title-header>

    <div class="content" v-if="false">

      <div class="card">
        <div class="card-content">
          <div class="card-content-inner">

            <div class="addr-header">
              <div class="addr-title">哒哒哒</div>
              <div class="addr-phone">155*******000</div>
            </div>
            
            <div class="addr-details">
              广东广州市白云区三元里街道机场路飞云东街中国航空航天服务有限公司
            </div>
          </div>
        </div>
        <div class="card-footer">
          <set-default></set-default>
          <div class="opts">
            <span class="icon icon-edit pull-left">
              编辑
            </span>
            <span class="icon icon-remove pull-left">
              删除
            </span>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="card-content-inner">

            <div class="addr-header">
              <div class="addr-title">哒哒哒</div>
              <div class="addr-phone">155*******000</div>
            </div>
            
            <div class="addr-details">
              广东广州市白云区三元里街道机场路飞云东街中国航空航天服务有限公司
            </div>
          </div>
        </div>
        <div class="card-footer">
          <set-default></set-default>
          <div class="opts">
            <span class="icon icon-edit pull-left">
              编辑
            </span>
            <span class="icon icon-remove pull-left">
              删除
            </span>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="card-content-inner">

            <div class="addr-header">
              <div class="addr-title">哒哒哒</div>
              <div class="addr-phone">155*******000</div>
            </div>
            
            <div class="addr-details">
              广东广州市白云区三元里街道机场路飞云东街中国航空航天服务有限公司
            </div>
          </div>
        </div>
        <div class="card-footer">
          <set-default></set-default>
          <div class="opts">
            <span class="icon icon-edit pull-left">
              编辑
            </span>
            <span class="icon icon-remove pull-left">
              删除
            </span>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="card-content-inner">

            <div class="addr-header">
              <div class="addr-title">哒哒哒</div>
              <div class="addr-phone">155*******000</div>
            </div>
            
            <div class="addr-details">
              广东广州市白云区三元里街道机场路飞云东街中国航空航天服务有限公司
            </div>
          </div>
        </div>
        <div class="card-footer">
          <set-default></set-default>
          <div class="opts">
            <span class="icon icon-edit pull-left">
              编辑
            </span>
            <span class="icon icon-remove pull-left">
              删除
            </span>
          </div>
        </div>
      </div>

    </div>

    <div class="content">
      <div class="addr-none">
        <img class="none-img" src="../assets/images/common/pic_tips_no_address.png" alt="">
        <div class="none-text">
          您还没有添加新地址
        </div>
      </div>
    </div>

    <div class="bar bar-tab">
      <bottom-btn btn-text="添加新地址" path="{ path: '/' }"></bottom-btn>
    </div>
  </div>

</template>
<script>
  import titleHeader from '../components/header'
  import bottomBtn from '../components/bottom-btn'
  import setDefault from '../components/set-default'
  export default {
    components: {
      titleHeader,
      bottomBtn,
      setDefault
    }
  }
</script>
<style lang="less" scoped>
  @height: 1rem;
  @title-size: .8rem;
  @info-grey: rgb(150, 150, 150);
  .content {
    padding-bottom: 6rem;
  }
  .card-content-inner {
    overflow: hidden;
  }
  .addr-header {
    padding: 0 0 .2rem;
    overflow: hidden;
  }
  .addr-title {
    float: left;

    font-size: @title-size;

    width: 4rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    // line-height: @height;
  }
  .addr-phone {
    float: left;

    font-size: @title-size;

    width: 10rem;

    margin-left: .4rem;
  }
  .addr-details {
    font-size: .6rem;
    color: @info-grey;
  }
  .opts {
    float: right;

    width: 6.4rem;
    overflow: hidden;

    .icon {
      color: @info-grey;
      margin-left: .8rem;
    }
  }
  .bar {
    z-index: 15;
    box-sizing: content-box;
    padding-top: .4rem;
  }
  .addr-none {
    width: 100%;
    margin-top: 5rem;
    text-align: center;
    .none-img {
      @w: 5rem;
      width: @w;
      height: @w;
    }
    .none-text {
      line-height: 2.6rem;
      font-size: .8rem;
      color: @info-grey;
    }
  }
</style>