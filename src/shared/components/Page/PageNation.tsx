import '@/shared/components/Page/PageNation.scss'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
//  메인페이지(20개)), 상품페이지, 장바구니, 찜, 후기, 판매자 상품 관리
interface PageNationProps {
  totalItems: number // 총 아이템수
  itemCountPerPage: number // 페이지당 보여줄 아이템수 (default 20)
  //   currentPage: number // 현재 페이지
}
function PageNation({
  totalItems = 40,
  itemCountPerPage = 20,
  //   currentPage,
}: PageNationProps) {
  const location = useLocation()
  const totalPages = Math.ceil(totalItems / itemCountPerPage) // 총 페이지 수 계산
  const [start, setStart] = useState(1) // 시작페이지
  const [currentPage, setCurrentPage] = useState(1) // 현재페이지
  //   페이지 변경시 active되는 페이지 실시간으로 반영
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const page = Number(params.get('page')) || 1
    setCurrentPage(page)
  }, [location.search])
  const handlePrevClick = () => {
    if (start > 2) {
      setCurrentPage(start - 1)
    }
  }
  const page: Array<number> = []
  for (let i = start; i <= totalPages; i++) {
    page.push(i)
  }
  return (
    <div className="pagination">
      {totalPages > 1 && (
        // 1페이지만 있다면 페이지네이션 안보이게 구현
        <>
          <Link
            className="back-arrow"
            to={`?page=${currentPage - 1}`}
            onClick={handlePrevClick}
          >
            &lt;
          </Link>
          {/* < 누르면 2 -> 1처럼 1칸식 왼쪽으로 넘어가게 구현 */}
          {page.map((val) => (
            <Link
              key={val}
              className={`page ${currentPage === val ? 'active' : ''}`}
              onClick={() => setCurrentPage(val)}
              to={`?page=${val}`}
            >
              {val}
            </Link>
          ))}
          {/* 페이지 번호 */}
          <Link
            className="next-arrow"
            to={`?page=${currentPage + 1}`}
            onClick={handlePrevClick}
          >
            &gt;
          </Link>
          {/* > 누르면 1->2처럼 한칸씩 오른쪽으로 넘어가게 구현 */}
        </>
      )}
    </div>
  )
}
{
  /* <PageNation totalItems={전체 아이템 개수} itemCountPerPage={페이지에서 보여줄 아이템 개수} />  이런식으로 사용하면 됩니다!*/
}
export default PageNation
