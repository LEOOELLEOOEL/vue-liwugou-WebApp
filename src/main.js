
import Vue from 'vue';
import router from './router/index.js';
import VueResource from 'vue-resource';
import fastclick from 'fastclick';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import App from './App.vue';
fastclick.attach(document.body);
Vue.use(MintUI);
Vue.use(VueResource);
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
