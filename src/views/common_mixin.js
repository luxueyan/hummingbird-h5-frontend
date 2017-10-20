import { RET_CODE_MAP } from '@/constants.js'
import { mapActions } from 'vuex'
import { bankCardInfo } from '@/common/resources.js'
import { get } from 'lodash'

export default {
  methods: {
    ...mapActions(['getMsgCode']),
    showSupportBanks() {
      this.$msgBox('支持银行列表：', '农业银行、中国银行、工商银行、建设银行、交通银行、兴业银行、中信银行、光大银行、上海银行')
    },

    // 获取银行卡开户行
    async getBank() {
      if (this.validation.isPassed('model.bankCard')) {
        const data = await bankCardInfo.get({
          bankCard: this.model.bankCard
        }).then(res => res.json())
        if (data.code === RET_CODE_MAP.OK) {
          this.model.bankName = data.data.bankName
          this.model.bankCode = data.data.bankCode
        } else {
          this.model.bankName = '自动生成'
          this.model.bankCode = ''
        }
        this.bankCardNotSupported = data.code === RET_CODE_MAP.BANK_CARD_NOT_SUPPORTED
        this.$validate('model.bankCard')
      }
    },

    // 获取验证码
    async toGetMsgCode() {
      const success = await this.$validate(this.validatePhoneModel)
      if (success) {
        const data = await this.getMsgCode({
          phone: get(this, this.validatePhoneModel),
          label: this.$route.meta.captchaSendType || ''
        })
        if (data.code === RET_CODE_MAP.OK) {
          this.countdownVisible = true
          this.$refs.fnCountdown.start()
        }
      } else {
        this.$toast(this.validation.firstError(this.validatePhoneModel), 'error')
      }
    },

    // 定时器结束 隐藏定时器
    onCountdownOver() {
      this.countdownVisible = false
    }
  },

  watch: {
    // 空格分隔的银行卡号
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
      validatePhoneModel: 'user.phone', // 发送验证码前验证手机号
      countdownVisible: false
    }
  }
}
