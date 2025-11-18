import { SORT_OPTIONS, type SortValue } from '@/api/productApi'
import useProductList from '@/hooks/queries/product/useProductList'
import PageNation from '@/shared/components/Page/PageNation'
import List from '@/shared/components/ProductList/ProductList'
import classNames from 'classnames/bind'
import { useMemo } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from './list.module.scss'

const LIST_TITLES: Record<string, string> = {
  '-created_at': '✨ 따끈따끈 신상품',
  '-stats__sales_count': '🔥 지금 가장 핫한 베스트',
  '-discount_price': '💸 놓치면 후회할 특가',
}

const SORTS = [
  { sortValue: '-created_at', label: '신상품순' },
  { sortValue: 'price', label: '낮은가격순' },
  { sortValue: '-price', label: '높은가격순' },
  { sortValue: '-stats__sales_count', label: '판매량순' },
  { sortValue: '-stats__review_count', label: '후기많은순' },
]

const cn = classNames.bind(styles)

const ProductList = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const orderingParam = searchParams.get('ordering')

  // 타입 가드
  const ordering: SortValue | undefined =
    orderingParam && SORT_OPTIONS.includes(orderingParam as SortValue)
      ? (orderingParam as SortValue)
      : undefined

  const params = useMemo(
    () => ({
      category_name: searchParams.get('category_name') || undefined,
      seller_business_name:
        searchParams.get('seller_business_name') || undefined,
      q: searchParams.get('q') || undefined,
      ordering: ordering,
    }),
    [searchParams]
  )

  const { data, isLoading, error } = useProductList(params)

  const title = useMemo(() => {
    if (params.q) return `'${params.q}' 검색 결과`
    if (params.category_name) return params.category_name
    if (params.seller_business_name)
      return `${params.seller_business_name}의 상품`
    if (params.ordering && LIST_TITLES[params.ordering])
      return LIST_TITLES[params.ordering]

    return '전체 상품'
  }, [params])

  const handleSort = (sortValue: string) => {
    const currentParams = new URLSearchParams(searchParams)

    currentParams.set('ordering', sortValue)

    if (currentParams.has('page')) {
      currentParams.set('page', '1')
    }
    navigate(`${location.pathname}?${currentParams.toString()}`)
  }

  return (
    <div className={cn('wrap')}>
      <div className={cn('title')}>
        <h2>{title}</h2>
      </div>
      <div>
        <ul className={cn('sort-list')}>
          {SORTS.map((sort) => {
            // 현재 활성화된 정렬인지 확인
            const isActive =
              ordering === sort.sortValue ||
              (!ordering && sort.sortValue === 'created_at')

            return (
              <li key={sort.sortValue}>
                <button
                  type="button"
                  onClick={() => handleSort(sort.sortValue)}
                  className={cn({ active: isActive })} // 활성화 스타일 적용
                >
                  {sort.label}
                </button>
              </li>
            )
          })}
        </ul>
        <List products={data} isLoading={isLoading} error={error} />
        <PageNation totalItems={data.length} />
      </div>
    </div>
  )
}

export default ProductList
