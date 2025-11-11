import type { Orders } from '@/types/orders'

const OrderListContents = ({ data }: { data: Orders }) => {
  return (
    <div>
      <img alt="이미지 들어갈 자리" />
      <p>{data.status === 'completed' ? '결제 완료' : '배송준비중'}</p>
      <p>{data.totalPrice}</p>
      <p>{`${data.totalAmount}개`}</p>
      <p>{`${data.orderDate} 결제`}</p>
    </div>
  )
}

export default OrderListContents
