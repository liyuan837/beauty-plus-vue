<template>
  <div>
      <router-view></router-view>

      <nav class="mui-bar mui-bar-tab">
          <router-link class="mui-tab-item" :to="{name:'home_main'}">
              <span class="mui-icon icon-home"></span>
              <span class="mui-tab-label">首页</span>
          </router-link>
          <router-link class="mui-tab-item" :to="{name:'home_collect',params:{title:'收藏'}}">
              <span class="mui-icon icon-collect"></span>
              <span class="mui-tab-label">收藏</span>
          </router-link>
          <router-link class="mui-tab-item" :to="{name:'home_community_buyershow'}">
              <span class="mui-icon icon-community"><span class="mui-badge">8</span></span>
              <span class="mui-tab-label">美社</span>
          </router-link>
          <router-link class="mui-tab-item" :to="{name:'home_cart',params:{title:'购物车'}}">
              <span class="mui-icon icon-cart"></span>
              <span class="mui-tab-label">购物车</span>
          </router-link>
          <router-link class="mui-tab-item" :to="{name:'home_user',params:{title:'个人中心'}}">
              <span class="mui-icon icon-user"></span>
              <span class="mui-tab-label">我的</span>
          </router-link>
      </nav>
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

</style>
