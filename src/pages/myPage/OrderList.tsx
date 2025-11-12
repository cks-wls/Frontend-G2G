import { useOrders } from '@/hooks/queries/myPage/useOrderList'
import MyPageContainer from './MyPageContainer'
import OrderListContents from './OrderListContent'

const OrderList = () => {
  const { data } = useOrders()
  console.log(data)

  return (
    <MyPageContainer title="주문 내역">
      {data.map((item, index) => (
        <OrderListContents key={index} data={item} />
      ))}
    </MyPageContainer>
  )
}

export default OrderList
