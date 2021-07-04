import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist'

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: window.localStorage
})

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    isPulseShow: false,
    name: null,
    description: null,
    price: 0,
  },
  getters: {
    getName(state) {
      return state.name;
    },
    getDescription(state) {
      return state.description;
    },
    getPrice(state) {
      return state.price;
    },
    getPulseShow(state) {
      return state.isPulseShow;
    }
  },
  mutations: {
    setName: (state, name) => {
      state.name = name
    },
    setDescription: (state, description) => {
      state.description = description
    },
    setPrice: (state, price) => {
      state.price = price
    },
    buttonToggle: state => (state.isPulseShow = true)
  }
});
