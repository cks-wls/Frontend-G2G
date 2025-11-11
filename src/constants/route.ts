export const ROUTE_PATHS = {
  HOME: '/',

  MYPAGE: {
    INDEX: '/mypage',
    ORDER_LIST: ':order-list',
    FAVORITE_PRODUCTS: ':favorite-products',
    REVIEWS: ':revies',
    INFORMATION: ':information',
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
