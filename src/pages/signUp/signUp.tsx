import '@/pages/signUp/signUp.scss'
import { useNavigate } from 'react-router-dom'
function SignUp() {
  const navigate = useNavigate()
  return (
    <div className="sign-up-box">
      <div className="sign-up-title">회원가입</div>
      <div className="choose-type">가입하실 회원 유형을 선택해주세요</div>
      <div className="type-box">
        <div className="box user" onClick={() => navigate('/signup/user')}>
          <div className="type-title">개인회원</div>
          <div className="type-description">신선한 상품을 구매하고 싶어요</div>
        </div>
        <div
          className="box producer"
          onClick={() => navigate('/signup/seller-certification')}
        >
          <div className="type-title">사업자회원</div>
          <div className="type-description">신선한 상품을 판매하고 싶어요</div>
        </div>
      </div>
    </div>
  )
}
export default SignUp
