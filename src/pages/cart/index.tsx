import CartListItem from '@/components/cart/CartListItem'
import useCart from '@/hooks/queries/cart/useCart'
import Button from '@/shared/components/button'
import classNames from 'classnames/bind'
import { LucideMapPin } from 'lucide-react'
import styles from './cart.module.scss'

const cn = classNames.bind(styles)

const Cart = () => {
  const { data, isLoading, error } = useCart()
  const cartItems = data?.[0]?.items

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
            <label className={cn('select-all')}>
              <input type="checkbox" />
              전체선택 {`/`}
            </label>
            <button type="button">선택삭제</button>
          </div>
          <ul className={cn('list-wrap')}>
            {cartItems?.map((item) => (
              <CartListItem key={item.id} item={item} />
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
          <Button
            label="구매하기"
            onClick={() => {}}
            variant="filled"
            isFullWidth
            type="submit"
          />
        </div>
      </div>
    </div>
  )
}

export default Cart
