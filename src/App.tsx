import type { Product } from '@/types/product'
import { useEffect, useState } from 'react'
import { productAPI } from './api/product'
import ProductList from './shared/components/ProductList/ProductList'

function App() {
  const [data, setData] = useState<Product[]>([])
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await productAPI.list()
      setData(products)
    }
    fetchProducts()
  }, [])

  return <ProductList data={data} />
}

export default App
