import App from './App';
import router from './router.config';
import 'babel-polyfill';
import './utils/config'

import Store from './store/'
import './stylus/APP.styl'

import './mixin/filter'
import './mixin/directive'
import './mixin/functions'
import './mixin/mixins'

import loading from '@/components/loading/index.js'
import view from '@/components/view/index.js'

Vue.use(view);
Vue.use(loading);


router.beforeEach((to, from, next)=>{
  next()
})


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App />',
  store: new Vuex.Store(Store)
})