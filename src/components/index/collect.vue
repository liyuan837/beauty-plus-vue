<template>
    <div class="bp-collect">
        <header-Vue></header-Vue>
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
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .bp-collect ul {
        padding-top: 10px;
    }

    .bp-collect ul li a p:nth-of-type(1) {
        color: #333333;
        font-weight: bold;
    }

    .bp-collect ul li a p:nth-of-type(2) {
        color: #333;
    }

    .bp-collect ul li a p:nth-of-type(2) > span {
        color: #004eff;
    }
</style>
