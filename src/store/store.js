import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import SettingsStore from './modules/settings'
import UsersStore from './modules/users'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  modules: {
    SettingsStore,
    UsersStore
  },
  plugins: [vuexLocal.plugin]
})
