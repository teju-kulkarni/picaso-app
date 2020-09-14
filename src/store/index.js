import Vue from "vue";
import Vuex from "vuex";
import service from "../services/service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: [],
  },
  mutations: {
    SET_CARDS(state, cards) {
      state.cards = cards;
    },
  },
  actions: {
    fetchCards({ commit }, { limit, page }) {
      return service.getCards(limit, page).then((response) => {
        commit("SET_CARDS", response.data);
        return response.data;
      });
    },
  },
  modules: {},
});
