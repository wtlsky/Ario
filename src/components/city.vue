<template>
  <li :city="city" v-on:click="weather">{{city.countyname}}</li>
</template>

<script>
  export default {
    name: 'city',
    props: ['city'],
    methods: {
      weather() {
        this.$store.dispatch('getWeather', this.city.areaid);
        localStorage.setItem('cityId',this.city.areaid);
        window.history.back()
      }
    }
  }
</script>

<style scoped>
  li {
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, .4);
    border-radius: 15px 0 15px 0;
    color: #333;
    margin-bottom: 1rem;
  }
</style>
