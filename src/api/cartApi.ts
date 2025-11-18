import { API_PATHS } from '@/constants/api'
import { mockCart } from '@/mocks/handlers/cart/mockData'
import { mappingGetCart, type Cart, type ServerCart } from '@/types/cart'
import { axiosInstance } from './axios'

export const cartApi = {
  // getCartList: async (): Promise<Cart[]> => {
  //   const { data } = await axiosInstance.get<ServerCart[]>(API_PATHS.CARTS.GET)
  //   return mappingGetCart(data)
  // },

  getCartList: async (): Promise<Cart[]> => {
    return mappingGetCart(mockCart)
  },

  updateCartQuantity: async (productId: number, quantity: number) => {
    const { data } = await axiosInstance.patch<ServerCart>(
      API_PATHS.CARTS.UPDATE,
      { product_id: productId, quantity }
    )
    return data
  },

  deleteCartItems: async (productIds: number[]) => {
    const { data } = await axiosInstance.delete<ServerCart>(
      API_PATHS.CARTS.DELETE,
      { data: { product_ids: productIds } }
    )
    return data
  },
}
