import { SEASON_CATEGORIES, THEME_CATEGORIES } from '@/constants/categories'

// TODO: 엡체명, 할인율 추가 필요
export interface Product {
  product_id: number
  categories: string[]
  images: ProductImage[]
  option_values: ProductOptionValue[] // SeasonCategories[] | ThemeCategories[]
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
  seller_username: string
  seller_business_name: string
  seller_business_number: string
  seller_business_address: string
  review_count: number
  wish_count: number
  sales_count: number
  discount_price: string
  discount_rate: string
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
export interface ProductOptionValue {
  category_name: string
  extra_price: string
}

export type SeasonCategories = typeof SEASON_CATEGORIES
export type ThemeCategories = typeof THEME_CATEGORIES
