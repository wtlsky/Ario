<template>
  <div class="page">
    <header>
      <back></back>
      <p class="title">今日指数</p>
    </header>
    <div class="content">
      <div class="index" v-for="index in $store.state.indexes">
        <div class="index-content">{{index.content}}</div>
        <div class="index-title">{{index.name}}：{{index.level}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import back from '../components/back.vue'

  export default {
    name: 'indexes',
    components: {
      back: back
    }
  }
</script>

<style scoped>
  header {
    height: 2rem;
    min-height: 2rem;
  }

  .page {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    flex: 1;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    justify-content: space-around;
    align-content: flex-start;
    flex: 1;
  }

  .title {
    flex: 1;
    text-align: center;
    text-indent: -2rem;
  }

  .index {
    width: 300px;
    height: 5rem;
    min-height: 100px;
    padding: 1rem 0;
    position: relative;
    background: #ffffff;
    color: #333333;
    margin: 1rem;
    border-radius: 5px;
  }

  .index-content {
    text-align: left;
    padding: 0 1rem;
    font-size: 0.9rem;
    line-height: 2;
  }

  .index-title {
    text-align: left;
    text-indent: 1rem;
    position: absolute;
    bottom: 1rem;
    color: #fff;
    font-size: 0.9rem;
    padding: 0.3rem 0;
    width: 100%;
    background: rgba(211, 51, 50, 0.8);
  }

</style>
