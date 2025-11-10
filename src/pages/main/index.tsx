import SlideBanner from '@/components/main/SlideBanner'
import styles from './MainPage.module.scss'
import ProductCarousel from '@/components/main/ProductCarousel'

const MainPage = () => {
  return (
    <div className={styles.wrap}>
      <SlideBanner />
      <ProductCarousel />
    </div>
  )
}

export default MainPage
