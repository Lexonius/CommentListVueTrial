import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = () => new Vuex.Store({
  state: {
    addedComments: [],
    removedComments: []
  },
  actions: {},
  mutations: {
    addCommentHandler(comment) {
      this.$store.state.addedComments.push(comment);
    },
  },
  getters: {
    // addedComments: state =>{
    //   return state.addedComments;
    // }
  },
  modules: {}
});
