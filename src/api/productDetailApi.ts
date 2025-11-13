import { axiosInstance } from '@/api/axios'
import { API_PATHS } from '@/constants/api'
import type { Product } from '@/types/product'

export const productDetailApi = {
  getById: async (id: number): Promise<Product> => {
    const { data } = await axiosInstance.get(API_PATHS.PRODUCTS.GET_ID(id))
    return data
  },
}
