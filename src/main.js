import Vue from "vue";
import App from "./App.vue";
import {store} from './store/store'
Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  el: '#app',
  store,
  render: h => h(App)
}).$mount("#app");
