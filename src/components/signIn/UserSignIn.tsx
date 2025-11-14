import '@/components/signIn/UserSignIn.scss'
import Button from '@/shared/components/button'
import ProducerNumberForm from '@/shared/components/Form/Producer/ProducerNumberForm'
import { useNavigate } from 'react-router-dom'
import { ROUTE_PATHS } from '@/constants/route'
import { useState } from 'react'
import { userLogInApi } from '@/api/logInApi'
import { saveTokens } from '@/api/auth'
import { useUser } from '@/stores/userContext'
import { jwtDecode, type JwtPayload } from 'jwt-decode'
interface UserJwtPayload extends JwtPayload {
  is_seller?: boolean
  username: string
}
function UserSignIn() {
  const { setUser } = useUser()
  const navigate = useNavigate()
  const [loginInformation, setLoginInformation] = useState({
    email: '',
    password: '',
  })
  // 이메일 인증 확인 유무
  const [isError, setIsError] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginInformation((prev) => ({ ...prev, [name]: value }))
  }
  const handleClick = async () => {
    // 로그인 로직
    try {
      const response = await userLogInApi.post(loginInformation)
      if (response.access) {
        saveTokens(response.access, response.refresh)
        const payload = jwtDecode<UserJwtPayload>(response.access)
        if (payload.is_seller === true) {
          setUser('SELLER', payload.username)
        } else {
          setUser('CONSUMER', payload.username)
        }
        alert(`로그인이 완료되었습니다!`)
        navigate(ROUTE_PATHS.HOME)
      } else {
        // 에러처리 추가 401에러면 이메일인증 오류 -> 403에러면 이메일 및 비밀번호가 틀렸습니다 이런식으로
        setIsError(true)
      }
    } catch (err) {
      setIsError(true)
      console.log(err)
    }
  }
  return (
    <div className="login-box">
      <div className="login-title">로그인</div>
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
        <Button size="lg" variant="filled" type="submit" onClick={handleClick}>
          로그인
        </Button>
        <Button
          size="lg"
          variant="gray"
          type="button"
          onClick={() => navigate(ROUTE_PATHS.SIGNUP.INDEX)}
        >
          회원가입
        </Button>
      </div>
    </div>
  )
}
export default UserSignIn
