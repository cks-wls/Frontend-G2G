import { axiosInstance } from '@/api/axios'
import { API_PATHS } from '@/constants/api'
import {
  mappingOrders,
  type OrderItems,
  type ServerOrderItems,
} from '@/types/orders'

export const ordersApi = {
  getOrdersLIST: async (): Promise<OrderItems[]> => {
    const { data } = await axiosInstance.get<ServerOrderItems[]>(
      API_PATHS.ORDERS.GET_ORDER_LIST
    )
    return mappingOrders(data)
  },
}
