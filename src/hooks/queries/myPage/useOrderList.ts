import { ordersApi } from '@/api/ordersApi'
import type { OrderItems } from '@/types/orders'
import { useQuery } from '@tanstack/react-query'

export const useOrders = () => {
  return useQuery<OrderItems[]>({
    queryKey: ['orders'],
    queryFn: ordersApi.getOrdersLIST,
    initialData: [],
  })
}
