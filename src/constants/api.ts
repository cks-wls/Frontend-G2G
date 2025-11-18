export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const API_PATHS = {
  USER: {
    SIGN_UP: '/api/auth/signup/',
  },
  SELLER: {
    SIGN_UP: '/api/auth/seller-signup/',
  },
  LOGIN: '/api/auth/login/',
  PRODUCTS: {
    GET_ALL: '/api/products/',
    GET_ID: (id: number) => `/api/products/${id}/`,
  },
  ORDERS: {
    GET_ORDER_LIST: '/api/orders/items/',
  },
  WISHLISTS: {
    GET_WISHLIST: '/api/wishlists/',
  },
  CATEGORIES: {
    GET_PRODUCTS: (id: number) => `/api/categories/${id}/`,
  },
  CARTS: {
    GET: '/api/carts/',
    ADD: '/api/carts/',
    UPDATE: (id: string) => `/api/carts/${id}/`,
    DELETE: (id: string) => `/api/carts/${id}/`,
  },
} as const
