<template>
  <div class="page page-current" transition="expand">
    <title-header title-text="个人中心">
      <a id="back_btn" class="icon icon-left pull-left" slot="left-btn"></a>
    </title-header>
    <div class="content">

      <div class="card">
        <div class="card-content">
          <div class="card-content-inner">

            <div class="user-avatar">
              <img src="../assets/images/side/user_avatar.png" alt="" class="avatar-img">
              <span class="avatar-name">昵称：15500000000</span>
              <div class="user-info-wrapper">
                <div class="info-line">
                  <div class="line-title">积分</div>
                  <div class="line-content">2016</div>
                </div>
                <div class="info-line">
                  <div class="line-title">等级</div>
                  <div class="line-content">普通会员</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-content">
           
          <div class="menu-item">
            <img src="../assets/images/common/ico_center_order.png" alt="" class="icon-img">
            <span class="item-text">我的订单</span>
            <span class="icon icon-right pull-right arrow"></span>
          </div>

          <ul class="order-details">
            <li class="details-item">
              <a v-link="">
                <img class="details-icon" src="../assets/images/common/ico_center_all_orders.png" alt="">
                <span class="item-text">
                  全部订单
                </span>
              </a>
            </li>
            <li class="details-item">
              <a v-link="">
                <img class="details-icon" src="../assets/images/common/ico_center_unpaid.png" alt="">
                <span class="item-text">
                  待付款
                </span>
              </a>
            </li>
            <li class="details-item">
              <a v-link="">
                <img class="details-icon" src="../assets/images/common/ico_center_paid.png" alt="">
                <span class="item-text">
                  已付款
                </span>
              </a>
            </li>
            <li class="details-item">
              <a v-link="">
                <img class="details-icon" src="../assets/images/common/ico_center_close.png" alt="">
                <span class="item-text">
                  交易关闭
                </span>
              </a>
            </li>
          </ul>

        </div>
      </div>

      <div class="card">
        <div class="card-content">
           
          <div class="menu-item" v-link="{ path: '/' }">
            <img src="../assets/images/common/ico_center_activity.png" alt="" class="icon-img">
            <span class="item-text">钻卡送豪礼</span>
            <span class="icon icon-right pull-right arrow"></span>
          </div>

        </div>
      </div>

      <div class="card">
        <div class="card-content">
           
          <div class="menu-item">
            <img src="../assets/images/common/ico_center_collection.png" alt="" class="icon-img">
            <span class="item-text">我的收藏</span>
            <span class="icon icon-right pull-right arrow"></span>
            <span class="tab-text">16</span>
          </div>

        </div>
      </div>

      <div class="card">
        <div class="card-content">
           
          <div class="menu-item">
            <img src="../assets/images/common/ico_center_address.png" alt="" class="icon-img">
            <span class="item-text">地址管理</span>
            <span class="icon icon-right pull-right arrow"></span>
          </div>

        </div>
      </div>

      <div class="card">
        <div class="card-content">
           
          <div class="menu-item">
            <img src="../assets/images/common/ico_center_password.png" alt="" class="icon-img">
            <span class="item-text">修改密码</span>
            <span class="icon icon-right pull-right arrow"></span>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import titleHeader from '../components/header'
  // import router from 'vue-router'
  import $ from 'zepto'
  export default {
    ready () {
      $('#back_btn').click(function () {
        window.history.go(-1)
      })
      // $('body').removeAttr('class')
      // router.go({ name: 'home' })
    },
    components: {
      titleHeader
    }
  }
</script>

<style lang="less" scoped>
  @import url(../assets/less/common.less);
  @avatar-height: 3rem;
  .card {
    margin-left: 0;
    margin-right: 0;
    .user-avatar {
      line-height: @avatar-height;
    }
    .avatar-img {
      @w: 3rem;
      position: relative;
      top: (@avatar-height - @w)/2;
      left: 0;
      width: @w;
      height: @w;
      display: inline-block;
      border: none;
    }
    .avatar-name {
      margin-left: .1rem;
    }
    .user-info-wrapper {
      @h: 2.8rem;
      float: right;
      width: 4rem;
      height: @h;
      margin-top: (@avatar-height - @h)/2;
      margin-right: -.5rem;

      background: rgb(255, 255, 255);
      .info-line {
        font-size: .6rem;
        color: @text-col;

        width: 100%;
        line-height: @h/2;
        border-bottom: 1px solid @border-col;

        overflow: hidden;
        .line-title {
          float: left;
        }
        .line-content {
          float: right
        }
      }
    }
    .menu-item {
      @w: 1.6rem;
      width: 100%;
      line-height: @w;
      padding: .4rem .5rem;
      .icon-img {
        width: @w;
        height: @w;
      }
      .item-text {
        padding-left: .3rem;
      }
      .tab-text {
        float: right;

        color: @text-col + 50;

        margin-right: .6rem;
      }
      .arrow {
        color: rgb(180, 180, 180);
        font-size: .8rem;
      }
    }
    .order-details {
      width: 100%;
      border-top: 1px solid @border-col;

      overflow: hidden;
      .details-item {
        float: left;

        width: 3rem;
        height: 3.4rem;
        margin-left: .5rem;
        margin-right: .5rem;
        text-align: center;
      }
      .details-icon {
        @w: 1.4rem;
        width: @w;
        margin-top: .4rem;
      }
      .item-text {
        display: inline-block;
        width: 100%;
        line-height: 1.4rem;
        color: @text-col;
      }
    }
  }
</style>