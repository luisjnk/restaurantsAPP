import Vue from 'vue'
import Router from 'vue-router'
import restaurantsList from '@/components/restaurantsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'restaurantsList',
      component: restaurantsList
    }
  ]
})
