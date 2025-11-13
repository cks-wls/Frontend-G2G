import '@/components/productDetail/productInquiry/ProductInquiry.scss'
// import type { Product } from '@/types/product'
import ProductInquiryList from './ProductInquiryList'
import PageNation from '@/shared/components/Page/PageNation'
import { useSearchParams } from 'react-router-dom'
// interface ProductInquiryProps {
//   item: Product
// }
const length: Array<number> = [1, 2, 3, 4, 5]
function ProductInquiry() {
  // pageNation 구현하기 위한 작업
  const [searchParams] = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1
  const itemsPerPage = 2

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = length.slice(startIndex, endIndex)

  return (
    <>
      <div className="inquiry-title">상품문의</div>
      <div className="inquiry-box">
        <div className="inquiry-top-section">
          <div className="long-section">제목</div>
          <div className="short-section">작성자</div>
          <div className="short-section">작성일</div>
          <div className="short-section">답변상태</div>
        </div>
      </div>
      {currentItems.map((val, index) => (
        <ProductInquiryList key={index} el={val} />
      ))}
      <PageNation
        totalItems={length.length}
        itemCountPerPage={itemsPerPage}
        className="pageNation-style"
      />
    </>
  )
}

export default ProductInquiry
