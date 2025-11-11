import { productApi } from '@/api/productApi'
import type { Product } from '@/types/product'
import { useQuery } from '@tanstack/react-query'

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: productApi.getAll,
    initialData: [],
  })
}
