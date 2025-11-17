import { jwtDecode } from 'jwt-decode'
import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import type { UserJwtPayload } from '@/types/jwtPayload'
type UserType = 'GUEST' | 'CONSUMER' | 'SELLER'

interface UserContextType {
  userType: UserType
  userName?: string
  setUser: (type: UserType, name?: string) => void // 사용자 상태를 바꾸는 함수
}

const UserContext = createContext<UserContextType>({
  userType: 'GUEST',
  userName: 'undefined',
  setUser: () => {},
})

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userType, setUserType] = useState<UserType>('GUEST')
  const [userName, setUserName] = useState<string | undefined>(undefined)

  const setUser = (type: UserType, name?: string) => {
    setUserType(type)
    setUserName(name)
  }
  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      const payload = jwtDecode<UserJwtPayload>(token)
      const type = payload.is_seller ? 'SELLER' : 'CONSUMER'
      setUser(type, payload.username)
    }
  }, [])
  return (
    <UserContext.Provider value={{ userType, userName, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
export const useUser = () => useContext(UserContext)
