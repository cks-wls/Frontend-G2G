import '@/components/signUp/producerSignUp.scss'
import Button from '@/shared/components/button'
import ProducerNumberForm from '@/shared/components/Form/Producer/ProducerNumberForm'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
function ProducerSignUp() {
  const location = useLocation()
  const businessNumber = location.state.businessNumber //string 형태로 넘어옴
  const [producerInformation, setProducerInformation] = useState({
    email: '',
    password: '',
    repeatPassword: '',
    companyName: '',
    businessNumber: { businessNumber },
    ceoName: '',
    companyNumber: '',
    companyAddress: '',
  })
  const [isEmailError, setIsEmailError] = useState<boolean | undefined>(
    undefined
  )
  const [isPasswordError, setIsPasswordError] = useState<boolean | undefined>(
    undefined
  )
  const [isRepeatPasswordError, setIsRepeatPasswordError] = useState<
    boolean | undefined
  >(undefined)
  const [isCompanyNameError, setIsCompanyNameError] = useState<
    boolean | undefined
  >(undefined)
  const [isCeoNameError, setIsCeoNameError] = useState<boolean | undefined>(
    undefined
  )
  const [isCompanyNumberError, setIsCompanyNumberError] = useState<
    boolean | undefined
  >(undefined)
  const [isCompanyAddressError, setIsCompanyAddressError] = useState<
    boolean | undefined
  >(undefined)
  useEffect(() => {}, [producerInformation])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProducerInformation((prev) => ({ ...prev, [name]: value }))
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
    if (name === 'repeatPassword') {
      const isValidRepeatPassword = producerInformation.password === value
      setIsRepeatPasswordError(!isValidRepeatPassword)
    }
    if (name === 'companyName') {
      // 회사이름 유효성 검사
      const isValidCompanyName = /^.{1,}$/.test(value)
      setIsCompanyNameError(!isValidCompanyName)
    }
    // 대표이름 유효성 검사
    if (name === 'ceoName') {
      const isValidCeoName = /^.{1,}$/.test(value)
      setIsCeoNameError(!isValidCeoName)
    }
    // 대표번호 유효성 검사
    if (name === 'companyNumber') {
      const isValidCompanyNumber = /^\d{10}$/.test(value)
      setIsCompanyNumberError(!isValidCompanyNumber)
    }
    // 주소 유효성 검사
    if (name === 'companyAddress') {
      const isValidCompanyAddress = /^.{1,}$/.test(value)
      setIsCompanyAddressError(!isValidCompanyAddress)
    }
  }
  // 버튼 활성화 유무
  const isActive = () => {
    if (
      isEmailError === undefined ||
      isPasswordError === undefined ||
      isRepeatPasswordError === undefined ||
      isCompanyNameError === undefined ||
      isCeoNameError === undefined ||
      isCompanyNumberError === undefined ||
      isCompanyAddressError === undefined
    ) {
      return false
    }
    return (
      !isEmailError &&
      !isPasswordError &&
      !isRepeatPasswordError &&
      !isCompanyNameError &&
      !isCeoNameError &&
      !isCompanyNumberError &&
      !isCompanyAddressError
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
          name="repeatPassword"
          placeHolder="비밀번호를 한번 더 입력해주세요"
          onChange={handleChange}
          isError={isRepeatPasswordError}
        />
        <div
          className={`user-error ${isRepeatPasswordError ? '' : 'display-none'}`}
        >
          비밀번호가 일치하지 않아요 확인해 주세요
        </div>
      </div>
      <div className="producer-form-box">
        <div className="producer-form-title">업체명</div>
        <ProducerNumberForm
          name="companyName"
          placeHolder="상호명을 입력해주세요"
          onChange={handleChange}
          isError={isCompanyNameError}
        />
        <div
          className={`user-error ${isCompanyNameError ? '' : 'display-none'}`}
        >
          업체명은 1자 이상 입력해주세요
        </div>
      </div>
      <div className="producer-form-box">
        <div className="producer-form-title">사업자 등록 번호</div>
        <ProducerNumberForm
          name="businessNumber"
          readOnly
          value={businessNumber}
          isDisabled={true}
        />
      </div>
      <div className="producer-form-box">
        <div className="producer-form-title">대표자명</div>
        <ProducerNumberForm
          name="ceoName"
          placeHolder="대표자명을 입력해주세요"
          onChange={handleChange}
          isError={isCeoNameError}
        />
        <div className={`user-error ${isCeoNameError ? '' : 'display-none'}`}>
          대표자명은 1자 이상 입력해주세요
        </div>
      </div>
      <div className="producer-form-box">
        <div className="producer-form-title">대표 전화번호</div>
        <ProducerNumberForm
          name="companyNumber"
          placeHolder="-를 제외한 전화번호 10자리를 입력해주세요"
          onChange={handleChange}
          isError={isCompanyNumberError}
        />
        <div
          className={`user-error ${isCompanyNumberError ? '' : 'display-none'}`}
        >
          -를 제외한 전화번호 10자리를 입력해주세요
        </div>
      </div>
      <div className="producer-form-box">
        <div className="producer-form-title">사업장 주소</div>
        <ProducerNumberForm
          name="companyAddress"
          placeHolder="사업장 주소를 입력해주세요"
          onChange={handleChange}
          isError={isCompanyAddressError}
        />
        <div
          className={`user-error ${isCompanyAddressError ? '' : 'display-none'}`}
        >
          사업자 주소는 1자이상 입력해주세요
        </div>
      </div>
      <Button
        size="lg"
        variant="gray"
        label="가입완료"
        type="submit"
        isActive={isActive()}
        className="producer-signup-btn"
        // submit시 Post
      />
    </div>
  )
}

export default ProducerSignUp
