import { wishListApi } from '@/api/wishListApi'
import type { WishList } from '@/types/wishList'
import { useQuery } from '@tanstack/react-query'

export const useWishList = () => {
  return useQuery<WishList[]>({
    queryKey: ['wish'],
    queryFn: wishListApi.getWishList,
    initialData: [],
  })
}
