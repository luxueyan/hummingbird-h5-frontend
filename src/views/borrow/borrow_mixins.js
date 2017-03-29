import { PayContract } from '../../common/resources.js'
import { RET_CODE_MAP, CUST_STATE_CODE_MAP } from '../../constants.js'
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['updateStateCode']),
    drawMoney() {
      return PayContract.get().then(res => res.json()).then(data => {
        if (data.ret === RET_CODE_MAP.OK) {
          this.updateStateCode(CUST_STATE_CODE_MAP.LOANING)
          this.$router.push({
            name: 'loaning'
          })
        }
      })
    }
  }
}