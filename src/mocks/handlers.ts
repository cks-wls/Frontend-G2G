import { categoryHandlers } from './handlers/category'
import { productHandlers } from './handlers/product'

export const handlers = [...productHandlers, ...categoryHandlers]
