import { useReviewList } from '@/hooks/queries/myPage/useReviewList'
import MyPageContainer from './MyPageContainer'
import ReviewListContent from './ReviewListContent'

const ReviewList = () => {
  const { data } = useReviewList()

  return (
    <MyPageContainer title="작성한 후기">
      {data?.map((review) => (
        <ReviewListContent key={review.id} data={review} />
      ))}
    </MyPageContainer>
  )
}

export default ReviewList
