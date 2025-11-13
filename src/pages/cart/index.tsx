import CartListItem from '@/components/cart/CartListItem'
import useCart from '@/hooks/queries/cart/useCart'
import useDeleteCartItems from '@/hooks/queries/cart/useDeleteCartItems'
import Button from '@/shared/components/button'
import CheckBox from '@/shared/components/Form/CheckBox/CheckBox'
import classNames from 'classnames/bind'
import { LucideMapPin } from 'lucide-react'
import { useMemo, useState } from 'react'
import styles from './cart.module.scss'

const cn = classNames.bind(styles)

const Cart = () => {
  const { data, isLoading, error } = useCart()
  const { mutate: deleteItems } = useDeleteCartItems()
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const cartId = String(data?.[0]?.cartId)
  const cartItems = data?.[0]?.items || []

  const allItemIds = useMemo(
    () => cartItems.map((item) => item.productId),
    [cartItems]
  )

  const isAllSelected = useMemo(
    () => selectedItems.length > 0 && selectedItems.length === cartItems.length,
    [cartItems.length, selectedItems.length]
  )

  const handleSelectAll = (checked: boolean) => {
    setSelectedItems(checked ? allItemIds : [])
  }

  const handleSelectItem = (productId: string, checked: boolean) => {
    if (checked) {
      setSelectedItems((prev) => [...prev, productId])
    } else {
      setSelectedItems((prev) => prev.filter((id) => id !== productId))
    }
  }

  const handleDeleteSelected = (selectedItems: string[]) => {
    deleteItems({ cartId, productIds: selectedItems })
    setSelectedItems([])
  }

  const handleDeleteItem = (productIds: string[]) => {
    deleteItems({ cartId, productIds })
  }

  if (isLoading) return <div>로딩 중...</div>
  if (error) return <div>오류가 발생했습니다.</div>
  if (!data) {
    return (
      <div className={cn('wrap')}>
        <div className={cn('title')}>
          <h2>장바구니</h2>
        </div>
        <div>장바구니가 비어있습니다.</div>
      </div>
    )
  }

  return (
    <div className={cn('wrap')}>
      <div className={cn('title')}>
        <h2>장바구니</h2>
      </div>
      <div className={cn('cart-wrap')}>
        <div className={cn('cart-left')}>
          <div className={cn('select-header')}>
            <CheckBox
              label={`전체선택 ${selectedItems.length}/${cartItems.length}`}
              id="cart-select-all"
              isChecked={isAllSelected}
              onCheckedChange={handleSelectAll}
            />
            <button
              className={cn({ disabled: selectedItems.length === 0 })}
              type="button"
              onClick={() => handleDeleteSelected(selectedItems)}
              disabled={selectedItems.length === 0}
            >
              선택삭제
            </button>
          </div>
          <ul className={cn('list-wrap')}>
            {cartItems.map((item) => (
              <CartListItem
                key={item.id}
                item={item}
                onDeleteItem={handleDeleteItem}
                onQuantityChange={() => {}}
                isChecked={selectedItems.includes(item.productId)}
                onChecked={handleSelectItem}
              />
            ))}
          </ul>
          <div className={cn('products')}></div>
          <div className={cn('total-wrap')}>
            <p className={cn('total-detail')}>
              상품 {}원 + 배송비 {}원
            </p>
            <p className={cn('total')}>{} 원</p>
          </div>
        </div>
        <div className={cn('cart-right')}>
          <div className={cn('address-wrap')}>
            <div className={cn('address-title')}>
              <LucideMapPin />
              <p>배송지</p>
            </div>
            <div className={cn('address-edit')}>
              {/* 추후 유저 정보 api 연동 */}
              <p>{'주소~'}</p>
              <button type="button">변경</button>
            </div>
          </div>
          <div className={cn('amount-wrap')}>
            <div className={cn('amount-title')}>
              <p>결제금액</p>
            </div>
            <div className={cn('amount-detail')}>
              <div className={cn('amount-pair')}>
                <p>상품금액</p>
                <p className={cn('amount-semibold')}>{}원</p>
              </div>
              <div className={cn('amount-pair')}>
                <p>상품할인금액</p>
                <p className={cn('amount-semibold', 'amount-discount')}>
                  -{}원
                </p>
              </div>
              <div className={cn('amount-pair')}>
                <p>배송비</p>
                <p className={cn('amount-semibold')}>{}원</p>
              </div>
            </div>
            <div className={cn('amount-total')}>
              <p>결제예정금액</p>
              <p className={cn('amount-bold')}>{}원</p>
            </div>
          </div>
          <Button onClick={() => {}} variant="filled" isFullWidth type="button">
            구매하기
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Cart
