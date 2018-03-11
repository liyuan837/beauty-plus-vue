<template>

    <div class="bp-sellersay">

        <ul>
            <li>
                <div class="header">
                    <span>
                        <img src="../../../static/img/seller.png" alt="">
                    </span>
                    <span>
                        <p>A东方-E Shine美鞋店</p>
                        <small>5分钟前</small>
                    </span>
                    <span><a href="javascript:void(0)">关注</a></span>
                </div>
                <p class="content mui-ellipsis2">
                    店铺上新喽，新进一批韩货，爱美的靓女们欢迎进来看看呢！
                </p>
                <div class="img-box">
                    <img src="../../../static/img/sellersay1.png" alt="">
                    <img src="../../../static/img/sellersay2.png" alt="">
                    <img src="../../../static/img/sellersay1.png" alt="">
                    <img src="../../../static/img/sellersay2.png" alt="">
                    <img src="../../../static/img/sellersay1.png" alt="">
                    <img src="../../../static/img/sellersay2.png" alt="">
                </div>
            </li>
            <li>
                <div class="header">
                    <span>
                        <img src="../../../static/img/seller.png" alt="">
                    </span>
                    <span>
                        <p>A东方-E Shine美鞋店</p>
                        <small>5分钟前</small>
                    </span>
                    <span><a href="javascript:void(0)">关注</a></span>
                </div>
                <p class="content mui-ellipsis2">
                    店铺上新喽，新进一批韩货，爱美的靓女们欢迎进来看看呢！
                </p>
                <div class="img-box">
                    <img src="../../../static/img/sellersay1.png" alt="">
                    <img src="../../../static/img/sellersay2.png" alt="">
                    <img src="../../../static/img/sellersay1.png" alt="">
                    <img src="../../../static/img/sellersay2.png" alt="">
                    <img src="../../../static/img/sellersay1.png" alt="">
                    <img src="../../../static/img/sellersay2.png" alt="">
                </div>
            </li>
            <li>
                <div class="header">
                    <span>
                        <img src="../../../static/img/seller.png" alt="">
                    </span>
                    <span>
                        <p>A东方-E Shine美鞋店</p>
                        <small>5分钟前</small>
                    </span>
                    <span><a href="javascript:void(0)">关注</a></span>
                </div>
                <p class="content mui-ellipsis2">
                    店铺上新喽，新进一批韩货，爱美的靓女们欢迎进来看看呢！
                </p>
                <div class="img-box">
                    <img src="../../../static/img/sellersay1.png" alt="">
                    <img src="../../../static/img/sellersay2.png" alt="">
                    <img src="../../../static/img/sellersay1.png" alt="">
                    <img src="../../../static/img/sellersay2.png" alt="">
                    <img src="../../../static/img/sellersay1.png" alt="">
                    <img src="../../../static/img/sellersay2.png" alt="">
                </div>
            </li>


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
    .bp-sellersay{
        padding-top: 44px;
    }
    ul{
        margin-top: 2px;
        background:white;
    }
    ul li{
        padding: 15px;
        border-bottom: solid 1px #cccccc;
    }

    li div.header{
        position: relative;
    }

    li div.header > span{
        display: inline-block;
        width: 20%;
        height: 100%;
        vertical-align: middle;
    }
    li div.header > span:nth-of-type(2){
        width: 40%;
    }

    li div.header > span:nth-of-type(2) > p {
        color:#ec971f;
        font-size: 16px;
    }

    li div.header > span:nth-of-type(2) > small{
        color:#999;
    }

    li div.header > span:nth-of-type(3) > a{
        position: absolute;
        width: 80px;
        height: 34px;
        line-height: 34px;
        border: solid 2px #FF1CAE;
        color: #FF1CAE;
        border-radius: 8px;
        text-align: center;
        right: 0px;
        top: 50%;
        transform: translateY(-50%);
    }

    li div.header > span > img{
        width: 100%;
        border-radius: 50%;
    }

    li > p.content{
        color: #333333;
    }

    li > .img-box > {
        text-align: center;
    }
    li > .img-box > img{
        display: inline-block;
        width:32%;
    }

</style>