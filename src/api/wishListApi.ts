import { API_PATHS } from '@/constants/api'
import { axiosInstance } from './axios'
import {
  mappingWishList,
  type WishList,
  type AddWishList,
} from '@/types/wishList'

export const wishListApi = {
  getWishList: async (): Promise<WishList[]> => {
    const { data } = await axiosInstance.get(API_PATHS.WISHLISTS.GET_WISHLIST)
    return mappingWishList(data)
  },
}

export const addWishListApi = {
  postWishList: async (wishListAddData: AddWishList): Promise<AddWishList> => {
    const { data } = await axiosInstance.post(
      API_PATHS.WISHLISTS.GET_WISHLIST,
      wishListAddData
    )
    return data
  },
}
