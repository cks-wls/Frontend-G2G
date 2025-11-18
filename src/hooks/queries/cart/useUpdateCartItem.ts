import { cartApi } from '@/api/cartApi'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const useUpdateCartItem = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({
      productId,
      quantity,
    }: {
      productId: number
      quantity: number
    }) => await cartApi.updateCartQuantity(productId, quantity),

    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] }),
  })
}

export default useUpdateCartItem
