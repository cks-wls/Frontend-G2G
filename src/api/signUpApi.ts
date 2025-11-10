import { axiosInstance } from '@/api/axios'
import { API_PATHS } from '@/constants/api'
import type { UserSignUp } from '@/types/userSignUp'
import type { ProducerSignUp } from '@/types/producerSignUp'

export const userSignUpApi = {
  post: async (userData: UserSignUp): Promise<UserSignUp> => {
    const { data } = await axiosInstance.post(API_PATHS.USER.SIGN_UP, userData)
    return data
  },
}

export const producerSignUpApi = {
  post: async (producerData: ProducerSignUp): Promise<ProducerSignUp> => {
    const { data } = await axiosInstance.post(
      API_PATHS.PRODUCER.SIGN_UP,
      producerData
    )
    return data
  },
}
