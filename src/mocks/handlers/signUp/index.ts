import { API_PATHS } from '@/constants/api'
import { http, HttpResponse } from 'msw'
import { userSignUp } from './mockData'
import { sellerSignUp } from './mockData'

export const userSignUpHandlers = [
  // 사용자 회원가입
  http.post(API_PATHS.USER.SIGN_UP, () => {
    return HttpResponse.json(userSignUp[0])
  }),
]
export const sellerSignUpHandlers = [
  // 생산자 회원가입
  http.post(API_PATHS.SELLER.SIGN_UP, () => {
    return HttpResponse.json(sellerSignUp[0])
  }),
]
