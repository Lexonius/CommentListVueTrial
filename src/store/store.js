import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    addedComments: [],
    removedComments: []
  },
  actions: {},
  mutations: {},
  getters: {},
  modules: {}
});
