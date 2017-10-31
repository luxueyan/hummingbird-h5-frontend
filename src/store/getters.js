export default {
  user: function(state) {
    return state.user
  },

  token(state) {
    return state.token
  },

  route(state) {
    return state.route
  },

  stateCode(state) {
    return state.stateCode
  },

  updaterProgressValue(state) {
    return state.updaterProgressValue
  },

  updaterProgressVisible(state) {
    return state.updaterProgressVisible
  },

  now(state) {
    return state.now
  },

  bankCardsCount(state) {
    return state.bankCardsCount
  },

  isPopStated(state) {
    return state.isPopStated
  },

  transitionName(state) {
    return state.transitionName
  },

  supportBankCards(state) {
    return state.supportBankCards
  },

  currentState(state) {
    return state.currentState
  }
}
