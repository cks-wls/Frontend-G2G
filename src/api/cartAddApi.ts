import { API_PATHS } from '@/constants/api'
import type { CartAddItem } from '@/types/cardAdd'
import { axiosInstance } from './axios'

export const cartAddApi = {
  cartAdd: async (cartAddData: CartAddItem): Promise<CartAddItem> => {
    const { data } = await axiosInstance.post(API_PATHS.CARTS.ADD, cartAddData)
    return data
  },
}
