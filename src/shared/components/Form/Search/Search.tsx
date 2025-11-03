import searchIcon from "@/assets/icons/searchIcon.svg";
import "@/shared/components/Form/Search/SearchStyle.scss"
function Search(){
    return (
    <div className = "searchBox">
    <input className = "input" placeholder = "원하는 상품을 검색하세요"></input>
    <img className = "searchIcon" src = {searchIcon} />
    </div>
    // 추후 검색 API 연동이 되면 API와 연동시키기
    )
}

export default Search;