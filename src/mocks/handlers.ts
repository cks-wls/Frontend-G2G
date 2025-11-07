import { productHandlers } from './handlers/product'
import { userSignUpHandlers } from './handlers/signUp'
import { producerSignUpHandlers } from './handlers/signUp'
export const handlers = [
  ...productHandlers,
  ...userSignUpHandlers,
  ...producerSignUpHandlers,
]
