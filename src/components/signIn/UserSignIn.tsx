import '@/components/signIn/SignIn.scss'
import Button from '@/shared/components/button'
import ProducerNumberForm from '@/shared/components/Form/Producer/ProducerNumberForm'
import { useNavigate } from 'react-router-dom'
import { ROUTE_PATHS } from '@/constants/route'
function UserSignIn() {
  const navigate = useNavigate()
  return (
    <div className="login-box">
      <div className="login-title">로그인</div>
      <div className="form-box">
        <div className="login-form-title">이메일</div>
        <ProducerNumberForm
          placeHolder="이메일을 입력해주세요"
          type="email"
          name="email"
        />
      </div>
      <div className="form-box-bottom">
        <div className="login-form-title">비밀번호</div>
        <ProducerNumberForm
          placeHolder="비밀번호를 입력해주세요"
          type="password"
          name="password"
        />
      </div>
      <div className="btn-box">
        <Button size="lg" variant="filled" type="submit" label="로그인" />
        <Button
          size="lg"
          variant="gray"
          type="button"
          label="회원가입"
          onClick={() => navigate(ROUTE_PATHS.SIGNUP.INDEX)}
        />
      </div>
    </div>
  )
}

export default UserSignIn
