import ProductCarousel from '@/components/main/ProductCarousel'
import SlideBanner from '@/components/main/SlideBanner'
import { ROUTE_PATHS } from '@/constants/route'
import useProductList from '@/hooks/queries/product/useProductList'
import Button from '@/shared/components/button'
import classNames from 'classnames/bind'
import { LucideChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './MainPage.module.scss'

const cn = classNames.bind(styles)

const Main = () => {
  // 인기 상품 리스트
  const {
    data: popularData,
    error: popularError,
    isLoading: popularLoading,
  } = useProductList({ ordering: '-stats__sales_count' })

  // 시즌 상품 리스트 (가을)
  const {
    data: seasonData,
    error: seasonError,
    isLoading: seasonLoading,
  } = useProductList({ category_name: '가을' })

  return (
    <div className={styles.wrap}>
      <SlideBanner />
      <section className={cn('category-container')}>
        <div className={cn('title')}>
          <h2>
            <Link to={ROUTE_PATHS.PRODUCT_LIST.BEST}>
              🔥 이 달의 인기 상품
              <LucideChevronRight />
            </Link>
          </h2>
          <p>가장 인기있는 상품만 모아보세요!</p>
        </div>
        <ProductCarousel
          products={popularData}
          error={popularError}
          isLoading={popularLoading}
        />
      </section>
      <section className={cn('category-container')}>
        <div className={cn('title')}>
          <h2>
            <Link to={ROUTE_PATHS.PRODUCT_LIST.CATEGORY('가을')}>
              🍂 집 나간 며느리도 돌아온다! 가을 제철 음식
              <LucideChevronRight />
            </Link>
          </h2>
          <p>지금이 제일 맛있는 10월 제철 음식 모음</p>
        </div>
        <ProductCarousel
          products={seasonData}
          error={seasonError}
          isLoading={seasonLoading}
        />
      </section>
      <section className={cn('iframe-wrap')}>
        <div className={cn('iframe-container')}>
          <div>
            <h2>
              <span>믿고 먹을 수 있는</span>
              <br />
              남다른 밥상
            </h2>
            <p>G2G를 더욱 생생하게 만나보세요.</p>
            <Button type="button" variant="gray" size="md">
              더 많은 영상 보기 +
            </Button>
          </div>
          <div>
            <iframe
              width="626"
              height="326"
              src="https://www.youtube.com/embed/8grJf1RVXfg?si=UL4Fq-DtafpWrx2O"
              title="G2G 소개 영상"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Main
