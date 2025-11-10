import { API_PATHS } from '@/constants/api'
import { http, HttpResponse } from 'msw'
import { userSignUp } from './mockData'
import { producerSignUp } from './mockData'

export const userSignUpHandlers = [
  // 사용자 회원가입
  http.post(API_PATHS.USER.SIGN_UP, () => {
    return HttpResponse.json(userSignUp[0])
  }),
]
export const producerSignUpHandlers = [
  // 생산자 회원가입
  http.post(API_PATHS.PRODUCER.SIGN_UP, () => {
    return HttpResponse.json(producerSignUp[0])
  }),
]
