import '@/components/signUp/emailCertification.scss'
import { ROUTE_PATHS } from '@/constants/route'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// 임시화면 (성공 상태를 어케 받을 것인지?? )
function EmailCertification() {
  const status: 'loading' | 'success' | 'error' = 'success'
  const navigate = useNavigate()
  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        navigate(ROUTE_PATHS.LOGIN.INDEX)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [status, navigate])

  return (
    <div className="email-certification-box">
      <div className="email-form-title">이메일 인증</div>
      <div className="text-box">
        {status === 'success' && <p>회원가입이 완료되었습니다!</p>}
        <p>가입 시 입력하신 이메일로 인증 메일이 발송되었습니다.</p>
        <p>이메일의 링크를 클릭하여 계정을 활성화해주세요.</p>
      </div>

      {status === 'loading' && (
        <p className="certificate">이메일 인증을 확인 중입니다...</p>
      )}
      {status === 'success' && (
        <p className="certificate blue">
          인증이 완료되었습니다! 잠시 후 로그인 페이지로 이동합니다.
        </p>
      )}
      {status === 'error' && (
        <p className="certificate red">
          인증에 실패했습니다. 이메일 링크가 올바른지 확인해주세요.
        </p>
      )}
    </div>
  )
}

export default EmailCertification
