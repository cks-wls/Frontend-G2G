import userApi from '@/api/userApi'
import { useQuery } from '@tanstack/react-query'

const useInfo = (userId?: number) => {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => userApi.getInfo(userId!),
    enabled: !!userId,
  })
}

export default useInfo
