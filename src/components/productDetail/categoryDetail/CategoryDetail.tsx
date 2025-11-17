import '@/components/productDetail/categoryDetail/CategoryDetail.scss'
import type { Product } from '@/types/product'
interface CategoryDetailProps {
  item: Product
}
function CategoryDetail({ item }: CategoryDetailProps) {
  return (
    <div className="category-detail-box">
      <div className="detail-category-box">
        {/* 추후 클릭시 해당부분으로 이동시키게 구현하기 */}
        {/* 후기는 api추가가 안되어 있어서 추후에 .length로 받아오기 */}
        <span className="detail-category">상품 정보</span>
        <span className="detail-category">업체 정보</span>
        <span className="detail-category">후기 ({item?.review_count}) </span>
        <span className="detail-category">문의</span>
      </div>
    </div>
  )
}

export default CategoryDetail
