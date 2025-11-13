import { productDetailApi } from '@/api/productDetailApi'
import '@/pages/productDetail/productDetail.scss'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { Product } from '@/types/product'
import SummarizeDetail from '@/components/productDetail/summarizeDetail/SummarizeDetail'
import CategoryDetail from '@/components/productDetail/categoryDetail/CategoryDetail'
import ProductInformation from '@/components/productDetail/productInformation/ProductInformation'
import SellerInformation from '@/components/productDetail/sellerInformation/SellerInformation'
import ProductReview from '@/components/productDetail/productReview/ProductReview'
import ProductInquiry from '@/components/productDetail/productInquiry/ProductInquiry'
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
      <ProductInformation item={product!} />
      <SellerInformation item={product!} />
      <ProductReview item={product!} />
      <ProductInquiry />
    </div>
  )
}
export default ProductDetail
