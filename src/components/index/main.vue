<template>
    <div class="bp-main">
        <header id="header" class="mui-bar mui-bar-transparent bp-header"
                style="background-color: rgba(255, 255, 255, 0.4);">
            <a class="mui-action-back mui-btn mui-btn-blue mui-btn-link mui-btn-nav">
                镇江<span class="mui-icon mui-icon-arrowdown"></span>
            </a>
            <div class="mui-title bp-search-box">
                <i class="fa fa-search"></i>
                <input name="key" id="key" type="search" placeholder="搜索店铺"/>
            </div>
            <i class="mui-icon icon-saoyisao mui-pull-right"></i>
        </header>

        <!--轮播图-->
        <mt-swipe :auto="4000" class="bp-swipe">
            <mt-swipe-item>
                <img src="../../static/img/banner1.png" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../static/img/banner2.png" alt="">
            </mt-swipe-item>
        </mt-swipe>

        <!-- 九宫格：按钮 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9 bp-grid-1">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3 bp-grid-item"><a href="#">
                <img src="../../static/img/classify1.png" alt="">
                <div class="mui-media-body">淑女</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3 bp-grid-item"><a href="#">
                <img src="../../static/img/classify2.png" alt="">
                <div class="mui-media-body">瑞丽</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3 bp-grid-item"><a href="#">
                <img src="../../static/img/classify3.png" alt="">
                <div class="mui-media-body">嘻哈街头</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3 bp-grid-item"><a href="#">
                <img src="../../static/img/classify4.png" alt="">
                <div class="mui-media-body">欧美</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3 bp-grid-item"><a href="#">
                <img src="../../static/img/classify5.png" alt="">
                <div class="mui-media-body">洛丽塔</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3 bp-grid-item"><a href="#">
                <img src="../../static/img/classify6.png" alt="">
                <div class="mui-media-body">OL</div>
            </a></li>
        </ul>

        <!-- 九宫格：活动 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9 bp-grid-2">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3 bp-grid-item"><a href="#">
                <p>五折优惠</p>
                <div>女生节特惠</div>
                <img src="../../static/img/activity.png" alt="">
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3 bp-grid-item"><a href="#">
                <p>五折优惠</p>
                <div>女生节特惠</div>
                <img src="../../static/img/activity.png" alt="">
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3 bp-grid-item"><a href="#">
                <p>五折优惠</p>
                <div>女生节特惠</div>
                <img src="../../static/img/activity.png" alt="">
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3 bp-grid-item"><a href="#">
                <p>五折优惠</p>
                <div>女生节特惠</div>
                <img src="../../static/img/activity.png" alt="">
            </a></li>

        </ul>

        <!--列表：附近商家-->
        <div class="bp-near">
            <p>
                <span><i class="mui-icon icon-dingwei"></i>附近店铺</span>
                <span>更多<i class="mui-icon mui-icon-arrowright"></i></span>
            </p>

            <ul class="mui-table-view">
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;" class="">
                        <img class="mui-media-object mui-pull-left" src="../../static/img/shop_logo.png">
                        <div class="mui-media-body">
                            <p>6度 6Du Shop 女装</p>
                            <p>卖家：<span>演得太逼真</span></p>
                            <p>地址：江苏镇江</p>
                            <p class="mui-ellipsis">主营：新款 韩版 夏季 女 宽松 短袖 女装 连衣裙</p>
                        </div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;" class="">
                        <img class="mui-media-object mui-pull-left" src="../../static/img/shop_logo.png">
                        <div class="mui-media-body">
                            <p>6度 6Du Shop 女装</p>
                            <p>卖家：<span>演得太逼真</span></p>
                            <p>地址：江苏镇江</p>
                            <p class="mui-ellipsis">主营：新款 韩版 夏季 女 宽松 短袖 女装 连衣裙</p>
                        </div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;" class="">
                        <img class="mui-media-object mui-pull-left" src="../../static/img/shop_logo.png">
                        <div class="mui-media-body">
                            <p>6度 6Du Shop 女装</p>
                            <p>卖家：<span>演得太逼真</span></p>
                            <p>地址：江苏镇江</p>
                            <p class="mui-ellipsis">主营：新款 韩版 夏季 女 宽松 短袖 女装 连衣裙</p>
                        </div>
                    </a>
                </li>


            </ul>
        </div>

    </div>
</template>

<script>

    export default {
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .bp-main{
        margin-bottom: 50px;
    }

    .bp-header {
        padding-left: 10px;
    }

    .bp-header > a {
        font-size: 16px;
    }

    .bp-header > a > span {
        font-size: 20px;
    }

    .bp-search-box {
        display: inline-block;
        position: absolute;
        left: 50%;
        width: 50%;
        transform: translateX(-50%);
    }

    .bp-search-box input {
        height: 30px;
        text-align: center;
        background-color: white;
        border-radius: 15px;
    }

    .bp-search-box i {
        position: absolute;
        left: 10px;
        top: 12px;
        color: #666;
    }

    /*轮播图样式*/
    .bp-swipe {
        height: 200px;
        width: 100%;
        background: white;
    }

    .bp-swipe img {
        height: 100%;
        width: 100%;
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

    .bp-grid-2 {
        background: white;
        margin-top: 2px;
    }

    .bp-grid-2 > li > a > img {
        margin-top: 6px;
        width: 70%;
        height: 70%;
    }

    .bp-grid-2 > li > a > p{
         font-weight: bold;
         font-size: 15px;
         color: black;
     }

    .bp-grid-2 > li > a > div{
        font-size: 13px;
        color: orangered;
    }

    /*附近*/
    .bp-near{
        margin-top: 5px;
        background: white;
    }
    .bp-near > p{
        width: 100%;
        height: 36px;
        line-height: 36px;
        text-align: center;
    }

    .bp-near > p >span:nth-of-type(1){
        color:#FF1CAE;
        font-size: 14px;
    }

    .bp-near > p >span:nth-of-type(1) > i{
        font-size: 20px;
        margin-right: 4px;
    }

    .bp-near > p >span:nth-of-type(2){
        position: absolute;
        right: 10px;
        color:#999;
        font-size: 14px;
    }

    .bp-near > p >span:nth-of-type(2) > i{
        font-size: 20px;
        margin-left: 0px;
    }

    .bp-near ul{
        margin-top: -10px;
    }

    .bp-near ul li a p:nth-of-type(1){
        color:#333333;
        font-weight: bold;
    }
    .bp-near ul li a p:nth-of-type(2) {
        color: #333;
    }
    .bp-near ul li a p:nth-of-type(2) > span{
        color: #004eff;
    }
</style>
