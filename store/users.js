export const ACTIONS = {
    ADD_USER_METHOD: 'users/addUser',
    REMOVE_USER_METHOD: 'users/removeUser',
    INIT_USERS: 'users/initUsers',
  }
  
  export const state = () => ({
    users: [],
  })
  
  export const reloadUsers = () => {
    localStorage.setItem('users', state.users)
  }

  export const mutations = {
    ADD_USER: (state, data) => {
      state.users.push(data)
      reloadUsers()
    },
    REMOVE_USER: (state, data) => {
      state.users = state.users.filter(user => user.mail !== data.mail)
      reloadUsers()
    },
    INIT_USERS: (state, data) => {
      state.users = data
    }
  }
  
  export const actions = {
    addUser({ commit }, data) {
      commit('ADD_USER', data)
    },
    removeUser({ commit }, data){
      commit('REMOVE_USER', data)
    },
    initUsers({ commit }, data){
      commit('INIT_USERS', data)
    },
  }
  