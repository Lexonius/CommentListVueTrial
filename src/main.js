import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store";
Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  el: "#app",
  store,
  //до инициализации данных и событий вызываем мутацию с выгрузкой массивов из localstorage
  beforeCreate() {
    this.$store.commit("initialStore");
  },
  render: h => h(App)
}).$mount("#app");
