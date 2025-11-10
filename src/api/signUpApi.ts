import { axiosInstance } from '@/api/axios'
import { API_PATHS } from '@/constants/api'
import type { UserSignUp } from '@/types/userSignUp'
import type { SellerSignUp } from '@/types/sellerSignUp'

export const userSignUpApi = {
  post: async (userData: UserSignUp): Promise<UserSignUp> => {
    const { data } = await axiosInstance.post(API_PATHS.USER.SIGN_UP, userData)
    return data
  },
}

export const sellerSignUpApi = {
  post: async (sellerData: SellerSignUp): Promise<SellerSignUp> => {
    const { data } = await axiosInstance.post(
      API_PATHS.SELLER.SIGN_UP,
      sellerData
    )
    return data
  },
}
