import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'
import ptBrMessages from './messages/pt-br'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAuth from '@websanova/vue-auth'

Vue.config.productionTip = false
Vue.use(VueI18n)

/**
 * Definição de mensagens para intercionalização
 * ...ptBrMessages ---> Mensagens do Element-UI
 * ...ptBrLocale   ---> Mensagens locais
 */
const messages =
  {
    'pt-br': {...ptBrMessages}
  }

/**
 * Define a linguagem a ser usada na aplicação
 * e disponibiliza a variavel i18n para ser usada em todos templates da aplicação
 * ex: {{ $t("message")}} ou i18n.t('message') dentro de script (somente local)
 * @type {VueI18n}
 */
const i18n = new VueI18n({
  locale: 'pt-br', // set locale
  messages // set locale messages
})

Vue.use(BootstrapVue)
Vue.use(Vuex)

/**
 * Rotina que cuida da autenticação do sistema
 * @type {[type]}
 */
Vue.router = router
Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = 'http://spa.com'
Vue.use(VueAuth, {
  // auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  auth: {
    request (req, token) {
      /* eslint no-underscore-dangle: ["error", { "allow": ["_setHeaders"] }] */
      this.options.http._setHeaders.call(this, req, { Authorization: `Bearer ${token}` })
    },
    response ({ data: { token } }) {
      if (token) {
        Vue.use(VueAxios, axios)
        // Vue.use(VueSocketIo, io.connect('http://localhost:8081', {
        //     reconnection: true,
        //     query: `token=${token}`
        // }))
      }
      return token
    }
  },
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
  rolesVar: 'role',
  token: [{request: 'token', response: 'token', authType: 'bearer', foundIn: 'header'}],
  tokenName: 'token',
  loginData: {url: '/api/login', method: 'POST', redirect: '/', fetchUser: true},
  fetchData: {url: '/api/user', method: 'GET', enabled: true, authType: 'bearer'},
  // loginData: {url: 'login', method: 'POST', redirect: '/', fetchUser: true},
  // fetchData: {url: 'frontend/user', method: 'GET', enabled: true, authType: 'bearer'},
  refreshData: { enabled: false }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  template: '<App/>',
  components: { App }
})
