import {
  repayments
} from '@/common/resources.js'
import {
  CUST_STATE_CODE_MAP,
  RET_CODE_MAP
} from '@/constants.js'
import {
  mapMutations
} from 'vuex'

export default {
  methods: {
    ...mapMutations(['updateStateCode']),
    async repay() {
      const data = await repayments.save({
        contractId: this.$store.getters.user.currentOngoingContract.id
      }).then(res => res.json())
      if (data.code === RET_CODE_MAP.OK) {
        const status = data.data.repaymentStatus
        if (status === 0) {
          this.updateStateCode(CUST_STATE_CODE_MAP.REPAYING)
          this.$router.push({
            name: 'repaying'
          })
        } else if (status === 2) {
          this.$toast('支付系统升级中！', 'error')
        } else {
          this.$toast('抱歉，系统繁忙', 'error')
        }
      }
    }
  }
}
