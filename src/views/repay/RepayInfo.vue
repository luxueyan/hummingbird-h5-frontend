<template lang="pug">
  .repay-info
    .form
      section
        .fields-header
          i.iconfont.icon-fangan
          | 还款计划
          small.fr.loan-agreement 查看
            router-link(:to="{name:'loanAgreement'}")
              |《借款服务协议》
        .fields
          mt-cell(title="借款金额", :value="model.contractAmount | fbCurrency")
          mt-cell(title="应还日期", :value="model.contractEndDate | fbFalse")
          mt-cell(title="应还金额", :value="model.contractAmount | fbCurrency")
      fb-bank-cards
      .form-buttons
          mt-button.mint-button-block(type='primary', size='large', @click="repayConfirm()") 立即还款
</template>

<script>
import {
  selfContracts
} from '@/common/resources.js'
import repayMixins from '@/views/repay/repay_mixins.js'
import {
  mapGetters
} from 'vuex'
import FbBankCards from '@/components/FbBankCards.vue'
import { RET_CODE_MAP } from '@/constants.js'
import store from '@/store'
import moment from 'moment'

export default {
  mixins: [repayMixins],
  components: {
    FbBankCards
  },
  async beforeRouteEnter(to, from, next) {
    const user = store.getters.user
    const data = await selfContracts.get({ id: user.currentOngoingContract.id }).then(res => res.json())
    next(vm => {
      if (data.code === RET_CODE_MAP.OK) {
        vm.model = Object.assign({}, data.data)
      }
    })
  },
  methods: {
    // 去修改银行卡
    goChangeBankCard() {
      this.$router.push({
        name: 'bankList'
      })
    },

    repayConfirm() {
      if (new Date() - moment(this.model.startDateTs).toDate() <= 86400000) { // 如果小于一天就还款，给出提示
        this.$msgBox.confirm('确认提交还款?').then(action => {
          if (action === 'confirm') {
            this.repay()
          }
        }).catch(() => {})
      } else {
        this.repay()
      }
    }
  },
  computed: {
    ...mapGetters(['stateCode'])
  },
  data() {
    const stateUser = JSON.parse(JSON.stringify(this.$store.getters.user))
    return {
      model: {
        name: stateUser.name,
        idCard: null,
        bankCard: null,
        bank: '',
        bankPhone: null
      },
      user: stateUser
    }
  }
}
</script>
