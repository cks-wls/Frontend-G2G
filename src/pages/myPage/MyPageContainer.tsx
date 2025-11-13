import type { ReactNode } from 'react'
import './MyPage.scss'

const MyPageContainer = ({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) => {
  return (
    <div className='container'>
      <p className='title'>{title}</p>
      {children}
    </div>
  )
}

export default MyPageContainer
