import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/home.css';
import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;
Vue.prototype.$cart = [];
new Vue({
  data: {
    user: 'NotLoggedIn',
  },
  router,
  render: (h) => h(App),
}).$mount('#app');
