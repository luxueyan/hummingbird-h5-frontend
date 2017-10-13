import { RET_CODE_MAP } from '@/constants.js'
import { mapActions } from 'vuex'
import { bankCardInfo } from '@/common/resources.js'

export default {
  methods: {
    ...mapActions(['getMsgCode']),
    showSupportBanks() {
      this.$msgBox('支持银行列表：', '农业银行、中国银行、工商银行、建设银行、交通银行、兴业银行、中信银行、光大银行、上海银行')
    },

    // 获取银行卡开户行
    getBank() {
      if (this.validation.isPassed('model.bankCard')) {
        bankCardInfo
          .get({
            bankCard: this.model.bankCard
          })
          .then(res => res.json())
          .then(data => {
            if (data.code === RET_CODE_MAP.OK) {
              this.model.bankName = data.data.bankName
              this.model.bankCode = data.data.bankCode
            } else {
              this.model.bankName = '自动生成'
              this.model.bankCode = ''
            }
            this.bankCardNotSupported = data.code === RET_CODE_MAP.BANK_CARD_NOT_SUPPORTED
            this.$validate('model.bankCard')
          })
      }
    },

    // 获取验证码
    toGetMsgCode(phone) {
      this.$validate(this.validatePhoneModel).then(success => {
        if (success) {
          this.getMsgCode(phone).then(data => {
            if (data.code === RET_CODE_MAP.OK) {
              this.countdownVisible = true
              this.$refs.fnCountdown.start()
            }
          })
        } else {
          this.$toast(this.validation.firstError(this.validatePhoneModel), 'error')
        }
      })
    },

    // 定时器结束 隐藏定时器
    onCountdownOver() {
      this.countdownVisible = false
    }
  },

  watch: {
    'bankCardForShow' () {
      this.model.bankCard = this.bankCardForShow = this.bankCardForShow.replace(/\s/g, '')
      this.bankCardForShow = this.bankCardForShow.replace(/\d{4}(?=(\d{1,4}))/g, '$& ') //展示空格分隔的银行卡号
    },
    'model.bankCard' () {
      this.bankCardNotSupported = false // 重新输入银行卡后，不支持的状态重置为false，避免影响到再次获取银行卡信息的逻辑
    }
  },

  data() {
    return {
      bankCardForShow: '',
      bankCardNotSupported: false,
      validatePhoneModel: 'user.captcha',
      countdownVisible: false
    }
  }
}
