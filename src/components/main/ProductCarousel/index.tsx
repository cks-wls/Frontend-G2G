import { useCarousel } from '@/hooks/useCarousel'
import ProductList from '@/shared/components/ProductList/ProductList'
import type { Product } from '@/types/product'
import classNames from 'classnames/bind'
import { LucideChevronLeft, LucideChevronRight } from 'lucide-react'
import { useMemo } from 'react'
import styles from './ProductCarousel.module.scss'

const cn = classNames.bind(styles)

interface ProductCarouselProps {
  products: Product[]
  isLoading: boolean
  error: Error | null
}

const ITEMS_PER_GROUP = 4

const ProductCarousel = ({ products, isLoading, error }: ProductCarouselProps) => {
  // 상품 데이터를 4개씩 묶는 로직
  // useMemo를 사용해 products 데이터가 변경될 때만 재연산
  const productsByGroup = useMemo(() => {
    const groups = []
    for (let i = 0; i < products.length; i += ITEMS_PER_GROUP) {
      groups.push(products.slice(i, i + ITEMS_PER_GROUP))
    }
    return groups
  }, [products])

  const { currentSlide, next, prev, transition, isStart, isEnd } = useCarousel({
    totalSlides: productsByGroup.length,
  })
  if (isLoading) {
    // TODO: 로딩 UI
    return <div>로딩 중...</div>
  }

  if (error) {
    // constants 따로 관리
    return <div>상품을 불러오는 중 오류가 발생했습니다.</div>
  }

  if (products.length === 0) {
    return <div>표시할 상품이 없습니다.</div>
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.container} aria-label="carousel">
        <ul
          className={styles.slider}
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: transition,
          }}
        >
          {productsByGroup.map((productGroup, index) => (
            <li className={styles.slide} key={index}>
              <ProductList data={productGroup} />
            </li>
          ))}
        </ul>
      </div>
      <button
        className={cn('arrow', 'left', { disabled: isStart })}
        type="button"
        onClick={prev}
        aria-label="이전 슬라이드로 이동"
      >
        <LucideChevronLeft size={40} />
      </button>
      <button
        className={cn('arrow', 'right', { disabled: isEnd })}
        type="button"
        onClick={next}
        aria-label="다음 슬라이드로 이동"
      >
        <LucideChevronRight size={40} />
      </button>
    </div>
  )
}

export default ProductCarousel
