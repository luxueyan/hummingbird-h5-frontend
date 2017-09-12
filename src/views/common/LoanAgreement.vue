<template>
  <section class="ui-container ui-center ui-whitespace">
    <p class="ui-txt-justify">第一部分、借款、服务信息及相关明细</p>
    <table class="ui-table ui-border-tb">
      <tbody>
        <tr>
          <td colspan="4">出借人</td>
        </tr>
        <tr>
          <td class="title-td">姓名</td>
          <td>程海燕</td>
          <td class="title-td">身份证号</td>
          <td>152326198810063320</td>
        </tr>
        <tr>
          <td colspan="4">借款人</td>
        </tr>
        <tr>
          <td>姓名</td>
          <td>{{user.UserinfoValLogin.Name}}</td>
          <td>身份证号</td>
          <td>{{user.UserinfoValLogin.Idcard}}</td>
        </tr>
        <tr>
          <td colspan="4">服务方及收取费用明细</td>
        </tr>
        <tr>
          <td>服务方</td>
          <td colspan="3">北京极速蜂鸟科技有限公司</td>
        </tr>
        <tr>
          <td>综合服务费</td>
          <td colspan="3">{{serviceCharge | fbCurrency('￥', '元')}}</td>
        </tr>
        <tr>
          <td colspan="4">借款明细</td>
        </tr>
        <tr>
          <td>借款本金</td>
          <td colspan="3">{{user.integraluserlevel.Limit | fbCurrency('￥', '元')}}</td>
        </tr>
        <tr>
          <td>借款年利率</td>
          <td>0%</td>
          <td>每日利息</td>
          <td>￥0</td>
        </tr>
        <tr>
          <td>借款出借日</td>
          <td>{{contractInfo.startDate}}</td>
          <td>借款到期日</td>
          <td>{{contractInfo.endDate}}</td>
        </tr>
        <tr>
          <td>起息日</td>
          <td>{{contractInfo.startDate}}</td>
          <td>还款方式</td>
          <td>从{{contractInfo.bank}}（{{bankCardShort}}）自动扣款</td>
        </tr>
        <tr>
          <td colspan="4">还款计划</td>
        </tr>
        <tr>
          <td>还款日</td>
          <td>{{contractInfo.endDate}}</td>
          <td>还款金额</td>
          <td>应还款{{user.integraluserlevel.Limit | fbCurrency('￥', '元')}}</td>
        </tr>
      </tbody>
    </table>
    <p class="ui-txt-justify">第二部分、本服务协议相关具体条款</p>
    <p class="ui-txt-justify">第1条、名词定义</p>
    <p class="ui-txt-justify">除非上下文另有解释，下列用语具有以下含义：</p>
    <p class="ui-txt-justify">1.1 本协议：指本《借款及服务协议》第一部分、第二部分及所有附件中的任何条款、明细和信息。</p>
    <p class="ui-txt-justify">1.2 出借人：指本协议第一部分中列明的出借人，为符合中华人民共和国法律具有完全民事权利能力和民事行为能力，能独立行使和承担协议项下权利义务的自然人。</p>
    <p class="ui-txt-justify">1.3 借款人：指本协议第一部分中列明的借款人，为符合中华人民共和国法律具有完全民事权利能力和民事行为能力，能独立行使和承担协议项下权利义务的自然人。</p>
    <p class="ui-txt-justify">1.4 服务方：指本协议第一部分中列明的服务方公司</p>
    <p class="ui-txt-justify">1.5 支付机构：指本协议各方之间，作为中介机构提供资金转移服务的银行或第三方支付结算机构。</p>
    <p class="ui-txt-justify">1.6 本协议项下出借人、借款人、服务方、支付机构单独称“一方”，合称“各方”。</p>
    <p class="ui-txt-justify">第2条、关于各方的权利、义务</p>
    <p class="ui-txt-justify">2.1 关于出借人、借款人（合称“双方”）的权利义务</p>
    <p class="ui-txt-justify">2.1.1 双方已认真阅读且理解本协议所有内容，并自愿按本协议的相关约定履行各自的权利义务。</p>
    <p class="ui-txt-justify">2.1.2 出借人向借款人成功出借资金时，本协议生效。</p>
    <p class="ui-txt-justify">2.1.3 双方有义务按服务方要求提供真实、准确，完整的个人信息（包括但不限于电子邮箱、手机号码等），因双方操作不当或填写信息有误造成的法律后果及经济损失均由其个人承担。</p>
    <p class="ui-txt-justify">2.1.4 双方同意由服务方指定的支付机构进行借款的支付及还款操作，借款人在此不可核销的同意服务方直接从借款人借款本金中扣除相应金额，用以支付第一部分所列明的服务费用。</p>
    <p class="ui-txt-justify">2.1.5 自本协议成立之日起，至所有本息、第一部分列明的各项费用及违约金（如有）全部清偿前，双方本人、家庭联系人、居住地址、联系方式、账户信息如出现变更的，应在变更之日起3个自然日内向服务方提供变更后的最新信息，若因任何一方未能及时提供最新信息或提供虚假信息而导致其自身或任何其他第三方损失，均由该未及时提供信息一方承担。</p>
    <p class="ui-txt-justify">2.1.6 就借款人提供的个人信息，及服务方通过合法渠道获取的与其相关的个人信息，服务方有权为本协议目的自行管理使用。</p>
    <p class="ui-txt-justify">2.1.7 成功借款后，服务方依据出借人的委托要求借款人按本协议约定进行还款时，借款人有义务无条件及时按照服务方要求进行还款，并想服务方提供协助。</p>
    <p class="ui-txt-justify">2.1.8 借款人同意，若逾期超过60日未能全额归还借款的，服务方有权利代理出借人通过包括但不限于网络、报刊、电视、征信系统等方式向任何第三方披露借款人逾期还款实事。且借款人特别确认届时服务方可同时披露借款人所提供的或服务方自行获取的借款人的个人信息。</p>
    <p class="ui-txt-justify">2.2 关于服务方的义务</p>
    <p class="ui-txt-justify">2.2.1 服务方按照本协议约定，恪尽职守，以诚实、信用、谨慎、有效的管理为借款人及出借人提供服务。</p>
    <p class="ui-txt-justify">2.2.2 服务方对借款人和出借人的个人信息以及服务相关的其他信息依法保密。</p>
    <p class="ui-txt-justify">2.2.3 出借人在此委托服务方，服务方接受出借人的委托代理出借人根据本协议进行借款回收的管理服务。</p>
    <p class="ui-txt-justify">第3条、关于各方的承诺及保证</p>
    <p class="ui-txt-justify">3.1 出借人、借款人在此各自确认为具有完全民事行为权利能力和完全民事行为能力的自然人。</p>
    <p class="ui-txt-justify">3.2 出借人保证其出借资金来源均合法。</p>
    <p class="ui-txt-justify">3.3 借款人保证其向出借人及服务方所提供的信息都是真实有效的。</p>
    <p class="ui-txt-justify">第4条、关于违约责任</p>
    <p class="ui-txt-justify">4.1 若借款人未能按照本协议约定足额还款的，须按照下列计算方式，向出借人支付逾期违约金：</p>
    <p class="ui-txt-justify">逾期违约金＝借款金额*1%/天*逾期天数</p>
    <p class="ui-txt-justify">4.2 若借款人没有足额偿还本息的，所偿还之金额应按照违约金、利息、本金顺序偿还。</p>
    <p class="ui-txt-justify">4.3 若擅自更改借款用途，提供虚假资料或者故意隐瞒重要事实，则出借人有权通过服务方提前终止本协议并要求借款人提前归还本金，并要求借款人支付借款本金总额15%的违约金。</p>
    <p class="ui-txt-justify">4.4 借款人违反本协议之约定，未经出借人同意，擅自转让本协议借款债务的，借款人应向出借人支付借款本金总额15%的违约金。</p>
    <p class="ui-txt-justify">4.5 发生以下一项或几项情形时，均视为借款人违约的：</p>
    <p class="ui-txt-justify">（1）借款人违反其在本协议中的任何承诺或保证内容；</p>
    <p class="ui-txt-justify">（2）借款人的任何财产遭受没收、征用、查封、扣押、冻结等可能影响其履行能力的不利事件，且未及时对各方进行书面通知或不能及时提供有效补救措施的。</p>
    <p class="ui-txt-justify">（3）借款人的财务状况出现实质性影响其履约能力的不利变化，且未及时对各方进行书面通知或不能及时提供有效补救措施的</p>
    <p class="ui-txt-justify">4.6 出借人合理判断借款人发生或可能发生违约时，授权服务方采取如下一项或几项措施：</p>
    <p class="ui-txt-justify">（1）立即暂缓、取消发放全部或部分借款。</p>
    <p class="ui-txt-justify">（2）宣布已发放的借款提前到期，要求借款人应立即偿还所有应付款项。</p>
    <p class="ui-txt-justify">（3）解除本协议</p>
    <p class="ui-txt-justify">（4）采取法律、法规以及本协议约定的其救济措施。</p>
    <p class="ui-txt-justify">4.7 因借款人违约导致服务方损失的，须由借款人赔偿。</p>
    <p class="ui-txt-justify">第5条、相关文件</p>
    <p class="ui-txt-justify">5.1各方确认并同意服务方提供的与本协议有关的书面文件或电子信息作为本协议的组成部分。</p>
    <p class="ui-txt-justify">第6条、关于债权转让</p>
    <p class="ui-txt-justify">6.1 出借人将本协议项下债权转让给第三人的，由出借人委托服务方向借款人在服务方的账户发送债权转让通知书，该通知发送至服务方的借款人账户时视为通知已经送达。</p>
    <p class="ui-txt-justify">6.2 在出借人转让债权后，借款人须对新债权人继续履行本协议下其对出借人的所有义务，不得以未接到债权转让通知为由拒绝履行还款义务。</p>
    <p class="ui-txt-justify">第7条、关于法律适用及管辖</p>
    <p class="ui-txt-justify">7.1 适用法律。本协议的全部事项，包括但不限于本协议的效力、解释、履行以及争议的解决均受到中国法律管辖：本协议项下任一条款如与中国法律中的强制性规范相抵触，应在该等强制性规范所不禁止的最大限度内进行解释和执行，且任何该等与强制性规范相抵触的约定不应影响本协议其他条款的效力。</p>
    <p class="ui-txt-justify">7.2 争议管辖。各方一致同意，如发生争议，不论争议金额大小，均提交北京仲裁委员会适用北京仲裁委员会仲裁规则项下的简易程序进行仲裁。</p>
    <p class="ui-txt-justify">7.3 在仲裁期间，本协议中不涉及争议的条款仍须履行，各方均不得以解决争议为由拒不履行其在本协议项下的任何义务。</p>
    <p class="ui-txt-justify">第8条、关于其他</p>
    <p class="ui-txt-justify">8.1 本协议项下的附件属于本协议不可分割的组成部分。本协议任何条款的标题仅系为方便援引和阅读而设置，不得被用于解释本协议任何条款的依据。</p>
    <p class="ui-txt-justify">8.2 本协议经出借人和借款人在网络平台上以线上点击确认的方式订立，本协议各方委托服务方保管所有与本协议有关的书面文件或电子信息。</p>
    <p class="ui-txt-justify">借款人（盖章或签名）：</p>
    <p class="ui-txt-justify"></p>
    <p class="ui-txt-justify">出借人（盖章或签名）： </p>
    <p class="ui-txt-justify"></p>
    <p class="ui-txt-justify">服务方（盖章）： </p>
    <p class="ui-txt-justify">代表人（签名）：</p>
    <p class="ui-txt-justify"></p>
  </section>
</template>

<script>
import {
  QueryContract
} from '@/common/resources.js'
import {
  contractInfo
} from '@/common/adaptors.js'
import {
  mapGetters
} from 'vuex'

export default {
  beforeRouteEnter: function(to, from, next) {
    QueryContract.get().then(res => res.json())
      .then(data => {
        next(vm => {
          if (data.data.content) {
            vm.contractInfo = Object.assign({}, contractInfo(data.data.content))
          }
        })
      })
  },
  computed: {
    ...mapGetters(['user']),
    serviceCharge() {
      const {
        Creditmoney,
        Managemoney
      } = this.user.integraluserlevel
      return Creditmoney + Managemoney
    },
    virtualMoney() {
      const {
        Limit,
        Creditmoney,
        Managemoney
      } = this.user.integraluserlevel
      return Limit - Creditmoney - Managemoney
    },
    bankCardShort() {
      return this.contractInfo.bankCard ? this.contractInfo.bankCard.slice(-4) : ''
    }
  },
  data() {
    return {
      contractInfo: {}
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-container {
  font-size: 14px;
}

table {
  table-layout: fixed;
  width: 100%;
  word-wrap: break-word;
  word-break: break-all;
  margin-bottom: 10px;
}

td {
  text-align: left !important;
  // width: 35%;
  padding: 5px;
  &.title-td {
    width: 4em;
  }
}

.ui-whitespace {
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
}

p {
  text-align: left;
  width: 100%;
  padding-bottom: 5px;
}
</style>
