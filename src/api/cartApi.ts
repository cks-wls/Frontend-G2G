import { API_PATHS } from '@/constants/api'
import { mappingGetCart, type Cart, type ServerCart } from '@/types/cart'
import { axiosInstance } from './axios'

export const cartApi = {
  getCartList: async (): Promise<Cart[]> => {
    const { data } = await axiosInstance.get<ServerCart[]>(API_PATHS.CARTS.GET)
    return mappingGetCart(data)
  },

  // TODO: patch
  updateCartQuantity: async (productId: string, quantity: number) => {
    const { data } = await axiosInstance.put<ServerCart>(
      API_PATHS.CARTS.UPDATE(productId),
      { quantity }
    )
    return data
  },

  // TODO: 장바구니 상품 선택 삭제, 전체 삭제 모두 가능 하도록 productId 배열로 보낼 수 있게 수정 요청
  deleteCartItems: async (cartId: string, productIds: string[]) => {
    const { data } = await axiosInstance.delete<ServerCart>(
      API_PATHS.CARTS.DELETE(cartId),
      { data: { productIds } }
    )
    return data
  },
}
