import store from 'store'

function getSideState() {
  if (window.localStorage.getItem('side') === '0') {
    return false
  }
  if (window.localStorage.getItem('side') === '1') {
    return true
  }
  return true
}

function getServerVersion() {
  return store.get('serverVersion')
}

const app = {
  state: {
    version: '1.1.6',
    serverVersion: getServerVersion(),
    system: store.get('system') || 0,
    side: getSideState(),
    sideList: [],
    filterbar: false,
    loading: false,
    modular: false,
    countList: {},
  },
  mutations: {
    SET_SYSTEM: (state, payload) => {
      state.system = payload
      store.set('system', payload)
    },
    TOGGLE_SIDE: state => {
      state.side = !state.side
      store.set('side', state.side ? '1' : '0')
    },
    TOGGLE_FILTERBAR: state => {
      state.filterbar = !state.filterbar
    },
    TOGGLE_LOADING: state => {
      state.loading = !state.loading
    },
    SHOW_LOADING: state => {
      state.loading = true
    },
    HIDE_LOADING: state => {
      state.loading = false
    },
    SHOW_MODULAR: state => {
      state.modular = true
    },
    HIDE_MODULAR: state => {
      state.modular = false
    },
    SET_SIDE_LIST: (state, payload) => {
      state.sideList = payload
      store.set('sideList', payload)
    },
    TOGGLE_MENU: (state, index) => {
      state.sideList.forEach((currentValue, no, array) => {
        if (no !== index) {
          state.sideList[no].expand = false
        }
      })
      state.sideList[index].expand = !state.sideList[index].expand
    },
    UPDATE_VERSION: (state, payload) => {
      state.serverVersion = payload
    },
    SET_COUNTLIST: (state, payload) => {
      state.countList = payload
    },
  },
  actions: {
    setSystem: ({ commit }, payload) => {
      commit('SET_SYSTEM', payload)
    },
    toggleSide: ({ commit }) => {
      commit('TOGGLE_SIDE')
    },
    toggleFilterBar: ({ commit }) => {
      commit('TOGGLE_FILTERBAR')
    },
    toggleLoading: ({ commit }) => {
      commit('TOGGLE_LOADING')
    },
    showLoading: ({ commit }) => {
      commit('SHOW_LOADING')
    },
    hideLoading: ({ commit }) => {
      commit('HIDE_LOADING')
    },
    setSideList: ({ commit }, payload) => {
      commit('SET_SIDE_LIST', payload)
    },
    toggleMenu: ({ commit }, index) => {
      commit('TOGGLE_MENU', index)
    },
    updateVersion: ({ commit }, payload) => {
      console.log('update_version', payload)
      commit('UPDATE_VERSION', payload)
    },
    setCountList: ({ commit }, payload) => {
      commit('SET_COUNTLIST', payload)
    },
  },
}

export default app