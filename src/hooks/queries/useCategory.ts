import { categoryApi } from '@/api/categoryApi'
import type { Product } from '@/types/product'
import { useQuery } from '@tanstack/react-query'

export const useCategory = (id: number) => {
  return useQuery<Product[]>({
    queryKey: ['category', id],
    queryFn: () => categoryApi(id),
    initialData: [],
  })
}
