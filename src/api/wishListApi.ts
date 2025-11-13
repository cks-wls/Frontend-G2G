import { API_PATHS } from '@/constants/api'
import { axiosInstance } from './axios'
import { mappingWishList, type WishList } from '@/types/wishList'

export const wishListApi = {
  getWishList: async (): Promise<WishList[]> => {
    const { data } = await axiosInstance.get(API_PATHS.WISHLISTS.GET_WISHLIST)
    return mappingWishList(data)
  },
}
