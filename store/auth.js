export const ACTIONS = {
    LOGIN_METHOD: 'auth/login',
    REGISTER_METHOD: 'auth/register',
  }
  
  export const state = () => ({
    isLogged: false,
  })
  
  export const mutations = {
    LOGIN: (state, data) => console.log(data),
    REGISTER: (state, data) => console.log(data)
  }
  
  export const actions = {
    login({ commit }, data) {
      commit('LOGIN', data)
    },
    register({ commit }, data){
      commit('REGISTER', data)
    },
  }
  