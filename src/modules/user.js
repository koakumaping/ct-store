import cookie from 'js-cookie'

const user = {
  state: {
    masterKey: cookie.get('masterKey'),
    token: window.sessionStorage.getItem('token') || '',
    name: cookie.get('name') || '',
    loginTime: cookie.get('loginTime') || '',
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
      window.sessionStorage.setItem('token', token)
    },
  },
}

export default user