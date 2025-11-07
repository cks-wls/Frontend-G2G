import banner1 from '@/assets/images/main/banner_1.jpg'
import banner2 from '@/assets/images/main/banner_2.jpg'
import banner3 from '@/assets/images/main/banner_3.jpg'
import banner4 from '@/assets/images/main/banner_4.jpg'
import { Link } from 'react-router-dom'
import styles from './SlideBanner.module.scss'

const banners = [
  { id: 1, imgUrl: banner1 },
  { id: 2, imgUrl: banner2 },
  { id: 3, imgUrl: banner3 },
  { id: 4, imgUrl: banner4 },
]

const SlideBanner = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.swiper}>
        {banners.map((banner) => (
          <li key={banner.id}>
            <Link to={`/${banner.id}`}>
              <img src={banner.imgUrl} alt="메인배너" />
            </Link>
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => {}}></button>
      <button></button>
    </div>
  )
}

export default SlideBanner
