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
      </div>
      <div className="seller-information-description-box">
        <div className="seller-img">
          <img
            className="business-logo"
            src="data:image/jpeg;base64,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"
          />
        </div>
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
            <span className="seller-description-real">구황작물</span>
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
              신선한 구황작물을 재배하는 혁명적인 감자입니다.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SellerInformation
