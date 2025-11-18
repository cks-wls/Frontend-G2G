import type { UserJwtPayload } from '@/types/jwtPayload'
import { jwtDecode } from 'jwt-decode'
import type { ReactNode } from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
type UserType = 'GUEST' | 'CONSUMER' | 'SELLER'

interface UserContextType {
  userType: UserType
  userName?: string
  userId?: string
  setUser: (type: UserType, name?: string, id?: string) => void // 사용자 상태를 바꾸는 함수
}

const UserContext = createContext<UserContextType>({
  userType: 'GUEST',
  userName: 'undefined',
  userId: '',
  setUser: () => {},
})

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userType, setUserType] = useState<UserType>('GUEST')
  const [userName, setUserName] = useState<string | undefined>(undefined)
  const [userId, setUserId] = useState<string | undefined>(undefined)

  const setUser = (type: UserType, name?: string, id?: string) => {
    setUserType(type)
    setUserName(name)
    setUserId(id)
  }
  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      const payload = jwtDecode<UserJwtPayload>(token)
      const type = payload.is_seller ? 'SELLER' : 'CONSUMER'
      setUser(type, payload.username, payload.user_id)
    }
  }, [])
  return (
    <UserContext.Provider value={{ userType, userName, userId, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
export const useUser = () => useContext(UserContext)
