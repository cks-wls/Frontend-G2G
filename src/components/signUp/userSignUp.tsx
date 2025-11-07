import '@/components/signUp/userSignUp.scss'
import Button from '@/shared/components/button'
import ProducerNumberForm from '@/shared/components/Form/Producer/ProducerNumberForm'
import { useEffect, useState } from 'react'

function UserSignUp() {
  // 이메일 유효성 , 비밀번호 유효성, 버튼 상태
  const [userInformation, setUserInformation] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  })
  // 유저정보 관리
  const [isEmailError, setIsEmailError] = useState<boolean | undefined>(
    undefined
  )
  const [isPasswordError, setIsPasswordError] = useState<boolean | undefined>(
    undefined
  )
  const [isRepeatPasswordError, setIsRepeatPasswordError] = useState<
    boolean | undefined
  >(undefined)

  useEffect(() => {}, [userInformation])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserInformation((prev) => ({ ...prev, [name]: value }))
    // 이메일 유효성 검사
    if (name === 'email') {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      setIsEmailError(!isValidEmail)
    }
    // 비밀번호 유효성 검사
    if (name === 'password') {
      const isValidPassword =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(
          value
        )
      setIsPasswordError(!isValidPassword)
    }
    if (name === 'repeatPassword') {
      // 비밀번호 재확인 유효성 검사
      const isValidRepeatPassword = userInformation.password === value
      setIsRepeatPasswordError(!isValidRepeatPassword)
    }
  }

  // 버튼 활성화 유무
  const isActive = () => {
    if (
      isEmailError === undefined ||
      isPasswordError === undefined ||
      isRepeatPasswordError === undefined
    ) {
      return false
    }
    return !isEmailError && !isPasswordError && !isRepeatPasswordError
  }

  return (
    <div className="user-signup-box">
      <div className="user-signup-title">회원가입</div>
      <div className="user-email-form-box">
        <div className="user-form-title">이메일</div>
        <ProducerNumberForm
          placeHolder="이메일을 입력해주세요"
          type="email"
          name="email"
          onChange={handleChange}
          isError={isEmailError}
        />
        <div className={`user-error ${isEmailError ? '' : 'display-none'}`}>
          이메일 주소가 올바르지 않아요
        </div>
      </div>
      <div className="user-password-form-box">
        <div className="user-form-title">비밀번호</div>
        <ProducerNumberForm
          placeHolder="영문, 숫자, 특수문자가 모두 들어간 8자 이상"
          type="password"
          name="password"
          onChange={handleChange}
          isError={isPasswordError}
        />
        <div className={`user-error ${isPasswordError ? '' : 'display-none'}`}>
          영문, 숫자, 특수문자를 포함한 8자 이상으로 입력해주세요
        </div>
        <ProducerNumberForm
          placeHolder="비밀번호를 한번 더 입력해주세요"
          type="password"
          name="repeatPassword"
          onChange={handleChange}
          isError={isRepeatPasswordError}
        />
        <div
          className={`user-error ${isRepeatPasswordError ? '' : 'display-none'}`}
        >
          비밀번호가 일치하지 않아요 확인해주세요
        </div>
      </div>
      <Button
        size="lg"
        variant="gray"
        label="가입완료"
        type="submit"
        isActive={isActive()}
        className="user-signup-btn"
        // submit시 Post
      />
    </div>
  )
}

export default UserSignUp
