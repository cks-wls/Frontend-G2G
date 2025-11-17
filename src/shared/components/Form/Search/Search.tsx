import searchIcon from '@/assets/icons/searchIcon.svg'
import { ROUTE_PATHS } from '@/constants/route'
import '@/shared/components/Form/Search/SearchStyle.scss'
import { useState, type KeyboardEvent } from 'react'
import { useNavigate } from 'react-router-dom'
function Search() {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    // 공백 제거 후 빈 값이면 동작 안 함
    const trimmedKeyword = keyword.trim()
    if (!trimmedKeyword) {
      alert('검색어를 입력해주세요')
      return
    }

    // 검색 결과 페이지 이동
    navigate(ROUTE_PATHS.PRODUCT_LIST.SEARCH(trimmedKeyword))
    setKeyword('')
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <div className="search-box">
      <input
        className="input"
        placeholder="원하는 상품을 검색하세요"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="search-icon" type="button" onClick={handleSearch}>
        <img src={searchIcon} />
      </button>
    </div>
  )
}

export default Search
