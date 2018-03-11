<template>
  <div class="bp-user">
    <header-Vue></header-Vue>
    <div class="user-info">
      <img src="../../static/img/user.jpg" alt="">
      <span>
        <p>演得太逼真</p>
        <p>已绑定手机</p>
      </span>
      <p>
        我的积分：600美币
      </p>
    </div>
    <div class="order-type">
      <div class="title clearfix">
        <span>我的订单</span>
        <a class="f_right">查看全部<i class="mui-icon mui-icon-arrowright"></i></a>
      </div>
      <ul>
        <li>
          <a href="javascript:void(0)">
            <img src="../../static/img/order_pay.png" alt="">
            <div class="bp-active">待付款</div>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <img src="../../static/img/order_send.png" alt="">
            <div>待发货</div>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <img src="../../static/img/order_receive.png" alt="">
            <div>待收货</div>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <img src="../../static/img/order_comment.png" alt="">
            <div>待评价</div>
          </a>
        </li>
      </ul>
    </div>

    <ul class="quick-link">
        <li>
          <a class="clearfix" href="javascript:void(0)">
            购物车
            <span  class="f_right"><i class="mui-icon mui-icon-arrowright"></i></span>
          </a>
        </li>
      <li>
        <a class="clearfix" href="javascript:void(0)">
          我的收藏
          <span  class="f_right"><i class="mui-icon mui-icon-arrowright"></i></span>
        </a>
      </li>
    </ul>

    <!-- 九宫格：按钮 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9 bp-grid-1">
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3 bp-grid-item"><a href="#">
        <img src="../../static/img/kaquan.png" alt="">
        <div class="mui-media-body">我的卡券</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3 bp-grid-item"><a href="#">
        <img src="../../static/img/location.png" alt="">
        <div class="mui-media-body">收货地址</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3 bp-grid-item"><a href="#">
        <img src="../../static/img/contact.png" alt="">
        <div class="mui-media-body">联系客服</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3 bp-grid-item"><a href="#">
        <img src="../../static/img/fallback.png" alt="">
        <div class="mui-media-body">意见反馈</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3 bp-grid-item"><a href="#">
        <img src="../../static/img/aboutus.png" alt="">
        <div class="mui-media-body">关于我们</div>
      </a></li>
    </ul>

  </div>
</template>

<script>
  export default {
    data(){
      return {

      }
    }
  }
</script>

<style scoped>
  /*个人信息部分*/
  .user-info{
    width: 100%;
    height: 140px;
    background-image: url("../../static/img/user_bg.png");
    background-size: 100% 100%;
    position: relative;
  }

  .user-info > p{
    position: absolute;
    right: 15px;
    bottom: 0px;
    color: white;
  }

  .user-info > img{
    width: 100px;
    border-radius: 50%;

    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
  }

  .user-info > span{
    position: absolute;
    left: 140px;
    top: 50%;
    transform: translateY(-50%);
  }

  .user-info > span > p{
    color: white;
    font-size: 14px;
  }

  /*订单部分*/
  .order-type{
    height: 120px;
  }
  .order-type > .title{
    height: 40px;
    line-height: 40px;
    border-bottom: solid 1px #eeeeee;
    font-size: 16px;
    color: #333;
  }
  .order-type > .title > span{
    margin-left: 15px;
  }

  .order-type > .title > a{
    margin-right: 15px;
    color: #999;
  }
  .order-type > .title > a i{
    font-size: 18px;
  }



  .order-type > ul{
    width: 100%;
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: solid 1px #eeeeee;
  }

  .order-type > ul > li{
    width: 24%;
    display: inline-block;
    text-align: center;
  }

  .order-type > ul > li img{
    width: 50%;
  }

  /*快速链接*/
  .quick-link{
    margin-top: 10px;
  }

  .quick-link li{
    padding-left: 15px;
    padding-right: 15px;
    color: #333333;
    font-size: 16px;
    height: 44px;
    line-height: 44px;
    border-bottom: solid 1px #eeeeee;
  }
  .quick-link li i{
    font-size: 18px;
    color: #999;
  }

  /*九宫格*/
  .bp-grid-1 {
    background: white;
  }

  .bp-grid-1 > .bp-grid-item {
    padding: 6px;
    border: none;
  }

  .bp-grid-1 > li > a > img {
    width: 50%;
    height: 50%;
  }
  .bp-grid-1 > li.bp-grid-item > a > div.mui-media-body {
    font-size: 14px;
  }
</style>
