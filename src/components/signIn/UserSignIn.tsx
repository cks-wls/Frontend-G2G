import '@/components/signIn/UserSignIn.scss'
import Button from '@/shared/components/button'
import ProducerNumberForm from '@/shared/components/Form/Producer/ProducerNumberForm'
import { useNavigate } from 'react-router-dom'
import { ROUTE_PATHS } from '@/constants/route'
import { useState } from 'react'
import { userLogInApi } from '@/api/logInApi'

function UserSignIn() {
  const navigate = useNavigate()
  const [loginInformation, setLoginInformation] = useState({
    email: '',
    password: '',
  })
  const [isError, setIsError] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginInformation((prev) => ({ ...prev, [name]: value }))
  }
  const handleClick = async () => {
    // 로그인 로직
    try {
      const response = await userLogInApi.post(loginInformation)
      if (response.message === '로그인 성공') {
        alert(`환영합니다 ${response.username}님!`)
        navigate(ROUTE_PATHS.HOME)
        // 추후에 헤더 수정하면 사업자인지 유저인지 추가
      } else {
        setIsError(true)
      }
    } catch (err) {
      setIsError(true)
    }
  }
  return (
    <div className="login-box">
      <div className="login-title">사업자 로그인</div>
      <div className="form-box">
        <div className="login-form-title">이메일</div>
        <ProducerNumberForm
          placeHolder="이메일을 입력해주세요"
          type="email"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="form-box-bottom">
        <div className="login-form-title">비밀번호</div>
        <ProducerNumberForm
          placeHolder="비밀번호를 입력해주세요"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <div className={`error-box ${isError ? '' : 'display-none'}`}>
          이메일 혹은 비밀번호가 틀렸습니다.
        </div>
      </div>
      <div className="btn-box">
        <Button
          size="lg"
          variant="filled"
          type="submit"
          label="로그인"
          onClick={handleClick}
        />
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
