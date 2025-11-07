// 추후 API 주소 나오면 .env.development 파일에 정의
export const API_BASE_URL = import.meta.env.VITE_API_

export const API_PATHS = {
  PRODUCTS: {
    GET_ALL: '/api/products',
  },
  USER: {
    SIGN_UP: '/api/users/signup',
  },
  PRODUCER: {
    SIGN_UP: '/api/producer/signup',
  },
} as const
