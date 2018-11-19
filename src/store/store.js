import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    addedComments: [],
    removedComments: [],
    hasError: false,
    // bottomLine: true 
  },

  actions: {},

  mutations: {
    initialStore(state) {
      if (localStorage.getItem("store")) {
        //замена массивов в state на массивы из localstorage
        this.replaceState(
          //вставляет в первый параметр свойства из остальных.
          //в данном случае в state будут записываться массивы,
          //распарсенные из localstorage
          Object.assign(state, JSON.parse(localStorage.getItem("store")))
        );
      }
    },

    //функция, в параметры которой передаем состояние и комментарий
    //данная мутация пушит в массив добавленных отзывов новый комментарий
    addComment(state, comment) {
      state.addedComments.push(comment);
    },

    removeComment(state, id) {
      const commentIndex = state.addedComments.findIndex(
        a => a.id === Number(id)
      );
      let removeComment = state.addedComments.splice(commentIndex, 1);
      state.removedComments.push(removeComment[0]);
    },

    addReverseComment(state, id) {
      const commentIndex = state.removedComments.findIndex(
        a => a.id === Number(id)
      );
      let addReverseComment = state.removedComments.splice(commentIndex, 1);
      state.addedComments.push(addReverseComment[0]);
    },

    saveComment(state) {
      localStorage.setItem("store", JSON.stringify(state));
      alert("save successfully!")
    },
  },

  getters: {},
  modules: {}
});
