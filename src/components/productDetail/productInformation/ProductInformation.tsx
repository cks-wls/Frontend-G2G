import '@/components/productDetail/productInformation/ProductInformation.scss'
import type { Product } from '@/types/product'
interface ProductInformationProps {
  item: Product
}
function ProductInformation({ item }: ProductInformationProps) {
  return <div className="product-detail-description">{item?.description}</div>
  {
    /* 이부분은 상품 정보 확인용 -> api에는 정보가 부족해서 추후 데이터 추가후 수정할 예정 */
  }
}
export default ProductInformation
