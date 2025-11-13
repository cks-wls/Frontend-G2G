import { categoryHandlers } from './handlers/category'
import { orderListHandler, wishListHandler } from './handlers/myPage'
import { productHandlers } from './handlers/product'

export const handlers = [
  ...productHandlers,
  ...orderListHandler,
  ...categoryHandlers,
  ...wishListHandler,
]
