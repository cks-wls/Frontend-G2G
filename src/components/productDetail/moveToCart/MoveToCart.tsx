import AlertImg from '@/assets/images/productDetail/alert.png'
import Button from '@/shared/components/button'
import { useNavigate } from 'react-router-dom'
import { ROUTE_PATHS } from '@/constants/route'
interface MoveToCartProps {
  onClick: () => void
}
function MoveToCart({ onClick }: MoveToCartProps) {
  const navigate = useNavigate()
  return (
    <div className="back-drop">
      <div className="back-to-login-modal-box">
        <img src={AlertImg} className="img-box" />
        <div className="back-to-login-modal-text">
          상품이 장바구니에 담겼습니다! <br />
          장바구니로 이동하시겠습니까?
        </div>
        <div className="button-box">
          <Button size="ssm" variant="outline" onClick={onClick}>
            취소
          </Button>
          <Button
            size="ssm"
            variant="filled"
            onClick={() => navigate(ROUTE_PATHS.CART)}
          >
            확인
          </Button>
        </div>
      </div>
    </div>
  )
}
export default MoveToCart
