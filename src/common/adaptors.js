import moment from 'moment'

/*后端命名规范目前不统一*/
export function contractInfo(data) {
  return {
    idCard: data.Idcard,
    cardName: data.Cardname,
    // bankName: data.Bankname, // bankName === bank 为了兼容不同的接口
    bankCard: data.Bankcard,
    bankPhone: data.Bankphone,
    bank: data.Bankname,
    loanAmount: data.Loanamount,
    totalAmount: data.Totalamount,
    endDate: moment(data.Enddate).format('YYYY年MM月DD日'),
    startDate: moment(data.Startdate).format('YYYY年MM月DD日')
  }
}
