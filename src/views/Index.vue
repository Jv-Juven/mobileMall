<template>
  <div class="page page-current" transition="index">
    <title-header :title-text="title" :fix-head="search">
      <a href="#" slot="left-btn" class="icon icon-left pull-left open-panel"></a>
    </title-header>
    <div class="content">
      <!-- Sliders -->
      <!-- 滚动图 -->
      <div class="swiper-container swiper-container-c" data-space-between='10'>
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../assets/images/home/sliders02.png" alt=""></div>
          <div class="swiper-slide"><img src="../assets/images/home/sliders03.png" alt=""></div>
          <div class="swiper-slide"><img src="../assets/images/home/sliders04.png" alt=""></div>
        </div>
        <div class="swiper-pagination"></div>
      </div>

      <!-- 公告栏 -->
      <div class="content-padded">
        <i class="little-icon l-icon-broadcast"></i>
        <span class="bd-txt">
          你若盛开，清风徐来。心若浮沉，浅笑安然。
        </span>
      </div>
      <!-- 活动区 -->
      <div class="boxes-wrapper">
        <ul class="activities">
          <li class="ac-box">
            <a href="javascript:alert(1)">
              <img class="activity-icons" src="../assets/images/home/ac_icon01.png" alt="">
              <span class="activity-title">
                商品分类
              </span>
            </a>
          </li>
          <li class="ac-box">
            <a href="javascript:alert(1)">
              <img class="activity-icons" src="../assets/images/home/ac_icon02.png" alt="">
              <span class="activity-title">
                活动
              </span>
            </a>
          </li>
          <li class="ac-box">
            <a href="javascript:alert(1)">
              <img class="activity-icons" src="../assets/images/home/ac_icon03.png" alt="">
              <span class="activity-title">
                购物车
              </span>
            </a>
          </li>
          <li class="ac-box">
            <a v-link="{ name: 'user_center' }">
              <img class="activity-icons" src="../assets/images/home/ac_icon04.png" alt="">
              <span class="activity-title">
                个人中心
              </span>
            </a>
          </li>
        </ul>
      </div>

      <!-- 热门专区 -->
      <div class="content-padded">
        热门专区
      </div>
      <div class="boxes-wrapper">
        <ul class="activities">
          <li class="ac-box">
            <a href="javascript:alert(2)">
              <img class="activity-icons" src="../assets/images/home/hot_icon01.png" alt="">
              <span class="activity-title">
                积分区
              </span>
            </a>
          </li>
          <li class="ac-box">
            <a href="javascript:alert(2)">
              <img class="activity-icons" src="../assets/images/home/hot_icon02.png" alt="">
              <span class="activity-title">
                现金区
              </span>
            </a>
          </li>
          <li class="ac-box">
            <a href="javascript:alert(2)">
              <img class="activity-icons" src="../assets/images/home/hot_icon03.png" alt="">
              <span class="activity-title">
                折扣区
              </span>
            </a>
          </li>
          <li class="ac-box">
            <a href="javascript:alert(2)">
              <img class="activity-icons" src="../assets/images/home/hot_icon04.png" alt="">
              <span class="activity-title">
                旅游区
              </span>
            </a>
          </li>
        </ul>
      </div>

      <!-- 热门市场 -->
      <div class="content-padded">
        热门市场
      </div>
      <div class="content-padded">
        <!-- 两个一行 -->
        <div class="row row-padding-bottom">
          <div class="col-50 good-box horizontal">
            <a href="">
              <img src="../assets/images/home/goods01.png" alt="" class="good-img">
            </a>
          </div>
          <div class="col-50 good-box horizontal">
            <a href="">
              <img src="../assets/images/home/goods02.png" alt="" class="good-img">
            </a>
          </div>
        </div>
        <!-- 三个一行 -->
        <div class="row row-padding-bottom">
          <div class="col-33 good-box vertical">
            <a href="">
              <img src="../assets/images/home/goods03.png" alt="" class="good-img">
            </a>
          </div>
          <div class="col-33 good-box vertical">
            <a href="">
              <img src="../assets/images/home/goods04.png" alt="" class="good-img">
            </a>
          </div>
          <div class="col-33 good-box vertical">
            <a href="">
              <img src="../assets/images/home/goods05.png" alt="" class="good-img">
            </a>
          </div>
        </div>
        <!-- 两个一行 -->
        <div class="row">
          <div class="col-50 good-box horizontal">
            <a href="">
              <img src="../assets/images/home/goods02.png" alt="" class="good-img">
            </a>
          </div>
          <div class="col-50 good-box horizontal">
            <a href="">
              <img src="../assets/images/home/goods01.png" alt="" class="good-img">
            </a>
          </div>
        </div>
      </div>

      <!-- 一个楼层 START -->
      <!-- 时尚美妆 -->
      <div class="content-padded">
        时尚美妆
      </div>
      <div class="content-padded">
        <div class="row-padding-bottom">
          <div class="good-box long-horizontal">
            <a href="">
              <img src="../assets/images/home/long_img01.png" alt="" class="good-img">
            </a>
          </div>
        </div>
        <!-- 三个一行 -->
        <div class="row">
          <div class="col-33 good-box vertical">
            <a href="">
              <img src="../assets/images/home/goods03.png" alt="" class="good-img">
            </a>
          </div>
          <div class="col-33 good-box vertical">
            <a href="">
              <img src="../assets/images/home/goods04.png" alt="" class="good-img">
            </a>
          </div>
          <div class="col-33 good-box vertical">
            <a href="">
              <img src="../assets/images/home/goods05.png" alt="" class="good-img">
            </a>
          </div>
        </div>
      </div>
      <!-- 一个楼层 END -->

      <!-- 一个楼层 START -->
      <!-- 时尚美妆 -->
      <div class="content-padded">
        时尚美妆
      </div>
      <div class="content-padded">
        <div class="row-padding-bottom">
          <div class="good-box long-horizontal">
            <a href="">
              <img src="../assets/images/home/long_img01.png" alt="" class="good-img">
            </a>
          </div>
        </div>
        <!-- 三个一行 -->
        <div class="row">
          <div class="col-33 good-box vertical">
            <a href="">
              <img src="../assets/images/home/goods03.png" alt="" class="good-img">
            </a>
          </div>
          <div class="col-33 good-box vertical">
            <a href="">
              <img src="../assets/images/home/goods04.png" alt="" class="good-img">
            </a>
          </div>
          <div class="col-33 good-box vertical">
            <a href="">
              <img src="../assets/images/home/goods05.png" alt="" class="good-img">
            </a>
          </div>
        </div>
      </div>
      <!-- 一个楼层 END -->

    </div>
  </div>
  <!-- 侧栏 -->
  <div class="panel-overlay"></div>
  <!-- Left Panel with Reveal effect -->
  <div class="panel panel-left panel-reveal" id="index_side">
    <div class="content-block">
      <div class="avatar-wrapper">
        <img src="../assets/images/side/user_avatar.png" alt="" class="avatar">
        <span class="avatar-name">15500000000</span>
      </div>
    </div>
    <div class="menu-wrapper">
      <ul class="menu-list">
        <li>
          <a href="">
            <i class="middle-icon menu-home"></i>
            <span class="menu-item-txt">
              商城首页
            </span>
          </a>
        </li>
        <li>
          <a href="">
            <i class="middle-icon menu-ctgr"></i>
            <span class="menu-item-txt">
              商品分类
            </span>
          </a>
        </li>
        <li>
          <a v-link="{ path: '/cart' }">
            <i class="middle-icon menu-cart"></i>
            <span class="menu-item-txt">
              购物车
            </span>
          </a>
        </li>
        <li>
          <a v-link="{ path: '/user_center' }">
            <i class="middle-icon menu-center"></i>
            <span class="menu-item-txt">
              个人中心
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>
<script>
  import titleHeader from '../components/header.vue'
  import $ from 'zepto'
  export default {
    data () {
      return {
        title: '商城',
        search: true
      }
    },
    components: {
      titleHeader
    },
    ready () {
      // 默认打开侧边栏
      // $.openPanel('#index_side')
      // router.go({
      //   name: 'user_center'
      // })
      // 幻灯片设置
      $('.swiper-container-c').swiper({
        autoplay: 2000,
        loop: true,
        speed: 400,
        spaceBetween: 100,
        pagination: '.swiper-pagination'
      })
    },
    route: {
      deactivate (transition) { // 激活阶段，当一个组件被禁用和移除之时被调用
        // 移除body元素上的class属性，防止影响后续页面
        // $('body').removeAttr('class')
        $.closePanel()
        transition.next()
      }
    }
  }
</script>
<style lang="less" scoped>
  @side-width: 10rem;
  body.with-panel-left-reveal .panel-overlay {
    margin-left: @side-width;
  }
  body.with-panel-left-reveal .page {
    -webkit-transform: translate3d(@side-width, 0, 0);
    transform: translate3d(@side-width, 0, 0);
  }
  .panel {
    width: @side-width;
    background: url(../assets/images/side/side_bg.png);
    background-size: 100% 100%;
  }
  .avatar-wrapper {
    width: 100%;
    height: 3rem;
    text-align: center;
    margin-top: 1.2rem;
    img.avatar {
      width: 3rem;
    }
    .avatar-name {
      color: white;

      width: 100%;
      text-align: center;
      line-height: 3rem;
      display: block;
    }
  }
  .menu-wrapper {
    position: relative;
    top: 0;
    margin: 0;
  }
  .middle-icon {
    @w: 1.2rem;
    position: relative;
    top: -.1rem;
    width: @w;
    height: @w;
    display: inline-block;
    vertical-align: text-top;
  }
  .menu-list {
    width: 100%;
    overflow: hidden;
    padding-left: 2.4rem;
    background: transparent;
    li {
      float: left;

      width: 100%;
      margin-top: 2rem;
      .menu-home {
        background: url(../assets/images/side/home_icon.png);
        background-size: 100% 100%;
      }
      .menu-ctgr {
        background: url(../assets/images/side/ctgr_icon.png);
        background-size: 100% 100%;
      }
      .menu-cart {
        background: url(../assets/images/side/cart_icon.png);
        background-size: 100% 100%;
      }
      .menu-center {
        background: url(../assets/images/side/center_icon.png);
        background-size: 100% 100%;
      }
      .menu-item-txt {
        padding-left: .6rem;
        color: rgba(255, 255, 255, 0.9);
      }
    }
  }

  .swiper-container {
    padding-bottom: 0;
  }
  .swiper-slide {
    &>img {
      width: 100%;
    }
  }
  .swiper-container-horizontal {
    &>.swiper-pagination {
      bottom: 0rem;
    }
  }
  .bd-txt {
    font-size: .7rem;
    white-space: nowrap;

    width: 14rem;
    padding-left: .4rem;

    display: inline-block;
    overflow: hidden;
  }
</style>
<style lang="less">
  @import url('../assets/less/transition.less');
  @font-size: .7rem;
  @border-radius: .24rem;
  @border-col: rgb(230, 230, 230);
  .content-padded {
    font-size: .7rem;
    line-height: 1rem;
  }
  .little-icon {
    position: relative;
    top: -.2rem;
    width: @font-size;
    height: @font-size;
    display: inline-block;
    vertical-align: text-top;
  }
  .l-icon-broadcast {
    background: url("../assets/images/home/ico_rolling_ad.png");
    background-size: @font-size @font-size;
  }
  .boxes-wrapper {
    overflow: hidden;
  }
  .activities {
    @box-w: 3.6rem;
    @mg-left: (16 - @box-w * 4) / 5;
    width: 100%;
    // margin-left: -@mg-left;
    overflow: hidden;
    .ac-box {
      float: left;

      width: @box-w;
      height: @box-w;
      margin-left: @mg-left;
      border: 1px solid @border-col;
      border-radius: @border-radius;
      &>a {
        display: block;
        width: 100%;
        height: 100%;
      }
      .activity-icons {
        @i-width: 2.6rem;
        width: @i-width;
        margin: 0 (@box-w - @i-width)/2;
      }
      .activity-title {
        text-align: center;
        line-height: 1rem;
        font-size: .7rem;
        color: rgb(130, 130, 130);

        width: 100%;
        display: block;
      }
    }
  }
  .good-box {
    border: 1px solid @border-col;
    border-radius: @border-radius;
    img.good-img {
      width: 100%;
      height: 100%;
    }
  }
  .good-box.horizontal {
    height: 3.4rem;
  }
  .good-box.vertical {
    height: 5.2rem;
  }
  .good-box.long-horizontal {
    height: 4rem;
  }
  .row-padding-bottom {
    padding-bottom: .4rem;
  }
</style>
