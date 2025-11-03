import type { Product } from '@/types/product';
import { MessageSquareText } from 'lucide-react';
import './Card.scss';
import { useNavigate } from "react-router-dom"


interface CardProps {
  product: Product
}


const Card = ({ product }: CardProps) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/product/${product.id}`)
  }

  return (
    <div className='card' onClick={handleClick}>
      <img src={product.img_url} alt={product.name} />
      <div className='info'>
        <span className='businessName'>[{product.business_name}]</span>
        <h4 className='name'>{product.name}</h4>
        <div>
        {
          product.discount_rate ?
            <div>
              <span className='final'>{product.price}원</span>
              <div className='flex'>
                <span className='rate'>{product.discount_rate}%</span>
                <span className='price'>{product.final_price}원</span>
              </div>
            </div>
              : 
            <span className='price'>{product.price}원</span>
        }
        </div>
        <div className={product.review_count ? 'review' : 'none'}>
          <MessageSquareText size={16} color='#888'/>
          <span className=''>{product.review_count}</span>
        </div>
      </div>
    </div>
  )
}

export default Card

