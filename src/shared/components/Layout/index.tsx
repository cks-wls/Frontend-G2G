import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'

const Layout = () => {

  return (
    <div className={styles.container}>
      <header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer />
    </div>
  )
}

export default Layout
