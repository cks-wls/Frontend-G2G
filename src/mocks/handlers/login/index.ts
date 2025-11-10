import { API_PATHS } from '@/constants/api'
import { http, HttpResponse } from 'msw'
import { sellerSignUp, userSignUp } from '../signUp/mockData'

export const userLoginHandlers = [
  //로그인
  http.post(API_PATHS.LOGIN, async ({ request }) => {
    const body = (await request.json()) as { email: string; password: string }
    const { email, password } = body
    // 사용자 및 사업자 데이터 합치기
    const allUsers = [
      ...userSignUp.map((val) => ({ ...val, role: 'user' })),
      ...sellerSignUp.map((el) => ({ ...el, role: 'seller' })),
    ]
    const user = allUsers.find(
      (val) => val.email === email && val.password === password
    )
    if (!user) {
      return HttpResponse.json({ message: '로그인 실패' })
    }
    return HttpResponse.json({
      message: '로그인 성공',
      email: user.email,
      username: user.username,
      role: user.role,
    })
  }),
]
