import { API_PATHS } from '@/constants/api'
import { http, HttpResponse } from 'msw'
import { orders } from './mockData'

export const orderListHandler = [
  http.get(API_PATHS.ORDERS.GET_ORDER_LIST, () => {
    return HttpResponse.json(orders)
  }),
]
