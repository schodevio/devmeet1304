const initialState = () => ({
  header: 'Home'
})

const SettingsStore = {
  namespaced: true,
  
  state: initialState(),

  getters: {
    header: state => state.header
  },

  mutations: {
    setHeader(state, header) {
      state.header = header
      return state
    }
  }
}

export default SettingsStore;