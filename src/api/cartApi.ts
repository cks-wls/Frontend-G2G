import { API_PATHS } from '@/constants/api'
import { mappingCart, type Cart, type ServerCart } from '@/types/cart'
import { axiosInstance } from './axios'

export const cartApi = {
  getCartList: async (): Promise<Cart[]> => {
    const { data } = await axiosInstance.get<ServerCart[]>(API_PATHS.CARTS.GET)
    return mappingCart(data)
  },
}
