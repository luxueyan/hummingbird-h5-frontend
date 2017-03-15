import moment from 'moment'

export function contractInfo(data) {
  return {
    idCard: data.Idcard,
    cardName: data.Cardname,
    bankCard: data.Bankcard,
    bankPhone: data.Bankphone,
    bank: data.Bankname,
    loanAmount: data.Loanamount,
    totalAmount: data.Totalamount,
    endDate: moment(data.Enddate).format('YYYY-MM-DD')
  }
}
