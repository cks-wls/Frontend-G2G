import { ROUTE_PATHS } from '@/constants/route'
import WishButton from '@/shared/components/WishButton'
import type { ProductListType } from '@/types/productList'
import { MessageSquareText } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'

interface CardProps {
  product: ProductListType
}

const Card = ({ product }: CardProps) => {
  const [like, setLike] = useState(false)

  return (
    <li className="card">
      <Link to={`/product/${product.productId}`}>
        <img src={product.thumbnail} alt={product.productName} />
      </Link>
      <div className="wish-container">
        <WishButton
          buttonType="card"
          onClick={() => setLike((prev) => !prev)}
          isWish={like}
        ></WishButton>
      </div>
      <Link to={`/product/${product.productId}`}>
        <div className="info">
          <Link
            to={ROUTE_PATHS.PRODUCT_LIST.SELLER(product.sellerBusinessName)}
          >
            <span className="business-name">
              [{product.sellerBusinessName}]
            </span>
          </Link>
          <h4 className="name">{product.productName}</h4>
          <div>
            {product.discountRate ? (
              <div>
                <span className="final">{product.price}원</span>
                <div>
                  <span className="rate">{product.discountRate}%</span>
                  <span className="price">{product.discountPrice}원</span>
                </div>
              </div>
            ) : (
              <span className="price">{product.price}원</span>
            )}
          </div>
          <div className={product.reviewCount ? 'review' : 'none'}>
            <MessageSquareText size={16} color="#888" />
            <span>{product.reviewCount}</span>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default Card
