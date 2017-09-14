export default {
  updateUser: function(state, user) {
    state.user = user
  },

  updateToken(state, token) {
    state.token = token
  },

  updateStateCode(state, stateCode) {
    state.stateCode = stateCode
  },

  updateStateMsg(state, stateMsg) {
    state.stateMsg = stateMsg
  },

  updateNow(state, date) {
    state.now = date
  }
}
