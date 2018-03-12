<template>
    <div class="bp-buyshow">
        <ul>
            <li>
                <div class="header">
                    <span>
                        <img src="../../../static/img/user.jpg" alt="">
                    </span>
                    <span>
                        <p>演得太逼真</p>
                        <small>5分钟前</small>
                    </span>
                    <span><router-link href="javascript:void(0)" :to="{name:'login',params:{'title':'登录'}}">关注</router-link></span>
                </div>
                <p class="content mui-ellipsis2">
                    商铺老板说，6月14号才发货，哈哈想不到那么快收到，爱上美+，质量很好，版型也特别喜欢
                </p>
                <img src="../../../static/img/buyershow.png" alt="">
            </li>

            <li>
                <div class="header">
                    <span>
                        <img src="../../../static/img/user.jpg" alt="">
                    </span>
                    <span>
                        <p>演得太逼真</p>
                        <small>5分钟前</small>
                    </span>
                    <span><a href="javascript:void(0)">关注</a></span>
                </div>
                <p class="content mui-ellipsis2">
                    商铺老板说，6月14号才发货，哈哈想不到那么快收到，爱上美+，质量很好，版型也特别喜欢
                </p>
                <img src="../../../static/img/buyershow.png" alt="">
            </li>

            <li>
                <div class="header">
                    <span>
                        <img src="../../../static/img/user.jpg" alt="">
                    </span>
                    <span>
                        <p>演得太逼真</p>
                        <small>5分钟前</small>
                    </span>
                    <span><a href="javascript:void(0)">关注</a></span>
                </div>
                <p class="content mui-ellipsis2">
                    商铺老板说，6月14号才发货，哈哈想不到那么快收到，爱上美+，质量很好，版型也特别喜欢
                </p>
                <img src="../../../static/img/buyershow.png" alt="">
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
    .bp-buyshow{
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
        color:#007aff;
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

    li > img{
        width:100%;
    }
</style>