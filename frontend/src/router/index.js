import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Profile from '@/pages/account/Profile'
import Signup from '@/pages/account/Signup'
import Signin from '@/pages/account/Signin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/account/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/account/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/account/signin',
      name: 'Signin',
      component: Signin
    }
  ]
})
