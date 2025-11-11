import { userLoginHandlers } from './handlers/login'
import { orderListHandler } from './handlers/myPage'
import { productHandlers } from './handlers/product'
import { userSignUpHandlers } from './handlers/signUp'
import { sellerSignUpHandlers } from './handlers/signUp'

export const handlers = [
  ...productHandlers,
  ...userSignUpHandlers,
  ...sellerSignUpHandlers,
  ...userLoginHandlers,
  ...orderListHandler,
]
