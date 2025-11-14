import { cartApi } from '@/api/cartApi'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const useDeleteCartItems = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({
      cartId,
      productIds,
    }: {
      cartId: string
      productIds: string[]
    }) => await cartApi.deleteCartItems(cartId, productIds),
    // 삭제 성공 시 useCart 다시 실행
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] }),
  })
}

export default useDeleteCartItems
