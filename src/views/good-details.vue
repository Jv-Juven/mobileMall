<template>
  <div class="page page-current">
    <title-header title-text="商品详情">
      <a href="javascript:history.go(-1)" class="icon icon-left pull-left" slot="left-btn"></a>
    </title-header>
    <div class="content">

      <div class="buttons-tab">
          <a href="#tab1" class="tab-link button">图文详情</a>
          <a href="#tab2" class="tab-link button active">参数</a>
        </div>
        <div class="content-block">
          <div class="tabs">

            <div id="tab1" class="tab">
              <div class="content-block">

                <div class="img-box">
                  <img src="https://img.alicdn.com/imgextra/i3/66801165/TB2R2F1pFXXXXcaXpXXXXXXXXXX_!!66801165.jpg" alt="">
                </div>
                <div class="img-box">
                  <img src="https://img.alicdn.com/imgextra/i3/66801165/TB2TimppFXXXXcvXXXXXXXXXXXX_!!66801165.jpg" alt="">
                </div>
                <div class="img-box">
                  <img src="https://img.alicdn.com/imgextra/i3/66801165/TB2x0hPpFXXXXaiXFXXXXXXXXXX_!!66801165.jpg" alt="">
                </div>
                <div class="img-box">
                  <img src="//img.alicdn.com/bao/uploaded/i3/TB1ODt0KXXXXXXVXpXXXXXXXXXX_!!0-item_pic.jpg_480x480q50.jpg" alt="">
                </div>
                <div class="img-box">
                  <img src="https://img.alicdn.com/imgextra/i3/66801165/TB2R2F1pFXXXXcaXpXXXXXXXXXX_!!66801165.jpg" alt="">
                </div>

              </div>
            </div>
            <div id="tab2" class="tab active">
              <div class="grid-demo">

                <div class="row">
                  <div class="col-50">
                    规格
                  </div>
                </div>
                <div class="specs-wrapper">
                  <div class="row">
                    <div class="col-50 details-title">版本</div>
                    <div class="col-50 details-value">S码</div>
                  </div>
                  <div class="row">
                    <div class="col-50 details-title">颜色</div>
                    <div class="col-50 details-value">卡其色</div>
                  </div>
                  <div class="row">
                    <div class="col-50 details-title">材质</div>
                    <div class="col-50 details-value">纯棉</div>
                  </div>
                  <div class="row">
                    <div class="col-50 details-title">产地</div>
                    <div class="col-50 details-value">中国</div>
                  </div>
                </div>
                

              </div>
            </div>

          </div>
        </div>
      
    </div>

    <div class="bar bar-tab">
      <div class="icon-wrapper fl">
        <a href="javascript:">
          <span class="icon icon-star icon-btn"></span>
          收藏
        </a>
      </div>
      <div class="icon-wrapper fl">
        <a href="javascript:">
          <span class="icon icon-cart icon-btn"></span>
          购物车
        </a>
      </div>

      <p class="fr">
        <a href="#" class="button button-fill button-danger">
          立即购买
        </a>
      </p>
      <p class="fr">
        <a href="#" class="button button-fill button-warning">
          加入购物车
        </a>
      </p>
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
  .content-block {
    margin: 0;
    padding: 0;
  }
  .img-box {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .specs-wrapper {
    width: 100%;
    height: 18rem;
    background: white;
  }
  .col-50 {
    text-align: center;
    line-height: 2rem;
  }
  .details-title {
    color: rgb(170, 170, 170);
  }
  .bar-tab{
    p {
      margin: .5rem .4rem .6rem 0;
      display: inline-block;
      a {
        @h: 1.6rem;
        height: @h;
        line-height: @h;
      }
      .button {
        top: 0;
      }
    }
  }
  .icon-wrapper {
    @w: 2rem;
    text-align: center;
    font-size: .7rem;

    width: @w;
    height: 100%;
    margin-left: .4rem;
    display: inline-block;
    &>a {
      color: #111;
    }
    .icon-btn {
      @font-size: 1.2rem;
      font-size: @font-size;
      margin-top: .2rem;
      padding: 0;
      display: block;
    }
  }
</style>
<style lang="less">
  .fr {
    float: right;
  }
  .fl {
    float: left;
  }
</style>

