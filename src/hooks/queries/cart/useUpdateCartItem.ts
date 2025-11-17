import { cartApi } from '@/api/cartApi'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const useUpdateCartItem = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({
      cartId,
      productId,
      quantity,
    }: {
      cartId: string
      productId: string
      quantity: number
    }) => await cartApi.updateCartQuantity(cartId, productId, quantity),

    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] }),
  })
}

export default useUpdateCartItem
