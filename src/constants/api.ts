// 추후 API 주소 나오면 .env.development 파일에 정의
export const API_BASE_URL = import.meta.env.VITE_API_

export const API_PATHS = {
  PRODUCTS: {
    LIST: '/api/products/'
  }
} as const