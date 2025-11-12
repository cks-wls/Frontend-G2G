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
        <span className="detail-category">상품 정보</span>
        <span className="detail-category">업체 정보</span>
        <span className="detail-category">후기</span>
        <span className="detail-category">문의</span>
      </div>
      <div className="product-detail-description">{item?.description}</div>
      {/* 이부분은 상품 정보 확인용 -> api에는 정보가 부족해서 추후 데이터 추가후 수정할 예정 */}
      <div className="seller-information-box">
        <div className="seller-information-title-box">
          <span className="seller-information-title">업체정보</span>
          <span className="seller-informtaion-more">상품 더보기</span>
          {/* 추후 상품더보기는 구현 예정  -> 아마 link로 수정할듯?*/}
        </div>
        <div className="seller-information-description-box">
          <div className="seller-img">회사 사진</div>
          <div className="seller-description-box">
            <div className="seller-description-form">
              <span className="seller-description">상호</span>
              <span className="seller-description-real">
                {item?.seller_business_name}
              </span>
            </div>
            <div className="seller-description-form">
              <span className="seller-description">대표</span>
              <span className="seller-description-real">
                {item?.seller_username}
              </span>
            </div>
            <div className="seller-description-form">
              <span className="seller-description">연락처</span>
              <span className="seller-description-real">
                {item?.seller_business_number}
              </span>
            </div>
            <div className="seller-description-form">
              <span className="seller-description">생산품목</span>
              <span className="seller-description-real">
                {/* api에는 없어서 추후 논의 */}
              </span>
            </div>
            <div className="seller-description-form">
              <span className="seller-description">주소</span>
              <span className="seller-description-real">
                {item?.seller_business_address}
              </span>
            </div>
            <div className="seller-description-form">
              <span className="seller-description">업체 소개글</span>
              <span className="seller-description-real">
                {/* api에는 없어서 추후 논의 */}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryDetail
