<template>
  <div class="iconfont icon-back back" v-on:click="back"></div>
</template>

<script>
    export default {
      name:'back',
      methods:{
        back() {
          window.history.back()
        }
      }
    }
</script>

<style scoped>
  .back {
    color: #333;
    padding-right: 1em;
    font-size: 1.4rem;
  }
</style>
