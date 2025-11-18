import { cartHandler } from './handlers/cart'
import { categoryHandlers } from './handlers/category'
import { orderListHandler, wishListHandler } from './handlers/myPage'
import { productHandlers } from './handlers/product'
import { questionListHandler } from './handlers/question'
import { reviewListHandler } from './handlers/review/Index'
export const handlers = [
  ...productHandlers,
  ...orderListHandler,
  ...categoryHandlers,
  ...wishListHandler,
  ...categoryHandlers,
  ...cartHandler,
  ...reviewListHandler,
  ...questionListHandler,
]
