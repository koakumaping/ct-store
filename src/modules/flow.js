const flow = {
  state: {
    flow: {
      response: {
        err: '',
        info: '',
      },
      tree: [],
      singleSelection: 0,
    },
    visible: false,
  },
  mutations: {
    SHOW_FLOW: (state, payload) => {
      state.visible = true
      state.flow = payload
    },
    HIDE_FLOW: (state, key) => {
      state.visible = false
    },
  },
  actions: {
    showFlow: ({ commit }) => {
      commit('SHOW_FLOW')
    },
    hideFlow: ({ commit }) => {
      commit('HIDE_FLOW')
    },
  },
}

export default flow