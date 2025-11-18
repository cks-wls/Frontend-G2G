import reviewApi from '@/api/reviewApi'
import type { ReviewType } from '@/types/review'
import { useQuery } from '@tanstack/react-query'

export const useReviewList = () => {
  return useQuery<ReviewType[]>({
    queryKey: ['wish'],
    queryFn: reviewApi.getReviewList,
    initialData: [],
  })
}
