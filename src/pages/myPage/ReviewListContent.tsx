import useProductList from '@/hooks/queries/product/useProductList'
import { useFormatDate } from '@/hooks/useFormatDate'
import Button from '@/shared/components/button'
import type { ReviewType } from '@/types/review'
import './MyPage.scss'

const ReviewListContent = ({ data }: { data: ReviewType }) => {
  const { data: productData } = useProductList()
  const review = productData.find(({ productId }) => productId === data.id)

  return (
    <div className="contents-wrapper">
      <div className="content-top">
        <img alt="이미지 들어갈 자리" />
        <div className="content-info">
          <div className="info-top">
            <span className="review-like">
              {data?.like_count && '추천한 상품'}
            </span>
            <p className="content-name">{review?.productName}</p>
          </div>
          <p className="review-update">{useFormatDate(data.updated_at)}</p>
        </div>
        <div className="review-buttons">
          <Button variant="outline" className="edit-button">
            수정
          </Button>
          <Button variant="outline" className="delete-button">
            삭제
          </Button>
        </div>
      </div>
      <div className="review-comment">
        <p>{data?.comment}</p>
      </div>
    </div>
  )
}

export default ReviewListContent
