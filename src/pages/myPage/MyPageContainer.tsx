import type { ReactNode } from 'react'
import styles from './MyPage.module.scss'

const MyPageContainer = ({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      {children}
    </div>
  )
}

export default MyPageContainer
