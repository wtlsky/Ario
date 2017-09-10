<template>
  <div class="page">
    <header>
      <router-link to="/indexes" class="iconfont icon-yundong"></router-link>
      <router-link to="/search" class="search">地区搜索</router-link>
      <div class="iconfont icon-skin icon" v-on:click="changeBackground"></div>
    </header>
    <div class="content">
      <realTime :city="this.$store.state.city" :provinceName="this.$store.state.province"></realTime>
      <simple-weather></simple-weather>
    </div>
  </div>
</template>

<script>
  import realTime from '../components/RealTime.vue'
  import simpleWeather from '../components/SimpleWeather.vue'

  export default {
    name: 'index',
    data() {
      return {
        backgroundIndex: 1,
        background: [
          '../static/images/c.jpg',
          '../static/images/d.jpg',
          '../static/images/e.jpg',
          '../static/images/f.jpg',
          '../static/images/g.jpg',
          '../static/images/a.jpg'
        ]
      }
    },
    methods: {
      changeBackground() {
        if (this.backgroundIndex >= this.background.length) this.backgroundIndex = 0
        document.body.style.backgroundImage = 'url(' + this.background[this.backgroundIndex++] + ')'
      }
    },
    components: {
      realTime: realTime,
      simpleWeather: simpleWeather
    }
  }
</script>

<style scoped>
  .page {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .icon-yundong {
    margin-right: 1em;
    font-size: 1.4rem;
  }

  @media screen and (min-width: 720px) {
    .content {
      flex-direction: row;
      align-items: center;
      padding: 0 2em 0 0;
    }
  }

  header {
    background: transparent;
    padding: .5rem 1rem;
  }

  a{
    text-decoration: none;
    color: #fff;
  }

  .search {
    width: 100%;
    text-align: left;
    border-radius: 40px;
    background: rgba(255, 255, 255, .2);
    text-indent: 1rem;
    padding: .5rem 0;
  }

  .icon {
    color: #fff;
    font-size: 1.4rem;
    margin-left: 1rem;
  }
</style>
