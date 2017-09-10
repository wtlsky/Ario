<template>
  <div class="realTime">
    <div class="iconfont icon-location location">
      {{this.$store.state.province + '-' + this.$store.state.city}}
      <router-link to="/alarms" class="iconfont icon-waring alert"
                   v-if="this.$store.state.alarms.length>0"></router-link>
    </div>
    <div class="temp">
      {{this.$store.state.realTime.temp}}
      <span class="iconfont icon-sheshidu icon"></span>
    </div>
    <div class="weather">
      {{this.$store.state.realTime.weather + ' | 空气质量 ' + this.$store.state.pm25.aqi + this.$store.state.pm25.quality}}
    </div>
    <div class="wind">{{this.$store.state.realTime.wD + ' ' + this.$store.state.realTime.wS}}</div>
  </div>
</template>
<script>
  export default {
    name: 'RealTime',
    props: ['city', 'provinceName']
  }
</script>
<style scoped>
  .realTime {
    color: #fff;
    flex: 1;
  }

  .icon {
    font-size: 0.55em;
    margin-left: -0.4em;
  }

  .location {
    margin-top: 1rem;
  }

  .temp {
    font-size: 3rem;
    margin: 0.3em 0;
  }

  .alert {
    display: inline-block;
    margin-left: 0.2em;
    color: #D33332;
    text-shadow: 0 0 2px #ff833c;
  }

  @media screen and (min-width: 720px) {
    .alert {
      display: block;
      font-size: 2rem;
      margin-top: 1rem;
    }
  }

  .wind {
    margin-top: 0.5em;
  }

</style>
