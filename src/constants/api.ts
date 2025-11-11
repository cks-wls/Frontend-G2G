export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const API_PATHS = {
  USER: {
    SIGN_UP: '/api/users/signup',
  },
  SELLER: {
    SIGN_UP: '/api/producer/signup',
  },
  LOGIN: '/api/users/login',
  PRODUCTS: {
    GET_ALL: '/api/products',
  },
  CATEGORIES: {
    GET_PRODUCTS: (id: number) => `/api/categories/${id}/`,
  },
} as const
