export interface ServerReviewType {
  id: number
  comment: string
  like_count: number
  created_at: string
  updated_at: string
  user: number,
  product: number
}

export interface ReviewType {
  id: number
  comment: string
  like_count: number
  updated_at: string
  product: number
}