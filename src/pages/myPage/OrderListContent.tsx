import Button from '@/shared/components/button'
import type { Orders } from '@/types/orders'

const OrderListContents = ({ data }: { data: Orders }) => {
  return (
    <div className="contents-wrapper">
      {data.items.map((item) => (
        <div className="contents-overview">
          <img alt="이미지 들어갈 자리" />
          <section>
            <p className="status">
              {item.status === 'completed' ? '결제 완료' : '배송준비중'}
            </p>
            <p className="product-name">{item.productName}</p>
            <div className='row-texts'>
              <p className="sm-text">{item.priceAtPurchase}원</p>
              <p className="quantity">{item.quantity}개</p>
              <p className='date'>{`${item.orderDate} 결제`}</p>
            </div>
            <div>
              <Button label='장바구니 담기' />
              <Button label='바로 구매하기' />
            </div>
          </section>
        </div>
      ))}
    </div>
  )
}

export default OrderListContents
