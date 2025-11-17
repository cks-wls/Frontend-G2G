import { axiosInstance } from '@/api/axios'
import { API_PATHS } from '@/constants/api'
import {
  mappingProductList,
  type ProductListType,
  type ServerProductListType,
} from '@/types/productList'

// 정렬 기준
export const SORT_OPTIONS = [
  'created_at',
  '-sale_price',
  'sale_price',
  'sales_count',
  'review_count',
  'discount_price',
  'wish_count',
] as const

export type SortValue = (typeof SORT_OPTIONS)[number]

// 쿼리 파라미터
export interface ProductListParams {
  category_name?: string
  seller_business_name?: string
  q?: string
  ordering?: SortValue
  // 추후 페이지네이션 확장 대비
  page?: number
  limit?: number
}

export const productApi = {
  getProductList: async (
    params: ProductListParams
  ): Promise<ProductListType[]> => {
    // axios의 params 옵션 사용
    // 전달된 객체를 쿼리 스트링으로 자동 변환

    const { data } = await axiosInstance.get<ServerProductListType[]>(
      API_PATHS.PRODUCTS.GET_PRODUCT_LIST,
      {
        params,
      }
    )
    return mappingProductList(data)
  },
}
