import { BANNERS } from '@/constants/banner'
import {useCarousel} from '@/hooks/useCarousel'
import classNames from 'classnames/bind'
import { LucideChevronLeft, LucideChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './SlideBanner.module.scss'

const cn = classNames.bind(styles)

const SlideBanner = () => {
  const banners = [BANNERS[BANNERS.length - 1], ...BANNERS, BANNERS[0]]
  const {
    startAutoPlay,
    currentSlide,
    handleTransitionEnd,
    next,
    prev,
    transition,
  } = useCarousel({ totalSlides: banners.length, isAutoPlay: true, isLoop: true })

  return (
    <div className={styles.container} aria-label="carousel">
      <ul
        className={styles.slider}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: transition,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {banners.map((banner, i) => (
          <li className={styles.slide} key={i}>
            <Link to={banner.path}>
              <img src={banner.img} alt={banner.alt} />
            </Link>
          </li>
        ))}
      </ul>

      <button
        className={cn('arrow', 'left')}
        type="button"
        onClick={() => {
          prev()
          startAutoPlay()
        }}
        aria-label="이전 슬라이드로 이동"
      >
        <LucideChevronLeft size={40} />
      </button>

      <button
        className={cn('arrow', 'right')}
        type="button"
        onClick={() => {
          next()
          startAutoPlay()
        }}
        aria-label="다음 슬라이드로 이동"
      >
        <LucideChevronRight size={40} />
      </button>
    </div>
  )
}

export default SlideBanner
