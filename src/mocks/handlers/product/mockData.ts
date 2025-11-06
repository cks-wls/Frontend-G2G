import type { Product } from '@/types/product';

const PLACEHOLDER_IMG = `data:image/svg+xml;utf8,` +
  encodeURIComponent(`
  <svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'>
    <rect width='100%' height='100%' fill='#eeeeee'/>
    <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='22' fill='#666666'>Product</text>
  </svg>
`)

export const products: Product[] = [
  {
    id: 1,
    img_url: PLACEHOLDER_IMG,
    name: '부드러운 니트 스웨터',
    business_name: '데일리웨어',
    price: 39900,
    discount_rate: 10,
    final_price: 2000,
    review_count: 1204,
  },
  {
    id: 2,
    img_url: PLACEHOLDER_IMG,
    name: '편안한 코튼 조거 팬츠',
    business_name: '애슬레저룩',
    price: 45000,
    review_count: 0,
  },
  {
    id: 3,
    img_url: PLACEHOLDER_IMG,
    name: '클래식 레더 스니커즈',
    business_name: '슈즈마스터',
    price: 119000,
    review_count: 2450,
  },
  {
    id: 4,
    img_url: PLACEHOLDER_IMG,
    name: '클래식 레더 스니커즈',
    business_name: '슈즈마스터',
    price: 119000,
    review_count: 2450,
  },
  {
    id: 5,
    img_url: PLACEHOLDER_IMG,
    name: '클래식 레더 스니커즈',
    business_name: '슈즈마스터',
    price: 119000,
    review_count: 2450,
  },
  {
    id: 6,
    img_url: PLACEHOLDER_IMG,
    name: '클래식 레더 스니커즈',
    business_name: '슈즈마스터',
    price: 119000,
    review_count: 2450,
  },
  {
    id: 7,
    img_url: PLACEHOLDER_IMG,
    name: '클래식 레더 스니커즈',
    business_name: '슈즈마스터',
    price: 119000,
    review_count: 2450,
  },
];