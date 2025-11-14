import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
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
  return (
    <UserContext.Provider value={{ userType, userName, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
export const useUser = () => useContext(UserContext)
