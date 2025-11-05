import { API_PATHS } from "@/constants/api"
import type { Product } from "@/types/product"
import { axiosInstance } from "@/api/axios"

export const productAPI = {
  list: async (): Promise<Product[]> => {
    const {data} = await axiosInstance.get(API_PATHS.PRODUCTS.LIST)
    return data
  }
}