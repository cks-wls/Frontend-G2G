import banner1 from '@/assets/images/main/banner_1.jpg'
import banner2 from '@/assets/images/main/banner_2.jpg'
import banner3 from '@/assets/images/main/banner_3.jpg'
import banner4 from '@/assets/images/main/banner_4.jpg'
import classNames from 'classnames/bind'
import { LucideChevronLeft, LucideChevronRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './SlideBanner.module.scss'

const cn = classNames.bind(styles)

const SLIDE_DURATION = 3000
const TRANSITION_STYLE = 'transform 0.5s ease-in-out'

const images = [
  { id: 1, imgUrl: banner1 },
  { id: 2, imgUrl: banner2 },
  { id: 3, imgUrl: banner3 },
  { id: 4, imgUrl: banner4 },
]

const SlideBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [transitionStyle, setTransitionStyle] = useState(TRANSITION_STYLE)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const banners = [images[images.length - 1], ...images, images[0]]

  const nextSlide = () => setCurrentSlide((prev) => prev + 1)
  const prevSlide = () => setCurrentSlide((prev) => prev - 1)

  const autoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(nextSlide, SLIDE_DURATION)
  }

  useEffect(() => {
    autoSlide()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const handleTransitionEnd = () => {
    if (currentSlide === banners.length - 1) {
      setTransitionStyle('none')
      setCurrentSlide(1)
    } else if (currentSlide === 0) {
      setTransitionStyle('none')
      setCurrentSlide(banners.length - 2)
    }
  }

  useEffect(() => {
    if (transitionStyle === 'none') {
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setTransitionStyle(TRANSITION_STYLE))
      )
    }
  }, [transitionStyle])

  return (
    <div className={styles.container}>
      <ul
        className={styles.slider}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: transitionStyle,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {banners.map((banner, index) => (
          <li className={styles.slide} key={index}>
            <Link to={`/${banner.id}`}>
              <img src={banner.imgUrl} alt={`메인배너 ${banner.id}`} />
            </Link>
          </li>
        ))}
      </ul>

      <button
        className={cn('arrow', 'left')}
        type="button"
        onClick={() => {
          prevSlide()
          autoSlide()
        }}
        aria-label="이전 슬라이드"
      >
        <LucideChevronLeft size={40} />
      </button>

      <button
        className={cn('arrow', 'right')}
        type="button"
        onClick={() => {
          nextSlide()
          autoSlide()
        }}
        aria-label="다음 슬라이드"
      >
        <LucideChevronRight size={40} />
      </button>
    </div>
  )
}

export default SlideBanner
