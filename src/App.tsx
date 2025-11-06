import { productApi } from '@/api/productApi'
import type { Product } from '@/types/product'
import { useEffect, useState } from 'react'
import ProductList from './shared/components/ProductList/ProductList'

function App() {
  const [data, setData] = useState<Product[]>([])
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await productApi.getAll()
      setData(products)
    }
    fetchProducts()
  }, [])

  return <ProductList data={data} />
}

export default App
