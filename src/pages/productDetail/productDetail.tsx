import { productDetailApi } from '@/api/productDetailApi'
import '@/pages/productDetail/productDetail.scss'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { Product } from '@/types/product'
import SummarizeDetail from '@/components/productDetail/summarizeDetail/SummarizeDetail'
import CategoryDetail from '@/components/productDetail/categoryDetail/CategoryDetail'
function ProductDetail() {
  const { id } = useParams()
  const productId = Number(id)

  const [product, setProduct] = useState<Product | null>(null)
  const handleFetch = async (id: number) => {
    try {
      const response = await productDetailApi.getById(id)
      setProduct(response)
      console.log(response.name)
    } catch (err: any) {
      console.log(err)
    }
  }
  useEffect(() => {
    if (productId) handleFetch(productId)
  }, [productId])
  return (
    <div>
      <SummarizeDetail item={product!} />
      <CategoryDetail item={product!} />
      <div className="product-information">상세정보</div>
    </div>
  )
}
export default ProductDetail
