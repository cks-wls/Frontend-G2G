import { API_PATHS } from '@/constants/api'
import { http, HttpResponse } from 'msw'
import { MOCK_PRODUCTS } from './mockData'

export const productHandlers = [
  // 상품 및 검색 목록 조회
  http.get(API_PATHS.PRODUCTS.GET_PRODUCT_LIST, () => {
    return HttpResponse.json(MOCK_PRODUCTS)
  }),
]
