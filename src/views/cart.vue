<template>

<div class="page page-current" transition="expand">

  <title-header title-text="购物车">
    <a id="back_btn" class="icon icon-left pull-left" slot="left-btn"></a>
  </title-header>

  <div class="content">
    <div class="list-block cards-list">
      <ul>

        <li class="card">
          <div class="card-header">
            <span>
              店铺名称：<span class="shop-name">勤协贸易</span>
            </span>
            <span class="icon icon-remove pull-right remove"></span>
          </div>
          <div class="card-content">
            <div class="card-content-inner">
              <div class="sel-tag">
                <div class="circle checked"></div>
              </div>
              <img src="../assets/images/common/pic.jpg" alt="" class="goods-img">
              <div class="goods-info-wrapper">
                <div class="goods-title">
                  茵曼2015秋装新款纯色长袖风衣外套
                </div>
                <div class="goods-title goods-subtitle">
                  颜色：卡其色 <span class="size">尺寸：S</span> 
                </div>
                <div class="num-wrapper">
                  <span class="op-btn minus" @click="minus">-</span>
                  <input class="num-input" type="num" :value="count">
                  <span class="op-btn plus" @click="plus">+</span>
                </div>
                <span class="total-money">399积分</span>
              </div>
            </div>
          </div>
        </li>
        <li class="card">
          <div class="card-header">
            <span>
              店铺名称：<span class="shop-name">勤协贸易</span>
            </span>
            <span class="icon icon-remove pull-right remove"></span>
          </div>
          <div class="card-content">
            <div class="card-content-inner">
              <div class="sel-tag">
                <div class="circle checked"></div>
              </div>
              <img src="../assets/images/common/pic.jpg" alt="" class="goods-img">
              <div class="goods-info-wrapper">
                <div class="goods-title">
                  茵曼2015秋装新款纯色长袖风衣外套
                </div>
                <div class="goods-title goods-subtitle">
                  颜色：卡其色 <span class="size">尺寸：S</span> 
                </div>
                <div class="num-wrapper">
                  <span class="op-btn minus">-</span>
                  <input class="num-input" type="num" value="1">
                  <span class="op-btn plus">+</span>
                </div>
                <span class="total-money">399积分</span>
              </div>
            </div>
          </div>
        </li>
        <li class="card">
          <div class="card-header">
            <span>
              店铺名称：<span class="shop-name">勤协贸易</span>
            </span>
            <span class="icon icon-remove pull-right remove"></span>
          </div>
          <div class="card-content">
            <div class="card-content-inner">
              <div class="sel-tag">
                <div class="circle checked"></div>
              </div>
              <img src="../assets/images/common/pic.jpg" alt="" class="goods-img">
              <div class="goods-info-wrapper">
                <div class="goods-title">
                  茵曼2015秋装新款纯色长袖风衣外套
                </div>
                <div class="goods-title goods-subtitle">
                  颜色：卡其色 <span class="size">尺寸：S</span> 
                </div>
                <div class="num-wrapper">
                  <span class="op-btn minus">-</span>
                  <input class="num-input" type="num" value="1">
                  <span class="op-btn plus">+</span>
                </div>
                <span class="total-money">399积分</span>
              </div>
            </div>
          </div>
        </li>
        <li class="card">
          <div class="card-header">
            <span>
              店铺名称：<span class="shop-name">勤协贸易</span>
            </span>
            <span class="icon icon-remove pull-right remove"></span>
          </div>
          <div class="card-content">
            <div class="card-content-inner">
              <div class="sel-tag">
                <div class="circle"></div>
              </div>
              <img src="../assets/images/common/pic.jpg" alt="" class="goods-img">
              <div class="goods-info-wrapper">
                <div class="goods-title">
                  茵曼2015秋装新款纯色长袖风衣外套
                </div>
                <div class="goods-title goods-subtitle">
                  颜色：卡其色 <span class="size">尺寸：S</span> 
                </div>
                <div class="num-wrapper">
                  <span class="op-btn minus">-</span>
                  <input class="num-input" type="num" value="1">
                  <span class="op-btn plus">+</span>
                </div>
                <span class="total-money">399积分</span>
              </div>
            </div>
          </div>
        </li>
        <li class="card">
          <div class="card-header">
            <span>
              店铺名称：<span class="shop-name">勤协贸易</span>
            </span>
            <span class="icon icon-remove pull-right remove"></span>
          </div>
          <div class="card-content">
            <div class="card-content-inner">
              <div class="sel-tag">
                <div class="circle checked"></div>
              </div>
              <img src="../assets/images/common/pic.jpg" alt="" class="goods-img">
              <div class="goods-info-wrapper">
                <div class="goods-title">
                  茵曼2015秋装新款纯色长袖风衣外套
                </div>
                <div class="goods-title goods-subtitle">
                  颜色：卡其色 <span class="size">尺寸：S</span> 
                </div>
                <div class="num-wrapper">
                  <span class="op-btn minus">-</span>
                  <input class="num-input" type="num" value="1">
                  <span class="op-btn plus">+</span>
                </div>
                <span class="total-money">399积分</span>
              </div>
            </div>
          </div>
        </li>

      </ul>
    </div>
  </div>

  <div class="bar bar-tab account-bar">
    <div class="circle checked"></div>
    <label class="all-sel">
      全选
    </label>
    <div class="total-span">
      合计：<span class="red-txt">399积分</span>
    </div>
    <p class="go-acc-btn">
      <a href="#" class="button button-danger">
        去结算
      </a>
    </p>
  </div>
    
</div>
  
</template>
<script>
  import titleHeader from '../components/header'
  import store from '../vuex/store'
  import { plus, minus } from '../vuex/actions'
  import { count } from '../vuex/getter'
  import $ from 'zepto'
  export default {
    store,
    vuex: {
      getters: {
        count: count
      },
      actions: {
        plus,
        minus
      }
    },
    components: {
      titleHeader
    },
    ready () {
      $('#back_btn').click(function () {
        window.history.go(-1)
      })
    }
  }
</script>
<style lang="less">
  .card {
    margin-right: 0;
    margin-left: 0;
  }
</style>
<style lang="less" scoped>
  @import url(../assets/less/common.less);
  @cart-grey: rgb(225, 225, 225);
  @circle-w: .9rem;
  .list-block {
    margin-top: 0;
    margin-bottom: 6rem;
  }
  .shop-name {
    color: #f27e26;
  }

  .circle {
    position: relative;
    width: @circle-w;
    height: @circle-w;
    display: block;

    background: url(../assets/images/common/pic_car_unselect.png);
    background-size: 100% 100%;
  }
  .checked {
    background: url(../assets/images/common/pic_car_select.png);
    background-size: 100% 100%;
  }
  
  .card-content {
    @good-w: 4rem;
    @left-space: 1rem;
    .card-content-inner {
      overflow: hidden;
    }
    .remove {
      color: rgb(160, 160, 160);
    }
    .sel-tag {
      width: @left-space;
      height: @good-w;
      float: left;
      .circle {
        top: (@good-w - @circle-w)/2;
        
        margin-left: -.4rem;
      }
    }
    .goods-img {
      float: left;

      width: @good-w;
      height: @good-w;
    }
    .goods-info-wrapper {
      float: left;
      width: 14 - @good-w - @left-space;
      height: @good-w;
      margin-left: .5rem;
      .goods-title {
        font-size: .7rem;
        white-space: nowrap;
        text-overflow: ellipsis;

        overflow: hidden;
      }
      .goods-subtitle {
        font-size: .6rem;
        color: rgb(200, 200, 200);

        line-height: 1.4rem;
        .size {
          padding: 0 .7rem;
        }
      }
      .num-wrapper {
        @line-height: 1.4rem;
        @wrapper-w: 4.8rem;
        float: left;

        width: @wrapper-w;
        height: @line-height;
        // padding: 1px;
        box-sizing: content-box;
        border: 1px solid @cart-grey;
        border-radius: 4px;
        overflow: hidden;
        .op-btn {
          text-align: center;
          color: @cart-grey - 100;
          font-size: 1.2rem;
          // font-weight: 600;

          width: @line-height;
          height: @line-height;
          line-height: @line-height - .3;
          background: @cart-grey + 80;
          display: inline-block;
        }
        &>span.minus {
          float: left;

          border-right: 1px solid @cart-grey;
        }
        .num-input {
          width: @wrapper-w - @line-height * 2;
          padding: 0;
          border: none;
          line-height: @line-height;
          text-align: center;
        }
        &>span.plus {
          float: right;

          border-left: 1px solid @cart-grey;
        }
      }
      .total-money {
        float: right;

        line-height: 1.4rem;
        color: @font-red;
      }
    }
  }
  .account-bar {
    @height: 2rem;
    z-index: 15;

    height: @height;
    line-height: @height;
    padding: .3rem 0;

    box-sizing: content-box;
    box-shadow: 0 -1px 10px @cart-grey;
    background: white;
    .circle {
      float: left;

      top: .6rem;
      margin-left: .2rem;
    }
    label.all-sel {
      font-size: .75rem;
      padding: 0 .3rem;
      color: rgb(160, 160, 160);
    }
    div.total-span {
      display: inline-block;
      font-size: .8rem;
      padding: 0 .3rem;
      .red-txt {
        color: @font-red;
      }
    }
    .go-acc-btn {
      float: right;
      margin: 0;
      margin-right: .3rem;

      box-sizing: content-box;
      
      &>a {
        color: white;
        font-size: .8rem;

        line-height: 1.3rem;
        padding: 0rem 1.2rem;

        background: @font-red;
        border-color: @font-red;
        box-sizing: content-box;
      }
    }
  }
</style>
