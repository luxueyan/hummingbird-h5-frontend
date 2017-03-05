export default {
  updateUser: function(state, user) {
    state.user = user
  },

  updateToken(state, token) {
    state.token = token
  },

  updateCustStateCode(state, stateCode) {
    state.stateCode = stateCode
  }
}
