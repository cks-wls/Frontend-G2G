export const ROUTE_PATHS = {
  HOME: '/',
  LOGIN: '/login',

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
} as const
