import { useOrders } from '@/hooks/queries/myPage/useOrderList'
import MyPageContainer from './MyPageContainer'
import OrderListContents from './OrderListContent'

const OrderList = () => {
  const { data: orderList } = useOrders()

  return (
    <MyPageContainer title="주문 내역">
      {orderList.map((item, index) => (
        <OrderListContents key={index} data={item} />
      ))}
    </MyPageContainer>
  )
}

export default OrderList
