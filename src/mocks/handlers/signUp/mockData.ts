import type { UserSignUp } from '@/types/userSignUp'
import type { SellerSignUp } from '@/types/sellerSignUp'

export const userSignUp: UserSignUp[] = [
  {
    id: 1,
    email: 'test01@naver.com',
    password: 'test12345!',
    password2: 'test1235!',
    username: 'test01',
    address: '서울시',
    phone_number: '01012345678',
  },
]
export const sellerSignUp: SellerSignUp[] = [
  {
    id: 1,
    email: 'pd01@naver.com',
    password: 'pdd012345!',
    password2: 'pdd012345!',
    username: 'producer01',
    business_address: '서울시',
    phone_number: '01012341234',
    business_name: '판매처',
    business_number: '1234567890',
  },
]
