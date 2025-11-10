import Header from '@/shared/components/Header'
import SideNavigation from '@/shared/components/SideNavigation'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'

const SellerLayout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles['seller-bg']}>
        <div className={styles['seller-main']}>
          <SideNavigation userName="" navType="SELLER" />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}

export default SellerLayout
