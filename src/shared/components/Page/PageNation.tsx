import '@/shared/components/Page/PageNation.scss'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

interface PageNationProps {
  totalItems: number // 총 아이템수
  itemCountPerPage?: number // 페이지당 보여줄 아이템수 (default 20)
  maxPageButtons?: number // 최대 페이지 버튼 수 (default 5)
}

function PageNation({
  totalItems = 40,
  itemCountPerPage = 20,
  maxPageButtons = 5,
}: PageNationProps) {
  const location = useLocation()
  const totalPages = Math.ceil(totalItems / itemCountPerPage) // 총 페이지 수 계산
  const [currentPage, setCurrentPage] = useState(1) // 현재페이지

  // URL 쿼리 기반으로 현재 페이지 업데이트
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const page = Number(params.get('page')) || 1
    setCurrentPage(page)
  }, [location.search])

  // maxPageButtons 기준으로 페이지 번호 계산
  const half = Math.floor(maxPageButtons / 2)
  let startPage = Math.max(currentPage - half, 1)
  let endPage = startPage + maxPageButtons - 1
  if (endPage > totalPages) {
    endPage = totalPages
    startPage = Math.max(endPage - maxPageButtons + 1, 1)
  }

  const pageNumbers = []
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="pagination">
      {totalPages > 1 && (
        <>
          {/* 이전 버튼 */}
          <Link
            className="back-arrow"
            to={`?page=${Math.max(currentPage - 1, 1)}`}
          >
            &lt;
          </Link>

          {/* 페이지 번호 */}
          {pageNumbers.map((val) => (
            <Link
              key={val}
              className={`page ${currentPage === val ? 'active' : ''}`}
              to={`?page=${val}`}
            >
              {val}
            </Link>
          ))}

          {/* 다음 버튼 */}
          <Link
            className="next-arrow"
            to={`?page=${Math.min(currentPage + 1, totalPages)}`}
          >
            &gt;
          </Link>
        </>
      )}
    </div>
  )
}

export default PageNation
