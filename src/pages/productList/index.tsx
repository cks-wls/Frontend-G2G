import { SORT_OPTIONS, type SortValue } from '@/api/productApi'
import useProductList from '@/hooks/queries/product/useProductList'
import PageNation from '@/shared/components/Page/PageNation'
import List from '@/shared/components/ProductList/ProductList'
import classNames from 'classnames/bind'
import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import styles from './list.module.scss'

const LIST_TITLES: Record<string, string> = {
  created_at: '✨ 따끈따끈 신상품',
  sales_count: '🔥 지금 가장 핫한 베스트',
  discount_price: '💸 놓치면 후회할 특가',
}
const cn = classNames.bind(styles)

const ProductList = () => {
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

  return (
    <div className={cn('wrap')}>
      <div className={cn('title')}>
        <h2>{title}</h2>
      </div>
      <div>
        <List products={data} isLoading={isLoading} error={error} />
        <PageNation totalItems={data.length} />
      </div>
    </div>
  )
}

export default ProductList
