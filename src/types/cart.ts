export interface ServerCart {
  id: number
  user: number
  items: ServerCartItem[]
  created_at: string
}

export interface ServerCartItem {
  id: number
  product: number
  product_name: string
  quantity: number
  // 백엔드에 추가 요청함
  thumbnail: string
  price: string
  discount_price: string
  delivery_fee: string
}

export interface Cart {
  cartId: number
  items: CartItem[]
}

export interface CartItem {
  id: number
  productId: string
  productName: string
  quantity: number
  thumbnail: string
  price: string
  discountPrice: string
  deliveryFee: string
}

export const mappingGetCart = (cart: ServerCart[]): Cart[] => {
  return cart.map((cart) => ({
    cartId: cart.id,
    items: cart.items.map((item) => ({
      id: item.id,
      productId: String(item.product),
      productName: item.product_name,
      quantity: item.quantity,
      thumbnail: item.thumbnail,
      price: item.price,
      discountPrice: item.discount_price,
      deliveryFee: item.delivery_fee,
    })),
  }))
}
