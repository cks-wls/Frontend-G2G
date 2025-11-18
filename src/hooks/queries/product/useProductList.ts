import { productApi, type ProductListParams } from '@/api/productApi'
import type { ProductListType } from '@/types/productList'
import { useQuery } from '@tanstack/react-query'

const useProductList = (params: ProductListParams = {}) => {
  return useQuery<ProductListType[]>({
    queryKey: ['products', params],
    queryFn: () => productApi.getProductList(params),
    initialData: [],
  })
}

export default useProductList
