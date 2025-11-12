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
  PRODUCT_LIST: '/product/list',
  EMAIL: {
    INDEX: '/email/certification',
  },
  CATEGORY_LIST: {
    TEMPLATE: '/categories/:id', // 라우팅 path
    GENERATOR: (id: number) => `/categories/${id}`, // 경로 생성 함수
  } as const,
}
