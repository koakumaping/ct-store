const notice = {
  state: {
    list: [],
    timer: '',
  },
  mutations: {
    ADD_NOTICE: (state, payload) => {
      state.list.push(payload)
    },
    DEL_NOTICE: (state, key) => {
      const notices = state.list
      const l = notices.length
      for (let i = 0; i < l; ++i) {
        if (notices[i].key === key) {
          notices.splice(i, 1)
          break
        }
      }
    },
  },
}

export default notice