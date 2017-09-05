import Vue from 'vue'
import Router from 'vue-router'
// Containers
import Full from '@/containers/Full'
// Views
import Dashboard from '@/views/Dashboard'

// Views - Pages
import Page404 from '@/views/pages/Page404'
import Page500 from '@/views/pages/Page500'
import Login from '@/views/pages/Login'
import Register from '@/views/pages/Register'

Vue.use(Router)
export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
    path: '/',
    redirect: '/dashboard',
    name: 'Home',
    component: Full,
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {auth: true}
    }]
  },
  {
    auth: false,
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {auth: false}
  },
  {
    path: '/pages',
    redirect: '/pages/p404',
    name: 'Pages',
    component: {
      render (c) {
        return c('router-view')
      }
    },
    children: [{
      path: '404',
      name: 'Page404',
      component: Page404
    }, {
      path: '500',
      name: 'Page500',
      component: Page500
    }, {
      path: 'register',
      name: 'Register',
      component: Register
    }]
  }]
})
