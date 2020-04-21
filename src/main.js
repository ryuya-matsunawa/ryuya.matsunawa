import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import smoothScroll from 'vue-smoothscroll'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store.js'
import Vuex from "vuex";

Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use(smoothScroll)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');



