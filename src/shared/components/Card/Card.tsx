import type { Product } from '@/types/product'
import { MessageSquareText } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Card.scss'

interface CardProps {
  product: Product
}

const Card = ({ product }: CardProps) => {
  return (
    <li className="card">
      <Link to={`/product/${product.id}`}>
        <img src={product.img_url} alt={product.name} />
      </Link>
      <Link to={`/product/${product.id}`}>
        <div className="info">
          <span className="business-name">[{product.business_name}]</span>
          <h4 className="name">{product.name}</h4>
          <div>
            {product.discount_rate ? (
              <div>
                <span className="final">{product.price}원</span>
                <div>
                  <span className="rate">{product.discount_rate}%</span>
                  <span className="price">{product.final_price}원</span>
                </div>
              </div>
            ) : (
              <span className="price">{product.price}원</span>
            )}
          </div>
          <div className={product.review_count ? 'review' : 'none'}>
            <MessageSquareText size={16} color="#888" />
            <span>{product.review_count}</span>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default Card
