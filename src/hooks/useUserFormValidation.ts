import { useCallback, useState } from 'react'
import type { UserSignUp } from '@/types/userSignUp'

export interface UserFormErrors {
  email?: boolean
  password?: boolean
  password2?: boolean
  username?: boolean
  address?: boolean
  phone_number?: boolean
}
// 사용자 회원가입 유효성 검사 커스텀 훅
export function useUserFormValidation() {
  const [userInformation, setUserInformation] = useState<UserSignUp>({
    email: '',
    password: '',
    password2: '',
    username: '',
    address: '',
    phone_number: '',
  })
  const [errors, setErrors] = useState<UserFormErrors>({
    email: undefined,
    password: undefined,
    password2: undefined,
    username: undefined,
    address: undefined,
    phone_number: undefined,
  })
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setUserInformation((prev) => ({ ...prev, [name]: value }))
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
          password2: userInformation.password !== value,
        }))
      }
      // 이름 유효성 검사
      if (name === 'username') {
        setErrors((prev) => ({ ...prev, username: !/^.{1,}$/.test(value) }))
      }

      // 주소 유효성 검사
      if (name === 'address') {
        setErrors((prev) => ({ ...prev, address: !/^.{1,}$/.test(value) }))
      }

      // 전화번호 유효성 검사
      if (name === 'phone_number') {
        setErrors((prev) => ({
          ...prev,
          phone_number: !/^\d{11}$/.test(value),
        }))
      }
    },
    [userInformation]
  )
  const isActive = Object.values(errors).every((el) => el === false)
  return { userInformation, errors, handleChange, isActive }
}
