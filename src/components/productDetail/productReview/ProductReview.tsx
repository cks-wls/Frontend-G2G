import '@/components/productDetail/productReview/ProductReview.scss'
import type { Product } from '@/types/product'
import recommendIcon from '@/assets/icons/recommend-black.svg'
import { useState } from 'react'
interface ProductReviewProps {
  item: Product
}
function ProductReview({ item }: ProductReviewProps) {
  const [isAddClick, setIsAddClick] = useState(false)
  const handleclick = () => {
    setIsAddClick((prev) => !prev)
  }
  return (
    <div id="product-review">
      <div className="review-title">상품 후기</div>
      <div className="review-count">
        <img src={recommendIcon} />
        {/* 추천해요 아이콘 누를시 api연동 및 ui 바뀌게 구현하기 */}
        {item?.review_count}명이 이 상품을 추천해요
      </div>
      <div className="review-list-box">
        {/* 임시 이미지. 추후 리뷰 api 구현되면 매핑으로 진행할 예정 (5개만 나오게) */}
        <div className="temporary-box">{item?.name}</div>
        <div className="temporary-box">{item?.name}</div>
        <div className="temporary-box">{item?.name}</div>
        <div className="temporary-box">{item?.name}</div>
        <div className="temporary-box">{item?.name}</div>
        <div className="temporary-box white" onClick={handleclick}>
          + 더보기
        </div>
      </div>
      {isAddClick && (
        <div>
          <div className="all-review-box">
            {/* api 연동시키기 + 전체 눌렀을떄 전체가 나오게하기, 사진, 추천도 마찬가지 */}
            <span>전체</span>
            <span>|</span>
            <span>사진</span>
            <span>|</span>
            <span>추천</span>
          </div>
          <div className="review-detail">리뷰 예시</div>
          {/* 추후 매핑으로 돌릴 예정 */}
        </div>
      )}
    </div>
  )
}
export default ProductReview
