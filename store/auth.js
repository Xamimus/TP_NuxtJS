export const AUTH_ACTIONS = {
    TOGGLE_LOGIN_METHOD: 'auth/login',
  }
  
  export const state = () => ({
    isLogged: false,
  })
  
  export const mutations = {
    TOGGLE_LOGIN: (state) => state.isLogged = !state.isLogged,
  }
  
  export const actions = {
    toggleLogin({ commit }, data) {
      commit('LOGIN', data)
    },
  }
  