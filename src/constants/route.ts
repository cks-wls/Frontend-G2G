export const ROUTE_PATHS = {
  HOME: '/',

  MYPAGE: {
    INDEX: '/mypage',
  },

  SELLER: {
    INDEX: '/seller',
    PRODUCTS: '/seller/products',
  },
  SIGNUP: {
    INDEX: '/signup',
    USER: '/signup/user',
    SELLER_CERTIFICATION: '/signup/seller-certification',
    SELLER: '/signup/seller',
  },
  LOGIN: {
    INDEX: '/login',
    USER: '/login/user',
  },
} as const
