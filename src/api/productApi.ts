import { axiosInstance } from "@/api/axios"
import { API_PATHS } from "@/constants/api"
import type { Product } from "@/types/product"

export const productApi = {
  getAll: async (): Promise<Product[]> => {
    const {data} = await axiosInstance.get(API_PATHS.PRODUCTS.GET_ALL)
    return data
  }
}