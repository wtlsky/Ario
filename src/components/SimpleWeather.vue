<template>
  <div class="weathers">
    <div class="updateTime">
      <p>更新时间：{{new Date($store.state.update).toLocaleString()}}</p>
      <div class="iconfont icon-refresh" @click="update"></div>
    </div>
    <div class="day" v-for="weather in filterWeathers">
      <div class="week">{{weather.week}}</div>
      <div>
        <div class="weather">{{weather.weather}}</div>
        <div class="temp">{{weather.temp_day_c + '-' + weather.temp_night_c}}<i class="iconfont icon-sheshidu"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SimpleWeather',
    methods: {
      update() {
        const cityId = localStorage.getItem('cityId')
        this.$store.dispatch('getWeather', cityId)
      }
    },
    computed: {
      filterWeathers() { //过滤前一天天气情况
        const weathers = this.$store.state.weathers;
        return weathers.filter(function (weather, index) {
          if (index === 6) return;
          return weather
        })
      },
      lastUpdate() {
        return new Date(localStorage.getItem('update')).toLocaleString()
      }
    }
  }
</script>

<style scoped>
  .weathers {
    padding-top: 1rem;
    background: rgba(255, 255, 255, 0.6);
    overflow: auto;
  }

  @media screen and (min-width: 720px) {
    .weathers {
      flex: 1;
      border-radius: 5px;
    }
  }

  .updateTime {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    font-size: 0.8rem;
    text-align: left;
    color: #333;
    align-items: center;
  }

  .icon-refresh {
    font-size: 1.5rem;
  }

  .day {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #333;
    padding: 0.6em 1em;
  }

  @media screen and (max-width: 320px) {
    .day {
      padding: 0.5em 1em;
    }
  }

  .week {
    height: 100%;
    text-align: left;
    flex: 2;
  }

  .day > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    flex: 1.5;
  }

</style>
