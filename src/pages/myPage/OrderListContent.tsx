import { useFormatDate } from '@/hooks/useFormatDate'
import Button from '@/shared/components/button'
import type { OrderItems } from '@/types/orders'

const OrderListContents = ({ data }: { data: OrderItems }) => {
  const formattedDate = useFormatDate(data.orderDate)

  return (
    <div className="contents-wrapper">
      <div className="contents-overview">
        <img alt={`${data.productName} 이미지`} src={`${data.productImage}`} />
        <section>
          <p className="status">
            {data.status === 'completed' ? '결제 완료' : '배송준비중'}
          </p>
          <p className="product-name">{data.productName}</p>
          <div className="row-texts">
            <p className="sm-text">{data.priceAtPurchase}원</p>
            <p className="quantity">{data.quantity}개</p>
            <p className="date">{`${formattedDate} 결제`}</p>
          </div>
          <div className="row-buttons">
            <Button variant="outline" className="cart-button">
              장바구니 담기
            </Button>
            <Button variant="outline" className="buy-button">
              바로 구매하기
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default OrderListContents
