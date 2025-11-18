import { useWishList } from '@/hooks/queries/myPage/useWishList'
import MyPageContainer from './MyPageContainer'
import WishListContent from './WishListContent'

const WishList = () => {
  const { data } = useWishList()
  
  return (
    <MyPageContainer title="찜한 상품">
      {data.map((wish, index) => (
        <WishListContent key={index} data={wish} />
      ))}
    </MyPageContainer>
  )
}

export default WishList
