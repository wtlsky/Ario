<template>
  <div id="app">
    <transition mode="out-in" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import realTime from './components/RealTime.vue'
  import simpleWeather from './components/SimpleWeather.vue'
  import search from './components/Search.vue'

  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: rgba(44, 62, 80, 0.44);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  header {
    padding:0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    color: #333;
    align-items: center;
    background: rgba(255, 255, 255, 0.8);
  }
</style>
