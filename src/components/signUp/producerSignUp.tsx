import { sellerSignUpApi } from '@/api/signUpApi'
import '@/components/signUp/producerSignUp.scss'
import Button from '@/shared/components/button'
import ProducerNumberForm from '@/shared/components/Form/Producer/ProducerNumberForm'
import { ROUTE_PATHS } from '@/constants/route'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSellerFormValidation } from '@/hooks/useSellerFormValidation'
function ProducerSignUp() {
  const navigate = useNavigate()
  const location = useLocation()
  const businessNumber = location.state.businessNumber //string 형태로 넘어옴
  const { sellerInformation, errors, handleChange, isActive } =
    useSellerFormValidation()
  const handleSignUp = async () => {
    if (!isActive) return
    try {
      const payload = { ...sellerInformation, business_number: businessNumber }
      const response = await sellerSignUpApi.post(payload)
      alert(`이메일 인증을 완료해주세요 ${response.username}님!`)
      navigate(ROUTE_PATHS.EMAIL.INDEX)
    } catch (err: any) {
      const errorData = err.response?.data
      if (errorData) {
        let errorMsg = ''
        for (const key in errorData) {
          if (Object.prototype.hasOwnProperty.call(errorData, key)) {
            errorMsg += `${errorData[key].join(', ')}\n`
          }
        }
        alert(errorMsg)
      }
    }
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
          isError={errors.email}
        />
        <div className={`user-error ${errors.email ? '' : 'display-none'}`}>
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
          isError={errors.password}
        />
        <div className={`user-error ${errors.password ? '' : 'display-none'}`}>
          영문, 숫자, 특수문자를 포함한 8자 이상으로 입력해 주세요
        </div>
        <ProducerNumberForm
          type="password"
          name="password2"
          placeHolder="비밀번호를 한번 더 입력해주세요"
          onChange={handleChange}
          isError={errors.password2}
        />
        <div className={`user-error ${errors.password2 ? '' : 'display-none'}`}>
          비밀번호가 일치하지 않아요 확인해 주세요
        </div>
      </div>
      <div className="producer-form-box">
        <div className="producer-form-title">이름</div>
        <ProducerNumberForm
          name="username"
          placeHolder="사용자의 이름을 입력해주세요"
          onChange={handleChange}
          isError={errors.username}
        />
        <div className={`user-error ${errors.username ? '' : 'display-none'}`}>
          이름은 1자 이상 입력해주세요
        </div>
      </div>
      <div className="producer-form-box">
        <div className="producer-form-title">주소</div>
        <ProducerNumberForm
          name="address"
          placeHolder="사용자의 주소를 입력해주세요"
          onChange={handleChange}
          isError={errors.address}
        />
        <div className={`user-error ${errors.address ? '' : 'display-none'}`}>
          주소는 1자 이상 입력해주세요
        </div>
      </div>
      <div className="producer-form-box">
        <div className="producer-form-title">업체명</div>
        <ProducerNumberForm
          name="business_name"
          placeHolder="상호명을 입력해주세요"
          onChange={handleChange}
          isError={errors.business_name}
        />
        <div
          className={`user-error ${errors.business_name ? '' : 'display-none'}`}
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
          isError={errors.phone_number}
        />
        <div
          className={`user-error ${errors.phone_number ? '' : 'display-none'}`}
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
          isError={errors.business_address}
        />
        <div
          className={`user-error ${errors.business_address ? '' : 'display-none'}`}
        >
          사업자 주소는 1자이상 입력해주세요
        </div>
      </div>
      <Button
        size="lg"
        variant="gray"
        type="submit"
        isActive={isActive}
        className="producer-signup-btn"
        onClick={handleSignUp}
      >
        가입완료
      </Button>
    </div>
  )
}

export default ProducerSignUp
