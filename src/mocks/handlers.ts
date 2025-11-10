import { userLoginHandlers } from './handlers/login'
import { productHandlers } from './handlers/product'
import { userSignUpHandlers } from './handlers/signUp'
import { sellerSignUpHandlers } from './handlers/signUp'

export const handlers = [
  ...productHandlers,
  ...userSignUpHandlers,
  ...sellerSignUpHandlers,
  ...userLoginHandlers,
]
