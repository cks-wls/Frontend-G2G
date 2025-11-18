import '@/components/productDetail/productInquiry/ProductInquiry.scss'
import { API_PATHS } from '@/constants/api'
import axios from 'axios'
import type { ServerQuestionType } from '@/types/question'
import { useEffect, useState } from 'react'
import ProductInquiryList from './ProductInquiryList'
import PageNation from '@/shared/components/Page/PageNation'
import { useSearchParams } from 'react-router-dom'
function ProductInquiry() {
  // pageNation 구현하기 위한 작업
  const [searchParams] = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1
  const itemsPerPage = 2

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const [questions, setQuestions] = useState<ServerQuestionType[]>([])
  const currentItems = questions.slice(startIndex, endIndex)
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(API_PATHS.QUESTIONS.GET_QUESTION_LIST)
        setQuestions(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchQuestions()
  }, [])
  return (
    <>
      <div id="product-inquiry" className="inquiry-title">
        상품문의
      </div>
      <div className="inquiry-box">
        <div className="inquiry-top-section">
          <div className="long-section">제목</div>
          <div className="short-section">작성자</div>
          <div className="short-section">작성일</div>
          <div className="short-section">답변상태</div>
        </div>
      </div>
      {currentItems.map((q) => (
        <ProductInquiryList key={q.id} el={q} />
      ))}
      <PageNation
        totalItems={questions.length}
        itemCountPerPage={itemsPerPage}
        className="pageNation-style"
      />
    </>
  )
}

export default ProductInquiry
