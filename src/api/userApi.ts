import { API_PATHS } from '@/constants/api'
import type { UserType } from '@/types/user'
import { axiosInstance } from './axios'

const userApi = {
  getInfo: async (user_id: number): Promise<UserType> => {
    const { data } = await axiosInstance.get(API_PATHS.USER.GET(user_id))
    return data
  },
}

export default userApi
