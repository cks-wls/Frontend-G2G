import { useProducts } from '@/hooks/queries/product/useProducts'
import Button from '@/shared/components/button'
import type { WishList } from '@/types/wishList'
import './MyPage.scss'

const WishListContent = ({ data }: { data: WishList }) => {
  const { data: productData } = useProducts()
  const wish = productData.find(({ product_id }) => product_id === data.product)
  return (
    <div className="contents-wrapper">
      <div className="contents-overview">
        <img alt="이미지 들어갈 자리" />
        <section>
          <div>
            <p className="sm-text">{wish?.name}</p>
            <p className="sm-bold">{wish?.price}원</p>
          </div>
          <div className="row-buttons">
            <Button variant="outline" className="cart-button">
              삭제
            </Button>
            <Button variant="outline" className="buy-button">
              장바구니 담기
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default WishListContent
