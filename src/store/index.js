import VuexPersistence from 'vuex-persist';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})


export default new Vuex.Store({
    modules: {
    },
    plugins: [
      vuexLocal.plugin
    ],
    strict: true
})
