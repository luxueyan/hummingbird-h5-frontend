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

  updateUpdaterProgressValue(state, value) {
    state.updaterProgressValue = value
  },

  updateUpdaterProgressVisible(state, value) {
    state.updaterProgressVisible = value
  },

  updateNow(state, date) {
    state.now = date
  },

  updateBankCardsCount(state, count = 0) {
    state.bankCardsCount = count
  },

  updateIsPopStated(state, isPopStated = false) {
    state.isPopStated = isPopStated
  }
}
