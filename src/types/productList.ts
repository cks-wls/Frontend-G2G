export interface ServerProductListType {
  product_id: number
  name: string
  categories: string[]
  origin: string
  price: string
  discount_price: string
  discount_rate: string
  thumbnail: string
  review_count: number
  sales_count: number
  wish_count: number
  seller_name: string
  seller_business_name: string
  seller_business_address: string
  seller_business_number: string
  sold_out: boolean
  created_at: string
  seller: number
}

export interface ProductListType {
  productId: number
  productName: string
  // categories: string[]
  price: string
  discountPrice: string
  discountRate: string
  thumbnail: string
  reviewCount: number
  sellerBusinessName: string
  soldOut: boolean
  sellerId: number
}

export const mappingProductList = (products: ServerProductListType[]) => {
  return products.map((product) => ({
    productId: product.product_id,
    productName: product.name,
    price: product.price,
    discountPrice: product.discount_price,
    discountRate: product.discount_rate,
    thumbnail: product.thumbnail,
    reviewCount: product.review_count,
    sellerBusinessName: product.seller_business_name,
    soldOut: product.sold_out,
    sellerId: product.seller,
  }))
}
