import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import HomePage from '@/components/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: HomePage
    },
    {
      path: '/landing',
      name: 'landing-page',
      component: LandingPage
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
