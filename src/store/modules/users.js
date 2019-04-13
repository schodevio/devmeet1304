const initialState = () => ({
  userId: 33,
  isTokenSet: localStorage.getItem('isTokenSet')
})

const UsersStore = {
  namespaced: true,
  
  state: initialState(),

  getters: {
    userId: state => state.userId,
    isAdmin: state => state.isTokenSet === 'true'
  },

  mutations: {
    setId(state, id) {
      state.userId = id
      return state
    }
  }
}

export default UsersStore;