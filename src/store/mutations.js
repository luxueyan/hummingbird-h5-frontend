export default {
  updateUser: function(state, user) {
    state.user = user
  },

  updateUserPhone(state, phone) {
    state.user.phone = phone
  },

  updateToken(state, token) {
    state.token = token
  },

  updateStateCode(state, stateCode) {
    state.stateCode = stateCode
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
  },

  updateTransitionName(state, transitionName = 'fade') {
    state.transitionName = transitionName
  },

  updateSupportBankCards(state, bankCards = []) {
    state.supportBankCards = bankCards
  },

  updateUserName(state, name) {
    state.user.name = name
  },

  updateOnGoingContractId(state, contractId) {
    if (state.user.currentOngoingContract) {
      state.user.currentOngoingContract.id = contractId
    } else {
      state.user.currentOngoingContract = { id: contractId }
    }
  }
}
