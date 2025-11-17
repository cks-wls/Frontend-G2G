import { ROUTE_PATHS } from '@/constants/route'
import { useUser } from '@/stores/userContext'
import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

interface ProtectedRouteProps {
  children: ReactNode
  allowedTypes: 'CONSUMER' | 'SELLER'
}

const ProtectedRoute = ({ children, allowedTypes }: ProtectedRouteProps) => {
  const { userType } = useUser()
  const location = useLocation()

  if (userType === 'GUEST') {
    // state={{ from: location }} : 로그인 후 원래 가려던 페이지로 돌아오기 위함
    alert('로그인하셔야 본 서비스를 이용하실 수 있습니다.')
    return <Navigate to={ROUTE_PATHS.LOGIN.INDEX} state={{ from: location }} replace />
  }

  // 특정 권한만 접근 가능한지 체크
  if (
    allowedTypes &&
    !allowedTypes.includes(userType as 'CONSUMER' | 'SELLER')
  ) {
    alert('로그인하셔야 본 서비스를 이용하실 수 있습니다.')
    return <Navigate to={ROUTE_PATHS.HOME} replace />
  }

  return children
}

export default ProtectedRoute
