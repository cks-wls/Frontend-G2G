import '@/components/productDetail/productInquiry/ProductInquiryList.scss'
import type { ServerQuestionType } from '@/types/question'
interface ProductInquiryListProps {
  el: ServerQuestionType
}
function ProductInquiryList({ el }: ProductInquiryListProps) {
  return (
    <div className="inquiry-top-section-component">
      <div className="long-section-component">{el.title}</div>
      <div className="short-section-component">{el.user_name}</div>
      <div className="short-section-component">{el.created_at}</div>
      {el.is_answer ? (
        <div className="short-section-component answer">답변 완료</div>
      ) : (
        <div className="short-section-component">답변 대기</div>
      )}
    </div>
  )
}
export default ProductInquiryList
