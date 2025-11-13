import { categoryHandlers } from './handlers/category'
import { orderListHandler } from './handlers/myPage'
import { productHandlers } from './handlers/product'

export const handlers = [
  ...productHandlers,
  ...orderListHandler,
  ...categoryHandlers,
]
