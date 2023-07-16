import Vue from 'vue'
import App from './App.vue'
import './assets/styles/index.css';
import routes from './router';
// Import thư viện Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
window.Bus = new Vue();
window.axios = require('axios');
import stores from './store/store';
// window.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
import Vuex from 'vuex'
import * as te from 'tw-elements';
import VueRouter from 'vue-router';
library.add(fab, fas, far)
Vue.component('font-awesome-icon', FontAwesomeIcon)
import 'flowbite';
Vue.use(VueRouter);
Vue.use(Vuex)
const store = new Vuex.Store({
   modules: { stores },
});
Vue.use(te);


const router = new VueRouter({mode: 'history', routes});

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

const app = new Vue({
  render: h => h(App),
  store: store,
  router
})
app.$mount('#app')
