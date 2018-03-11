<template>
  <div class="bp-cart">
    <header-Vue></header-Vue>
    <div class="cart_empty">
      <img src="../../static/img/cart_empty.png" alt="">
      <p>您的购物车好像还没有商品哦~</p>
    </div>
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
  .bp-cart{
    background: #fff;
  }

  .cart_empty{
    text-align: center;
    padding-bottom: 20px;
  }

  .cart_empty > img{
    margin-top: 20px;
    width: 40%;
  }

  .cart_empty > p{
    color: #999;
    font-size: 16px;
  }
</style>
