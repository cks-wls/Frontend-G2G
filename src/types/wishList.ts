export interface ServerWishList {
  id: number,
  user: number,
  product: number,
  is_active: boolean,
  created_at: string,
}

export interface WishList {
  id: number
  product: number
  isActive: boolean
}

export const mappingWishList = (wishs: ServerWishList[]): WishList[] => {
  return wishs.map((wish) => ({
    id: wish.id,
    product: wish.product,
    isActive: wish.is_active
  }))
}