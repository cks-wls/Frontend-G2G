import type { CartItem } from '@/types/cart'
import classNames from 'classnames/bind'
import { LucideMinus, LucidePlus, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './CartListItem.module.scss'

const cn = classNames.bind(styles)

interface CartListItemProps {
  item: CartItem
}

const CartListItem = ({ item }: CartListItemProps) => {
  return (
    <li className={cn('list-item')}>
      <input type="checkbox" />
      <div className={cn('item-img')}>
        <Link to={''}>
          <img src={item.thumbnail} alt={item.productName} />
        </Link>
      </div>
      <div className={cn('item-info')}>
        <div>
          <Link to={''}>
            <p className={cn('item-name')}>{item.productName}</p>
          </Link>
          <span className={cn('item-discount')}>
            {item.discountPrice.toLocaleString()}원
          </span>
          <span className={cn('item-price')}>{item.price}원</span>
        </div>
        <div className={cn('item-quantity')}>
          <button
            type="button"
            onClick={() => {}}
            className={cn({ disabled: item.quantity === 1 })}
            disabled={item.quantity === 1}
          >
            <LucideMinus size={16} />
          </button>
          <span>{item.quantity}</span>
          <button type="button" onClick={() => {}} >
            <LucidePlus size={16} />
          </button>
        </div>
      </div>
      <button type="button" className={cn('item-delete')} onClick={() => {}}>
        <X />
      </button>
    </li>
  )
}

export default CartListItem
