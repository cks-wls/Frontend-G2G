import { axiosInstance } from '@/api/axios'
import { API_PATHS } from '@/constants/api'
import { mappingOrders, type Orders, type ServerOrders } from '@/types/orders'

export const ordersApi = {
  getOrdersLIST: async (): Promise<Orders[]> => {
    const { data } = await axiosInstance.get<ServerOrders[]>(
      API_PATHS.ORDERS.GET_ORDER_LIST
    )
    return mappingOrders(data)
  },
}
