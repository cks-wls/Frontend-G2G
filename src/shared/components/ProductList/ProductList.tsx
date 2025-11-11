import Card from '@/shared/components/Card/Card'
import type { Product } from '@/types/product'
import './ProductList.scss'

interface ProductListProps {
  data: Product[]
}

const ProductList = ({ data }: ProductListProps) => {
  return (
    <ul className="product-list">
      {data.map((product) => (
        <Card key={product.product_id} product={product} />
      ))}
    </ul>
  )
}

export default ProductList
