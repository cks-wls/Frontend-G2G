import { ordersApi } from '@/api/ordersApi'
import type { Orders } from '@/types/orders'
import { useQuery } from '@tanstack/react-query'

export const useOrders = () => {
  return useQuery<Orders[]>({
    queryKey: ['orders'],
    queryFn: ordersApi.getOrdersLIST,
    initialData: [],
  })
}
