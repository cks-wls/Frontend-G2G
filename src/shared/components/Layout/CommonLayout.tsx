import Footer from '@/shared/components/Footer'
import Header from '@/shared/components/Header'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'

const CommonLayout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default CommonLayout
