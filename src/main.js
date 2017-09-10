// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueResource)
const stateCache = JSON.parse(localStorage.getItem('state'))
const state = stateCache ? stateCache.value[0] : {}
const store = new Vuex.Store({
  state: {
    province: state.provinceName || '未定位',
    city: state.city || '未定位',
    update: new Date(localStorage.getItem('update')) || new Date(),
    weathers: state.weathers || [],
    realTime: state.realtime || {},
    pm25: state.pm25 || {},
    alarms: state.alarms || [],
    indexes: state.indexes || [],
    cities: []
  },
  mutations: {
    setCities(state, cities) {
      state.cities = cities
    },
    setWeather(state, weatherData) {
      const weather = weatherData.value[0]
      state.city = weather.city
      state.alarms = weather.alarms
      state.province = weather.provinceName
      state.pm25 = weather.pm25
      state.weathers = weather.weathers
      state.realTime = weather.realtime
      state.indexes = weather.indexes
      localStorage.setItem('state', JSON.stringify(weatherData)) //将天气情况存入本地缓存
      localStorage.setItem('update', new Date())
      state.update = new Date(localStorage.getItem('update'))
    }
  },
  actions: {
    getCities(context) {
      Vue.http.get('../../static/city.list.json').then(function (res) {
        context.commit('setCities', res.body)
      }).catch(function (err) {
        console.log(err)
      })
    },
    getWeather(context, cityid) {
      Vue.http.get('/api', {params: {cityIds: cityid}}).then(function (res) {
        context.commit('setWeather', res.body)
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App},
  methods: {
    updateWeather(cityId = 101010100) {
      this.$store.dispatch('getWeather', cityId)
    }
  },
  created() {
    const cityId = localStorage.getItem('cityId') //读取本地缓存地址
    const update = localStorage.getItem('update') || 0
    const difference = new Date() - new Date(update)
    this.$store.dispatch('getCities') //初始化城市
    if (cityId && difference > 900000) {
      this.updateWeather(cityId)
    } else if (!cityId) {
      this.updateWeather()
    }
  }
})
