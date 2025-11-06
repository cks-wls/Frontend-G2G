import { useProducts } from '@/hooks/queries/product/useProducts'
import ProductList from '@/shared/components/ProductList/ProductList'

function App() {
  const { data: productsData, isLoading, error } = useProducts()

  if (isLoading) return <div>로딩 중...</div>
  if (error) return <div>에러 발생!</div>

  return <ProductList data={productsData} />
}

export default App
