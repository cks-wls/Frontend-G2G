import Header from '@/shared/components/Header'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'

const SignUpLayout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
    </div>
  )
}

export default SignUpLayout
