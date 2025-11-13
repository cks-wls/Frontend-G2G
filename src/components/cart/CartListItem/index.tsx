import CheckBox from '@/shared/components/Form/CheckBox/CheckBox'
import type { CartItem } from '@/types/cart'
import classNames from 'classnames/bind'
import { LucideMinus, LucidePlus, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './CartListItem.module.scss'

const cn = classNames.bind(styles)

interface CartListItemProps {
  item: CartItem
  isChecked: boolean
  onChecked: (productId: string, isChecked: boolean) => void
  onQuantityChange: (productId: string, newQuantity: number) => void
  onDeleteItem: (productIds: string[]) => void
}

const CartListItem = ({
  item,
  isChecked,
  onChecked,
  onDeleteItem,
  onQuantityChange,
}: CartListItemProps) => {
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return
    onQuantityChange(item.productId, newQuantity)
  }

  return (
    <li className={cn('list-item')}>
      <CheckBox
        isChecked={isChecked}
        onCheckedChange={(isChecked) => onChecked(item.productId, isChecked)}
      />
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
            onClick={() => handleQuantityChange(item.quantity - 1)}
            className={cn({ disabled: item.quantity === 1 })}
            disabled={item.quantity === 1}
          >
            <LucideMinus size={16} />
          </button>
          <span>{item.quantity}</span>
          <button
            type="button"
            onClick={() => handleQuantityChange(item.quantity + 1)}
          >
            <LucidePlus size={16} />
          </button>
        </div>
      </div>
      <button
        type="button"
        className={cn('item-delete')}
        onClick={() => onDeleteItem([item.productId])}
      >
        <X />
      </button>
    </li>
  )
}

export default CartListItem
