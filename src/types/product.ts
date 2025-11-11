export interface Product {
  product_id: number
  categories: number[]
  images: [
    {
      image_id: number
      product: number // 체크
      user: number  // 체크
      image_url: 'string'
    },
  ]
  option_values: [
    {
      id: number
      category: {
        id: number
        group_name: string
        name: string
      }
      extra_price: '760' // 체크
    },
  ]
  name: string
  business_name: string
  price: number
  discount_rate?: number
  final_price?: number
  img_url?: string
  description?: string
  order_count?: number
  like_count?: number
  review_count?: number
  created_at?: string
  updated_at?: string
}
