export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const API_PATHS = {
  USER: {
    SIGN_UP: '/api/users/signup',
  },
  SELLER: {
    SIGN_UP: '/api/producer/signup',
  },
  PRODUCTS: {
    GET_ALL: '/api/products',
  },
  CATEGORIES: (id: number) => `/api/categories/group/${id}/`
} as const
