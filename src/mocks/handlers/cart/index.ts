import { API_PATHS } from '@/constants/api'
import { http, HttpResponse } from 'msw'
import { mockCart } from './mockData'

export const cartHandler = [
  http.get(API_PATHS.CARTS.GET, () => {
    return HttpResponse.json(mockCart)
  }),
]
