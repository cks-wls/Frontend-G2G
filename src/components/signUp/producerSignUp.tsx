import { sellerSignUpApi } from '@/api/signUpApi'
import '@/components/signUp/producerSignUp.scss'
import Button from '@/shared/components/button'
import ProducerNumberForm from '@/shared/components/Form/Producer/ProducerNumberForm'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
function ProducerSignUp() {
  const location = useLocation()
  const businessNumber = location.state.businessNumber //string 형태로 넘어옴
  // api 명세서랑 변수 이름 맞춤
  const [sellerInformation, setSellerInformation] = useState({
    email: '',
    password: '',
    password2: '',
    business_name: '',
    business_address: '',
    business_number: businessNumber,
    username: '',
    phone_number: '',
    // address: '',
  })
  const [isEmailError, setIsEmailError] = useState<boolean | undefined>(
    undefined
  )
  const [isPasswordError, setIsPasswordError] = useState<boolean | undefined>(
    undefined
  )
  const [isPassword2Error, setIsRepeatPasswordError] = useState<
    boolean | undefined
  >(undefined)
  const [isBusinessNameError, setIsBusinessNameError] = useState<
    boolean | undefined
  >(undefined)
  const [isUserNameError, setIsUserNameError] = useState<boolean | undefined>(
    undefined
  )
  const [isPhoneNumberError, setIsPhoneNumberError] = useState<
    boolean | undefined
  >(undefined)
  const [isBusinessAddressError, setIsBusinessAddressError] = useState<
    boolean | undefined
  >(undefined)
  const handleSignUp = async () => {
    if (!isActive) return
    try {
      const response = await sellerSignUpApi.post(sellerInformation)
      alert(`환영합니다 ${response.username}님!`)
      // 이메일 인증 화면으로 navigate
    } catch (err) {
      console.log('가입 실패: ', err)
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSellerInformation((prev) => ({ ...prev, [name]: value }))
    //이메일 유효성 검사
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
    // 비밀번호 재확인 유효성 검사
    if (name === 'password2') {
      const isValidRepeatPassword = sellerInformation.password === value
      setIsRepeatPasswordError(!isValidRepeatPassword)
    }
    if (name === 'business_name') {
      // 회사이름 유효성 검사
      const isValidBusinessName = /^.{1,}$/.test(value)
      setIsBusinessNameError(!isValidBusinessName)
    }
    // 사용자 이름 유효성 검사
    if (name === 'username') {
      const isValidUserName = /^.{1,}$/.test(value)
      setIsUserNameError(!isValidUserName)
    }
    // 대표번호 유효성 검사
    if (name === 'phone_number') {
      const isValidPhoneNumber = /^\d{10}$/.test(value)
      setIsPhoneNumberError(!isValidPhoneNumber)
    }
    // 주소 유효성 검사
    if (name === 'business_address') {
      const isValidBusinessAddress = /^.{1,}$/.test(value)
      setIsBusinessAddressError(!isValidBusinessAddress)
    }
  }
  // 버튼 활성화 유무
  const isActive = () => {
    if (
      isEmailError === undefined ||
      isPasswordError === undefined ||
      isPassword2Error === undefined ||
      isUserNameError == undefined ||
      isPhoneNumberError == undefined ||
      isBusinessNameError === undefined ||
      isBusinessAddressError === undefined
    ) {
      return false
    }
    return (
      !isEmailError &&
      !isPasswordError &&
      !isPassword2Error &&
      !isUserNameError &&
      !isPhoneNumberError &&
      !isBusinessNameError &&
      !isBusinessAddressError
    )
  }
  return (
    <div className="producer-signup-box">
      <div className="producer-signup-title">사업자 회원가입</div>
      <div className="producer-form-box">
        <div className="producer-form-title">이메일</div>
        <ProducerNumberForm
          type="email"
          name="email"
          placeHolder="이메일을 입력해주세요"
          onChange={handleChange}
          isError={isEmailError}
        />
        <div className={`user-error ${isEmailError ? '' : 'display-none'}`}>
          이메일 주소가 올바르지 않아요
        </div>
      </div>
      <div className="producer-form-box">
        <div className="producer-form-title">비밀번호</div>
        <ProducerNumberForm
          type="password"
          name="password"
          placeHolder="영문, 숫자, 특수문자가 모두 들어간 8자 이상"
          onChange={handleChange}
          isError={isPasswordError}
        />
        <div className={`user-error ${isPasswordError ? '' : 'display-none'}`}>
          영문, 숫자, 특수문자를 포함한 8자 이상으로 입력해 주세요
        </div>
        <ProducerNumberForm
          type="password"
          name="password2"
          placeHolder="비밀번호를 한번 더 입력해주세요"
          onChange={handleChange}
          isError={isPassword2Error}
        />
        <div className={`user-error ${isPassword2Error ? '' : 'display-none'}`}>
          비밀번호가 일치하지 않아요 확인해 주세요
        </div>
      </div>
      <div className="producer-form-box">
        <div className="producer-form-title">이름</div>
        <ProducerNumberForm
          name="username"
          placeHolder="사용자의 이름을 입력해주세요"
          onChange={handleChange}
          isError={isUserNameError}
        />
        <div className={`user-error ${isUserNameError ? '' : 'display-none'}`}>
          이름은 1자 이상 입력해주세요
        </div>
      </div>
      <div className="producer-form-box">
        <div className="producer-form-title">업체명</div>
        <ProducerNumberForm
          name="business_name"
          placeHolder="상호명을 입력해주세요"
          onChange={handleChange}
          isError={isBusinessNameError}
        />
        <div
          className={`user-error ${isBusinessNameError ? '' : 'display-none'}`}
        >
          업체명은 1자 이상 입력해주세요
        </div>
      </div>
      <div className="producer-form-box">
        <div className="producer-form-title">사업자 등록 번호</div>
        <ProducerNumberForm
          name="business_number"
          readOnly
          value={businessNumber}
          isDisabled={true}
        />
      </div>
      <div className="producer-form-box">
        <div className="producer-form-title">대표 전화번호</div>
        <ProducerNumberForm
          name="phone_number"
          placeHolder="-를 제외한 전화번호 10자리를 입력해주세요"
          onChange={handleChange}
          isError={isPhoneNumberError}
        />
        <div
          className={`user-error ${isPhoneNumberError ? '' : 'display-none'}`}
        >
          -를 제외한 전화번호 10자리를 입력해주세요
        </div>
      </div>
      <div className="producer-form-box">
        <div className="producer-form-title">사업장 주소</div>
        <ProducerNumberForm
          name="business_address"
          placeHolder="사업장 주소를 입력해주세요"
          onChange={handleChange}
          isError={isBusinessAddressError}
        />
        <div
          className={`user-error ${isBusinessAddressError ? '' : 'display-none'}`}
        >
          사업자 주소는 1자이상 입력해주세요
        </div>
      </div>
      <Button
        size="lg"
        variant="gray"
        type="submit"
        isActive={isActive()}
        className="producer-signup-btn"
        onClick={handleSignUp}
      >
        가입완료
      </Button>
    </div>
  )
}

export default ProducerSignUp
