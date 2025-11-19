import { API_PATHS } from '@/constants/api'
import { wishLists } from '@/mocks/handlers/myPage/mockData'
import { type AddWishList, type ServerWishList } from '@/types/wishList'
import { axiosInstance } from './axios'

// export const wishListApi = {
//   getWishList: async (): Promise<WishList[]> => {
//     const { data } = await axiosInstance.get(API_PATHS.WISHLISTS.GET_WISHLIST)
//     return mappingWishList(data)
//   },
// }

export const wishListApi = {
  getWishList: async (): Promise<ServerWishList[]> => {
    return wishLists
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
