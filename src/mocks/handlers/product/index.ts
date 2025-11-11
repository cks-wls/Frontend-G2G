import { API_PATHS } from '@/constants/api'
import { http, HttpResponse } from 'msw'
import { MOCK_PRODUCTS } from './mockData'

export const productHandlers = [
  // 상품 전체 조회 예시
  http.get(API_PATHS.PRODUCTS.GET_ALL, () => {
    return HttpResponse.json(MOCK_PRODUCTS)
  }),
]
