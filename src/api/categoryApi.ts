import { API_PATHS } from "@/constants/api"
import type { Product } from "@/types/product"
import { axiosInstance } from "./axios"

export const categoryApi = async (id: number): Promise<Product[]> => {
    const {data} = await axiosInstance.get(API_PATHS.CATEGORIES.GET_PRODUCTS(id))
    return data
  }
