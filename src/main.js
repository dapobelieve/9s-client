import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/tailwind.css';
import SweetModal from 'sweet-modal-vue/src/plugin.js';

Vue.use(SweetModal);
Vue.use(axios);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
