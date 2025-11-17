export interface ServerCart {
  id: number
  user: number
  items: ServerCartItem[]
  total_product_price: string
  total_delivery_fee: string
  final_price: string
  created_at: string
}

export interface ServerCartItem {
  id: number
  product: number
  product_name: string
  thumbnail: string
  price: number
  original_price: number
  delivery_fee: number
  quantity: number
  sub_total: string
  discount_amount: string
}

export interface Cart {
  cartId: number
  items: CartItem[]
  totalProductPrice: string
  totalDeliveryFee: string
  finalPrice: string
}

export interface CartItem {
  id: number
  productId: number
  productName: string
  thumbnail: string
  price: number
  originalPrice: number
  deliveryFee: number
  quantity: number
  subTotal: string
  discountAmount: string
}

export const mappingGetCart = (cart: ServerCart[]): Cart[] => {
  return cart.map((cart) => ({
    cartId: cart.id,
    items: cart.items.map((item) => ({
      id: item.id,
      productId: item.product,
      productName: item.product_name,
      thumbnail: item.thumbnail,
      price: item.price,
      originalPrice: item.original_price,
      deliveryFee: item.delivery_fee,
      quantity: item.quantity,
      subTotal: item.sub_total,
      discountAmount: item.discount_amount,
    })),
    totalProductPrice: cart.total_product_price,
    totalDeliveryFee: cart.total_delivery_fee,
    finalPrice: cart.final_price,
  }))
}
