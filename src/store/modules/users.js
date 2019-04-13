const initialState = () => ({
  userId: 33
})

const UsersStore = {
  namespaced: true,
  
  state: initialState(),

  getters: {
    userId: state => state.userId
  }
}

export default UsersStore;