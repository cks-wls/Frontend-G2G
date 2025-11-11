import { useCategory } from '@/hooks/queries/useCategory'
import PageNation from '@/shared/components/Page/PageNation'
import List from '@/shared/components/ProductList/ProductList'
import classNames from 'classnames/bind'
import styles from './list.module.scss'
import { useParams } from 'react-router-dom'
import { ALL_CATEGORIES } from '@/constants/categories'

const cn = classNames.bind(styles)

const ProductList = () => {
  const { id } = useParams()
  const categoryId = Number(id)
  const category = ALL_CATEGORIES.find((c) => c.id === categoryId)

  const { data, isLoading, error } = useCategory(categoryId)

  return (
    <div className={cn('wrap')}>
      <div className={cn('')}>
        <h2>{category?.name}</h2>
      </div>
      <div className={cn('')}>
        <List products={data} isLoading={isLoading} error={error} />
        <PageNation totalItems={data.length} />
      </div>
    </div>
  )
}

export default ProductList
