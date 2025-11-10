import { useProducts } from '@/hooks/queries/product/useProducts'
import { useCarousel } from '@/hooks/useCarousel'
import Card from '@/shared/components/Card/Card'
import classNames from 'classnames/bind'
import { LucideChevronLeft, LucideChevronRight } from 'lucide-react'
import { useMemo } from 'react'
import styles from './ProductCarousel.module.scss'

const cn = classNames.bind(styles)

const ITEMS_PER_GROUP = 4

const ProductCarousel = () => {
  const { data: products, isLoading, isError } = useProducts()

  const productsByGroup = useMemo(() => {
    if (!products || products.length === 0) {
      return []
    }
    const groups = []
    for (let i = 0; i < products.length; i += ITEMS_PER_GROUP) {
      groups.push(products.slice(i, i + ITEMS_PER_GROUP))
    }
    return groups
  }, [products])

  const { currentSlide, handleTransitionEnd, next, prev, transition } =
    useCarousel({ totalSlides: productsByGroup.length })

  if (isLoading) {
    // TODO: 로딩 UI
    return <div>로딩 중...</div>
  }

  if (isError) {
    // constants 따로 관리
    return <div>상품을 불러오는 중 오류가 발생했습니다.</div>
  }

  if (products.length === 0) {
    return <div>표시할 상품이 없습니다.</div>
  }

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
        {productsByGroup.map((productGroup, i) => (
          <li className={styles.slide} key={i}>
            <div className={cn('slideGroup')}>
              {productGroup.map((product) => (
                <Card product={product} key={product.id} />
              ))}
            </div>
          </li>
        ))}
      </ul>
      <button
        className={cn('arrow', 'left')}
        type="button"
        onClick={() => {
          prev()
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
        }}
        aria-label="다음 슬라이드로 이동"
      >
        <LucideChevronRight size={40} />
      </button>
    </div>
  )
}

export default ProductCarousel
