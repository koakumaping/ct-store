const getters = {
  version: state => state.app.version,
  serverVersion: state => state.app.serverVersion,
  system: state => state.app.system,
  region: state => state.app.region,
  side: state => state.app.side,
  sideList: state => state.app.sideList,
  filterbar: state => state.app.filterbar,
  isModular: state => state.app.modular,
  loading: state => state.app.loading,
  areaList: state => state.app.areaList,
  countList: state => state.app.countList,
  token: state => state.user.token,
  masterKey: state => state.user.masterKey,
  name: state => state.user.name,
  noticeList: state => state.notice.list,
  flow: state => state.flow.flow,
  flowVisible: state => state.flow.visible,
}

export default getters
