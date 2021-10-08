export const ACTIONS = {
    ADD_USER_METHOD: 'users/addUser',
    REMOVE_USER_METHOD: 'users/removeUser',
    INIT_USERS: 'users/initUsers',
    TOGGLE_LOGIN_METHOD: 'users/toggleLogin',
  }
  
  export const state = () => ({
    users: [],
    isLogged: false,
    currentUser: {},
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
    },
    TOGGLE_LOGIN: (state, data) => {
      state.currentUser = data ? data : {}
      state.isLogged = !state.isLogged
    },
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
    toggleLogin({ commit }, data) {
      commit('TOGGLE_LOGIN', data)
    },
  }
  