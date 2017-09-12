import {
  CustRepayment
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
    repay() {
      CustRepayment.get().then(res => res.json()).then(data => {
        if (data.code === RET_CODE_MAP.OK) {
          this.updateStateCode(CUST_STATE_CODE_MAP.REPAYING)
          this.$router.push({
            name: 'repaying'
          })
        }
      })
    }
  }
}
