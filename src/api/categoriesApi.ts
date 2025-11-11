import { API_PATHS } from "@/constants/api"
import type { Product } from "@/types/product"
import { axiosInstance } from "./axios"

export const categoriesApi = async (id: number): Promise<Product[]> => {
    const {data} = await axiosInstance.get(API_PATHS.CATEGORIES(id))
    return data
  }
