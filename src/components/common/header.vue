<template>
  <div>
    <header class="mint-header bp-header"><h1 class="mint-header-title">{{title}}</h1></header>
  </div>
</template>

<script>
  export default {
      data(){
          return {
              title:'标题'
          }
      },
      created:function(){
          this.title = this.$route.params.title
      }
  }
</script>

<style scoped>
  .bp-header{
    background:#FF1CAE;
    color: white;
    font-size: 16px;
    border-bottom: solid 1px white;
  }
</style>
