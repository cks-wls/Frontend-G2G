// 회원가입 폼과 스타일링이 똑같아서 스타일파일 임포트 하지 않았습니다!
import { ROUTE_PATHS } from '@/constants/route'
import { useNavigate } from 'react-router-dom'
function SignUp() {
  const navigate = useNavigate()
  return (
    <div className="sign-up-box">
      <div className="sign-up-title"> 로그인</div>
      <div className="choose-type">로그인하실 회원 유형을 선택해주세요</div>
      <div className="type-box">
        <div
          className="box user"
          onClick={() => navigate(ROUTE_PATHS.LOGIN.USER)}
        >
          <div className="type-title">개인회원</div>
          <div className="type-description">신선한 상품을 구매하고 싶어요</div>
        </div>
        <div
          className="box producer"
          onClick={() => navigate(ROUTE_PATHS.LOGIN.USER)}
        >
          <div className="type-title">사업자회원</div>
          <div className="type-description">신선한 상품을 판매하고 싶어요</div>
        </div>
      </div>
    </div>
  )
}
export default SignUp
