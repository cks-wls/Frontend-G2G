import Header from '@/shared/components/Header'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'

const LoginLayout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}

export default LoginLayout
