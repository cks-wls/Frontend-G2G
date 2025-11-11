export interface ServerOrders {
  id: number
  user: number
  user_name: string
  order_date: string
  address: string
  total_amount: string
  status: 'pending' | 'completed'
  payment_method: 'card'
  created_at: string
  updated_at: string
  items: ServerOrderItems[]
}

interface ServerOrderItems {
  id: number
  order: number
  product: number
  product_name: string
  quantity: number
  price_at_purchase: string
  subtotal: string
}

export interface Orders {
  id: number
  orderDate: string
  totalAmount: string
  status: 'pending' | 'completed'
  paymentMethod: 'card'
  createAt: string
  items: OrderItems[]
}

interface OrderItems {
  id: number
  productName: string
  quantity: number
  priceAtPurchase: string
  subtotal: string
}

export const mappingOrders = (orders: ServerOrders[]): Orders[] => {
  return orders.map((order) => ({
    id: order.id,
    orderDate: order.order_date,
    totalAmount: order.total_amount,
    status: order.status,
    paymentMethod: order.payment_method,
    createAt: order.created_at,
    items: order.items.map((item) => ({
      id: item.id,
      productName: item.product_name,
      quantity: item.quantity,
      priceAtPurchase: item.price_at_purchase,
      subtotal: item.subtotal,
    })),
  }))
}
