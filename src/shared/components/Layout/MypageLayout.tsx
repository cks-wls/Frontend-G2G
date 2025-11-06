import SideNavigation from '@/shared/components/SideNavigation'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'

const MypageLayout = () => {
  return (
    <div className={styles['consumer-bg']}>
      <div className={styles['consumer-main']}>
        <SideNavigation userName="" navType='CONSUMER'/>
        <Outlet />
      </div>
    </div>
  )
}

export default MypageLayout
