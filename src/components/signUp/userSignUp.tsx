import { userSignUpApi } from '@/api/signUpApi'
import '@/components/signUp/userSignUp.scss'
import Button from '@/shared/components/button'
import ProducerNumberForm from '@/shared/components/Form/Producer/ProducerNumberForm'
import { useNavigate } from 'react-router-dom'
import { ROUTE_PATHS } from '@/constants/route'
import { useUserFormValidation } from '@/hooks/useUserFormValidation'

function UserSignUp() {
  const navigate = useNavigate()
  const { userInformation, errors, handleChange, isActive } =
    useUserFormValidation()
  const handleSignUp = async () => {
    if (!isActive) return
    try {
      const response = await userSignUpApi.post(userInformation)
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
    <div className="user-signup-box">
      <div className="user-signup-title">회원가입</div>
      <div className="user-email-form-box">
        <div className="user-form-title">이메일</div>
        <ProducerNumberForm
          placeHolder="이메일을 입력해주세요"
          type="email"
          name="email"
          onChange={handleChange}
          isError={errors.email}
        />
        <div className={`user-error ${errors.email ? '' : 'display-none'}`}>
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
          isError={errors.password}
        />
        <div className={`user-error ${errors.password ? '' : 'display-none'}`}>
          영문, 숫자, 특수문자를 포함한 8자 이상으로 입력해주세요
        </div>
        <ProducerNumberForm
          placeHolder="비밀번호를 한번 더 입력해주세요"
          type="password"
          name="password2"
          onChange={handleChange}
          isError={errors.password2}
        />
        <div className={`user-error ${errors.password2 ? '' : 'display-none'}`}>
          비밀번호가 일치하지 않아요 확인해주세요
        </div>
        <div className="user-password-form-box">
          <div className="user-form-title">이름</div>
          <ProducerNumberForm
            placeHolder="사용자의 이름을 입력해주세요"
            name="username"
            onChange={handleChange}
            isError={errors.username}
          />
          <div
            className={`user-error ${errors.username ? '' : 'display-none'}`}
          >
            이름은 1자 이상 입력해주세요
          </div>
        </div>
        <div className="user-password-form-box">
          <div className="user-form-title">주소</div>
          <ProducerNumberForm
            placeHolder="사용자의 주소를 입력해주세요"
            name="address"
            onChange={handleChange}
            isError={errors.address}
          />
          <div className={`user-error ${errors.address ? '' : 'display-none'}`}>
            주소는 1자 이상 입력해주세요
          </div>
        </div>
        <div className="user-password-form-box">
          <div className="user-form-title">전화번호</div>
          <ProducerNumberForm
            placeHolder="-를 제외한 전화번호 11자리를 입력해주세요"
            name="phone_number"
            onChange={handleChange}
            isError={errors.phone_number}
          />
          <div
            className={`user-error ${errors.phone_number ? '' : 'display-none'}`}
          >
            -를 제외한 전화번호 11자리를 입력해주세요
          </div>
        </div>
      </div>
      <Button
        size="lg"
        variant="gray"
        type="submit"
        isActive={isActive}
        className="user-signup-btn"
        onClick={handleSignUp}
      >
        가입완료
      </Button>
    </div>
  )
}

export default UserSignUp
