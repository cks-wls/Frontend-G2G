// TODO: 엡체명, 할인율 추가 필요
export interface Product {
  product_id: number
  categories: number[]
  images: ProductImage[]
  option_values: ProductOptionValue[]
  name: string
  origin: string
  stock: number
  price: string
  overseas_shipping: boolean
  delivery_fee: string
  description: string
  sold_out: boolean
  created_at: string
  updated_at: string
  seller: number
}

export interface ProductImage {
  image_id: number
  product: number
  user: number
  image_url: string
}

export interface ProductOptionValue {
  id: number
  category: ProductOptionCategory
  extra_price: string
}

export interface ProductOptionCategory {
  id: number
  group_name: string
  name: string
}
