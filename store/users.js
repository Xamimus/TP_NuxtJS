export const ACTIONS = {
    ADD_USER_METHOD: 'users/addUser',
    REMOVE_USER_METHOD: 'users/removeUser',
  }
  
  export const state = () => ({
    users: [],
  })
  
  export const mutations = {
    ADD_USER: (state, data) => state.users.push(data),
    REMOVE_USER: (state, data) => state.users = state.users.filter(user => user !== data)
  }
  
  export const actions = {
    addUser({ commit }, data) {
      commit('ADD_USER', data)
    },
    removeUser({ commit }, data){
      commit('REMOVE_USER', data)
    },
  }
  