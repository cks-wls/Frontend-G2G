import { cartApi } from '@/api/cartApi'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const useDeleteCartItems = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({
      productIds,
    }: {
      productIds: number[]
    }) => await cartApi.deleteCartItems(productIds),
    // 삭제 성공 시 useCart 다시 실행
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] }),
  })
}

export default useDeleteCartItems
