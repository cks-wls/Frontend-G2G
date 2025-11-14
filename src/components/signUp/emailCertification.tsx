import '@/components/signUp/emailCertification.scss'
import { ROUTE_PATHS } from '@/constants/route'
import Button from '@/shared/components/button'
import { useNavigate } from 'react-router-dom'
function EmailCertification() {
  const navigate = useNavigate()

  return (
    <div className="email-certification-box">
      <div className="email-form-title">이메일 인증</div>
      <div className="text-box">
        <p>가입 시 입력하신 이메일로 인증 메일이 발송되었습니다.</p>
        <p>이메일의 링크를 클릭하여 계정을 활성화해주세요.</p>
        <Button
          variant="filled"
          size="xlg"
          onClick={() => navigate(ROUTE_PATHS.LOGIN.INDEX)}
          className="email-btn-style"
        >
          로그인하러 가기
        </Button>
      </div>
    </div>
  )
}

export default EmailCertification
