import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/P_index.vue'
import search from '../components/Search.vue'
import alarms from '../components/P_alarms.vue'
import indexes from '../components/P_indexes.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/search',
      name: 'search',
      component: search,
    },
    {
      path: '/alarms',
      name: 'alarms',
      component: alarms
    },{
      path:'/indexes',
      name:'indexes',
      component:indexes
    }
  ]
})
