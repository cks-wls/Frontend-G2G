import { cartApi } from '@/api/cartApi'
import type { Cart } from '@/types/cart'
import { useQuery } from '@tanstack/react-query'

const useCart = () => {
  return useQuery<Cart[]>({
    queryKey: ['cart'],
    queryFn: cartApi.getCartList,
    initialData: [],
  })
}

export default useCart

