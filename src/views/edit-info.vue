<template>
  <div class="page page-current" transition="expand">
    <title-header title-text="编辑管理地址">
      <a class="icon icon-left pull-left" href="javascript:window.history.go(-1)" slot="left-btn"></a>
    </title-header>
    <div class="content">
      <div class="list-block">
        <ul>
          <!-- Text inputs -->
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-name"></i></div>
              <div class="item-inner">
                <div class="item-title label">收货人：</div>
                <div class="item-input">
                  <input type="text" placeholder="收货人姓名">
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-email"></i></div>
              <div class="item-inner">
                <div class="item-title label">手机号码：</div>
                <div class="item-input">
                  <input type="text" placeholder="手机号码">
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-password"></i></div>
              <div class="item-inner">
                <div class="item-title label">电话号码：</div>
                <div class="item-input">
                  <input type="text" placeholder="电话号码" class="">
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-gender"></i></div>
              <div class="item-inner">
                <div class="item-title label">所在地区：</div>
                <div class="item-input">
                  <input type="text" id="city_picker" value="广东 广州 天河区">
                </div>
              </div>
            </div>
          </li>
          <li class="align-top">
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-comment"></i></div>
              <div class="item-inner">
                <div class="item-title label">详细地址：</div>
                <div class="item-input">
                  <textarea placeholder="详细地址"></textarea>
                </div>
              </div>
            </div>
          </li>
          <li class="align-top">
            <div class="item-content">
              <div class="item-media"><i class="icon icon-form-comment"></i></div>
              <div class="item-inner">
                <set-default></set-default>
              </div>
            </div>
          </li>
        </ul>
        
        <bottom-btn btn-text="保存" path="{ path: '/' }"></bottom-btn>

      </div>
  </div>
</template>
<script>
  import titleHeader from '../components/header'
  import setDefault from '../components/set-default'
  import bottomBtn from '../components/bottom-btn'
  import $ from 'zepto'
  export default {
    components: {
      titleHeader,
      setDefault,
      bottomBtn
    },
    ready () {
      let tpl = '<header class="bar bar-nav"><button class="button button-link pull-right close-picker">确定</button><h1 class="title">选择收货地址</h1></header>'
      $('#city_picker').cityPicker({
        toolbarTemplate: tpl
      })
    }
  }
</script>
<style lang="less" scoped>
  @import url(../assets/less/common.less);
  @info-grey: rgb(120, 120, 120);
  .list-block {
    margin-top: 0;
  }
  .list-block .item-content {
    padding-left: 0;
  }
  .list-block .item-media + .item-inner {
    margin-left: 0;
    padding-left: 0.75rem;
  }
  .list-block .item-title.label {
    color: @info-grey;
  }
  .circle {
    top: .1rem;
    display: inline-block!important;
  }
  .set-default-txt {
    color: @info-grey;
  }
  .footer-bar {
    .fix-bottom();
    width: 14rem;
    left: 1rem;
    a {
      @h: 2rem;
      font-size: .8rem;
      height: @h;
      line-height: @h;
    }
  }
</style>
