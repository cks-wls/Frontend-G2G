import '@/components/productDetail/categoryDetail/CategoryDetail.scss'
import { API_PATHS } from '@/constants/api'
import axios from 'axios'
import type { ServerReviewType } from '@/types/review'
import { useEffect, useState } from 'react'

function CategoryDetail() {
  const [reviews, setReviews] = useState<ServerReviewType[]>([])
  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = -80 // 상단 여백 조정
      window.scrollTo({
        top: el.offsetTop + offset,
        behavior: 'smooth',
      })
    }
  }
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(API_PATHS.REVIEWS.GET_REVIEW_LIST)
        setReviews(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchReviews()
  }, [])

  return (
    <div className="category-detail-box">
      <div className="detail-category-box">
        {/* 추후 클릭시 해당부분으로 이동시키게 구현하기 */}
        {/* 후기는 api추가가 안되어 있어서 추후에 .length로 받아오기 */}
        <span className="detail-category">상품 정보</span>
        <span
          className="detail-category"
          onClick={() => handleClick('seller-information')}
        >
          업체 정보
        </span>
        <span
          className="detail-category"
          onClick={() => handleClick('product-review')}
        >
          후기 ({reviews.length})
        </span>
        <span
          className="detail-category"
          onClick={() => handleClick('product-inquiry')}
        >
          문의
        </span>
      </div>
    </div>
  )
}

export default CategoryDetail
