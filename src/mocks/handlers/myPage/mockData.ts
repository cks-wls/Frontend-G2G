import type { ServerOrders } from '@/types/orders'
import type { ServerWishList } from '@/types/wishList'

export const orders: ServerOrders[] = [
  {
    id: 1,
    user: 1,
    user_name: 'string',
    address: 'string',
    total_amount: '3',
    payment_method: 'card',
    created_at: '2025-11-11T12:55:41.311Z',
    updated_at: '2025-11-11T12:55:41.311Z',
    items: [
      {
        id: 1,
        order: 1,
        product: 1,
        product_name: '밤',
        quantity: 5,
        price_at_purchase: '50000',
        subtotal: '100000',
        status: 'completed',
        order_date: '2025-11-11T12:55:41.311Z',
      },
      {
        id: 2,
        order: 2,
        product: 2,
        product_name: '감',
        quantity: 6,
        price_at_purchase: '50000',
        subtotal: '100000',
        status: 'completed',
        order_date: '2025-11-11T12:55:41.311Z',
      },
    ],
  },
  {
    id: 2,
    user: 1,
    user_name: 'string',
    address: 'string',
    total_amount: '3',
    payment_method: 'card',
    created_at: '2025-11-11T12:55:41.311Z',
    updated_at: '2025-11-11T12:55:41.311Z',
    items: [
      {
        id: 1,
        order: 1,
        product: 1,
        product_name: '밤',
        quantity: 5,
        price_at_purchase: '50000',
        subtotal: '100000',
        status: 'completed',
        order_date: '2025-11-11T12:55:41.311Z',
      },
    ],
  },
]

export const wishLists: ServerWishList[] = [
  {
    id: 1,
    user: 1,
    product: 1,
    is_active: true,
    created_at: "2025-11-12T15:35:46.811Z"
  },
  {
    id: 2,
    user: 1,
    product: 2,
    is_active: false,
    created_at: "2025-11-12T15:35:46.811Z"
  }
]