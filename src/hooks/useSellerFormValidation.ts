import { useCallback, useState } from 'react'
import type { SellerSignUp } from '@/types/sellerSignUp'

export interface SellerFormErrors {
  email?: boolean
  password?: boolean
  password2?: boolean
  username?: boolean
  business_address?: boolean
  address?: boolean
  phone_number?: boolean
  business_name?: boolean
  business_number?: boolean
}
// 사업자 회원가입 유효성 검사 커스텀 훅
export function useSellerFormValidation() {
  const [sellerInformation, setSellerInformation] = useState<SellerSignUp>({
    email: '',
    password: '',
    password2: '',
    username: '',
    business_address: '',
    address: '',
    phone_number: '',
    business_name: '',
    business_number: '',
  })
  const [errors, setErrors] = useState<SellerFormErrors>({
    email: undefined,
    password: undefined,
    password2: undefined,
    username: undefined,
    business_address: undefined,
    address: undefined,
    phone_number: undefined,
    business_name: undefined,
    business_number: false,
  })
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setSellerInformation((prev) => ({ ...prev, [name]: value }))
      // 이메일 유효성 검사
      if (name === 'email') {
        setErrors((prev) => ({
          ...prev,
          email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        }))
      }
      // 비밀번호 유효성 검사
      if (name === 'password') {
        setErrors((prev) => ({
          ...prev,
          password:
            !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(
              value
            ),
        }))
      }
      // 비밀번호 확인 유효성 검사
      if (name === 'password2') {
        setErrors((prev) => ({
          ...prev,
          password2: sellerInformation.password !== value,
        }))
      }
      // 이름 유효성 검사
      if (name === 'username') {
        setErrors((prev) => ({ ...prev, username: !/^.{1,}$/.test(value) }))
      }
      //   회사이름 유효성 검사
      if (name === 'business_name') {
        setErrors((prev) => ({
          ...prev,
          business_name: !/^.{1,}$/.test(value),
        }))
      }
      // 사업장 주소 유효성 검사
      if (name === 'business_address') {
        setErrors((prev) => ({
          ...prev,
          business_address: !/^.{1,}$/.test(value),
        }))
      }
      // 주소 유효성 검사
      if (name === 'address') {
        setErrors((prev) => ({ ...prev, address: !/^.{1,}$/.test(value) }))
      }

      // 전화번호 유효성 검사
      if (name === 'phone_number') {
        setErrors((prev) => ({
          ...prev,
          phone_number: !/^\d{10}$/.test(value),
        }))
      }
    },
    [sellerInformation]
  )
  const isActive = Object.values(errors).every((el) => el === false)
  return { sellerInformation, errors, handleChange, isActive }
}
