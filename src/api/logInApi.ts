import { axiosInstance } from '@/api/axios'
import { API_PATHS } from '@/constants/api'
import type { UserLogIn, UserLogInResponse } from '@/types/userLogin'

export const userLogInApi = {
  post: async (logInData: UserLogIn): Promise<UserLogInResponse> => {
    const { data } = await axiosInstance.post(API_PATHS.LOGIN, logInData)
    return data
  },
}
