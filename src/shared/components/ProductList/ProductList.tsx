import Card from '@/shared/components/Card/Card'
import './ProductList.scss'
import type { Product } from '@/types/product'

interface ProductListProps {
  data: Product[]
}

const ProductList = ({data}: ProductListProps) => {
  return (
    <div>
      <div className='container'>
        {data.map((product) => 
          <Card key={product.id} product={product} />
        )}
      </div>
    </div>
  )
}

export default ProductList