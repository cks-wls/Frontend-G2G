import '@/components/productDetail/summarizeDetail/SummarizeDetail.scss'
import OptionModal from '@/shared/components/Form/Option/OptionModal'
import Button from '@/shared/components/button'
import WishButton from '@/shared/components/WishButton'
import type { Product } from '@/types/product'
import { useState } from 'react'
import PlusIcon from '@/assets/icons/plus.svg'
import MinusIcon from '@/assets/icons/minus.svg'
interface SummarizeDetailProps {
  item: Product
}
function SummarizeDetail({ item }: SummarizeDetailProps) {
  const [count, setCount] = useState<number>(1)
  const handleAddToCount = () => {
    setCount((prev) => prev + 1)
  }
  const handleDelToCount = () => {
    if (count > 1) {
      setCount((prev) => prev - 1)
    }
  }
  return (
    <div className="detail-box">
      <div className="product-detail-top-box">
        <img
          className="representative-img"
          src={item?.images?.[0]?.image_url}
          alt={item?.name}
        />
        <div className="product-simple-description">
          <div className="top-description">[{item?.seller_business_name}]</div>
          <div className="product-detail-title">{item?.name}</div>
          <div className="product-detail-price">
            {parseInt(item?.price ?? '0').toLocaleString()}원
          </div>
          <div className="product-detail-fix-box">
            <div className="product-detail-origin-row">
              <span className="label">원산지</span>
              <span className="product-detail-text">{item?.origin}</span>
            </div>
            <div className="product-detail-origin-row">
              <span className="label">판매자</span>
              <span className="product-detail-text">
                {item?.seller_business_name}
              </span>
            </div>
            <div className="product-detail-origin-row">
              <span className="label">배송비</span>
              <span className="product-detail-text">
                {/* 배송비가 0원일때는 무료배송, 아니면 000원 이런식으로  */}
                {parseInt(item?.delivery_fee || '0') === 0
                  ? '무료배송'
                  : `${parseInt(item?.delivery_fee || '0').toLocaleString()}원`}
              </span>
            </div>
            <div className="product-detail-option-box">
              <span className="label">필수선택</span>
              <OptionModal
                size="lg"
                placeHolder="필수 옵션을 선택해주세요"
                className="modal-css"
              />
            </div>
            <div className="product-count-box">
              <span>선택한 옵션명</span>
              {/* 이부분도 옵션명 받아와야함 */}
              <div className="count-box">
                <img
                  src={MinusIcon}
                  className="calculate-btn"
                  onClick={handleDelToCount}
                />
                <span>{count}</span>
                <img
                  src={PlusIcon}
                  className="calculate-btn"
                  onClick={handleAddToCount}
                />
              </div>
            </div>
            <div className="product-total-price-box">
              <span>총 합계금액</span>
              <span className="total-price">
                {(parseInt(item?.price ?? '0') * count).toLocaleString()}원
              </span>

              {/* 카운트박스 * price */}
            </div>
            <Button size="xlg" variant="filled" label="바로 구매하기" />
            {/* 바로 구매로직 추후에 구현 */}
            <div className="wish-add-to-cart-box">
              <WishButton
                buttonType="detail"
                isWish={false}
                onClick={() => console.log('좋아요 눌림')}
                // 추후 좋아요 눌렀을때의 로직 처리
              />
              <Button size="mlg" variant="gray" label="장바구니 담기" />
              {/* 추후 장바구니 추가 로직 구현 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SummarizeDetail
