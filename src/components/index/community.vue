<template>
    <div class="bp-community">

        <header id="header" class="mui-bar bp-header">
            <a class="bp-a bp-active" data-url="home_community_buyershow" href="javascript:void(0)"
               @click="jump">买家秀</a>
            <a class="bp-a" data-url="home_community_sellersay" href="javascript:void(0)" @click="jump">商家说</a>
            <a class="bp-a" data-url="home_community_fork" href="javascript:void(0)" @click="jump">关注</a>

            <a class="mui-icon mui-icon-compose mui-pull-right"></a>
        </header>

        <router-view></router-view>

    </div>
</template>

<script>

    // import mui from '../../static/vendor/mui/js/mui.min'
    // import '../../static/vendor/mui/js/mui.previewimage'
    export default {
        data() {
            return {}
        },
        methods: {
            jump: function (e) {
                // document.getElementsByClassName('bp-a')[0].remove('bp-active')
                $(".bp-a").removeClass('bp-active')
                e.target.classList.add('bp-active')
                console.log($('.bp-active').data('url'))

                this.$router.push({name: $('.bp-active').data('url')})

            }
        }
    }
</script>

<style scoped>
    .bp-header {
        background: white;
        line-height: 44px;
        text-align: center;
    }

    .bp-header > a.bp-a {
        display: inline-block;
        width: 25%;
        color: #666;
        font-size: 16px;
    }
    .bp-header > a.bp-active {
        color: #D4237A;
    }
    .bp-header > a.mui-icon {
        position: absolute;
        right: 10px;
        top: -5px;
        color: #333333;
        font-size: 30px;
    }


</style>
