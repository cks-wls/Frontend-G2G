import WishButton from '@/shared/components/WishButton'
import type { Product } from '@/types/product'
// import { MessageSquareText } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'

interface CardProps {
  product: Product
}

const Card = ({ product }: CardProps) => {
  const [like, setLike] = useState(false)

  return (
    <li className="card">
      <Link to={`/product/${product.product_id}`}>
        <img src={product.images[0].image_url} alt={product.name} />
      </Link>
      <div className="wish-container">
        <WishButton
          buttonType="card"
          onClick={() => setLike((prev) => !prev)}
          isWish={like}
        ></WishButton>
      </div>
      <Link to={`/product/${product.product_id}`}>
        <div className="info">
          <span className="business-name">[{product.seller_business_name}]</span>
          <h4 className="name">{product.name}</h4>
          <div>
            {/* TODO: 상품 타입 추가되어야 함 */}
            {/* {product.discount_rate ? (
              <div>
                <span className="final">{product.price}원</span>
                <div>
                  <span className="rate">{product.discount_rate}%</span>
                  <span className="price">{product.final_price}원</span>
                </div>
              </div>
            ) : ( */}
              <span className="price">{product.price}원</span>
            {/* )} */}
          </div>
          {/* TODO: 상품 타입 추가되어야 함 */}
          {/* <div className={product.review_count ? 'review' : 'none'}>
            <MessageSquareText size={16} color="#888" />
            <span>{product.review_count}</span>
          </div> */}
        </div>
      </Link>
    </li>
  )
}

export default Card
