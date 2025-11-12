import Card from '@/shared/components/Card/Card'
import type { Product } from '@/types/product'
import './ProductList.scss'

export interface ProductListProps {
  products: Product[]
  isLoading: boolean
  error: Error | null
}

const ProductList = ({ products, error, isLoading }: ProductListProps) => {
  // TODO: 로딩/에러/데이터 없음 상태 처리 UI
  if (isLoading) return <div>로딩 중...</div>
  if (error) return <div>상품을 불러오는 중 오류가 발생했습니다.</div>
  if (products.length === 0) return <div>표시할 상품이 없습니다.</div>

  return (
    <ul className="product-list">
      {products.map((product) => (
        <Card key={product.product_id} product={product} />
      ))}
    </ul>
  )
}

export default ProductList
