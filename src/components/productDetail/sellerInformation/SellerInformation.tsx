import '@/components/productDetail/sellerInformation/SellerInformation.scss'
import type { Product } from '@/types/product'
interface SellerInformationProps {
  item: Product
}
function SellerInformation({ item }: SellerInformationProps) {
  return (
    <div id="seller-information" className="seller-information-box">
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
  )
}
export default SellerInformation
