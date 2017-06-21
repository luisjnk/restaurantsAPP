import Vue from 'vue'
import Router from 'vue-router'
import restaurantsList from '@/components/restaurantsList'
import restaurant from '@/components/restaurant'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'restaurantsList',
      component: restaurantsList
    },
       {
      path: '/restaurant/:restaurantId',
      name: 'restaurant',
      component: restaurant
    }
  ]
})
