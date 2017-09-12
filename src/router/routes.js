import CommonRoutes from '@/views/common/routes.js'
import BorrowRoutes from '@/views/borrow/routes.js'
import RepayRoutes from '@/views/repay/routes.js'
import AccountRoutes from '@/views/account/routes.js'

export default [
  ...CommonRoutes,
  BorrowRoutes,
  RepayRoutes,
  ...AccountRoutes
]
