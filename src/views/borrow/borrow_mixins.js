import { contractLoan } from '@/common/resources.js'
import { RET_CODE_MAP, CUST_STATE_CODE_MAP } from '@/constants.js'
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['updateStateCode']),
    async drawMoney() {
      const data = await contractLoan.get().then(res => res.json())
      if (data.code === RET_CODE_MAP.OK) {
        this.updateStateCode(CUST_STATE_CODE_MAP.LOANING)
        this.$router.push({
          name: 'loaning'
        })
      }
    }
  }
}
