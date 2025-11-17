import { ALL_CATEGORIES } from '@/constants/categories'
import { MOCK_PRODUCTS } from '@/mocks/handlers/product/mockData'
import { http, HttpResponse } from 'msw'

export const categoryHandlers = [
  // 함수 호출 안되어 템플릿 문자열 방식 사용
  http.get('/api/categories/:id/', ({ params }) => {
    // 1. URL에서 :id 값 추출
    const categoryId = Number(params.id)    

    // 2. id에 해당하는 카테고리 객체 찾기
    const category = ALL_CATEGORIES.find((c) => c.id === categoryId)

    // 3. 해당 id의 카테고리가 없다면, 빈 배열 반환
    if (!category) return HttpResponse.json([])

    // 4. 카테고리 이름 추출
    const categoryName = category.name

    // 5. MOCK_PRODUCTS에서 product.categories 배열에 해당 카테고리 이름이 포함된 상품만 필터링
    const filteredProducts = MOCK_PRODUCTS.filter((product) =>
      product.categories.includes(categoryName)
    )
    
    // 6. 필터링된 상품 목록을 JSON으로 응답
    return HttpResponse.json(filteredProducts)
  }),
]
