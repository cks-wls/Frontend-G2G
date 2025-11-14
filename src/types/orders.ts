export interface ServerOrderItems {
  id: number
  order: number
  product: number
  product_name: string
  product_image: string
  quantity: number
  price_at_purchase: string
  subtotal: string
  order_status: 'pending' | 'completed'
  order_date: string
}

export interface OrderItems {
  id: number
  productId: number
  productName: string
  productImage: string
  quantity: number
  priceAtPurchase: string
  status: 'pending' | 'completed'
  orderDate: string
}

export const mappingOrders = (items: ServerOrderItems[]): OrderItems[] => {
  return items.map((item) => ({
    id: item.id,
    productId: item.product,
    productName: item.product_name,
    productImage: item.product_image,
    quantity: item.quantity,
    priceAtPurchase: item.price_at_purchase,
    status: item.order_status,
    orderDate: item.order_date,
  }))
}
