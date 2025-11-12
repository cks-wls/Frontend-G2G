import { categoryHandlers } from './handlers/category'
import { userLoginHandlers } from './handlers/login'
import { orderListHandler } from './handlers/myPage'
import { productHandlers } from './handlers/product'
import { sellerSignUpHandlers, userSignUpHandlers } from './handlers/signUp'

export const handlers = [
  ...productHandlers,
  ...userSignUpHandlers,
  ...sellerSignUpHandlers,
  ...userLoginHandlers,
  ...orderListHandler,
  ...categoryHandlers,
]
