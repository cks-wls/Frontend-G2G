import '@/components/productDetail/backToLogin/BackToLogin.scss'
import AlertImg from '@/assets/images/productDetail/alert.png'
import Button from '@/shared/components/button'
import { useNavigate } from 'react-router-dom'
import { ROUTE_PATHS } from '@/constants/route'
interface BackToLoginProps {
  onClick: () => void
}
function BackToLogin({ onClick }: BackToLoginProps) {
  const navigate = useNavigate()
  return (
    <div className="back-drop">
      <div className="back-to-login-modal-box">
        <img src={AlertImg} className="img-box" />
        <div className="back-to-login-modal-text">
          로그인 후 이용 가능합니다
        </div>
        <div className="button-box">
          <Button size="ssm" variant="outline" onClick={onClick}>
            취소
          </Button>
          <Button
            size="ssm"
            variant="filled"
            onClick={() => navigate(ROUTE_PATHS.LOGIN.INDEX)}
          >
            확인
          </Button>
        </div>
      </div>
    </div>
  )
}
export default BackToLogin
