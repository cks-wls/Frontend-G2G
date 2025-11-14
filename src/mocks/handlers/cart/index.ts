import { API_PATHS } from '@/constants/api'
import { http, HttpResponse } from 'msw'
import { mockCart } from './mockData'

export const cartHandler = [
  http.get(API_PATHS.CARTS.GET, () => {
    return HttpResponse.json(mockCart)
  }),

  http.patch(`/api/carts/:id/`, async ({ request }) => {
    const { productId, quantity } = (await request.json()) as { productId: string, quantity: number }

    const cart = mockCart[0]
    const [item] = cart.items.filter(
      (item) => String(item.product) === productId
    )

    if (item.quantity > -1) {
      item.quantity = quantity

      return HttpResponse.json({
        success: true,
        updateItem: { item: item.product_name, quantity: item.quantity },
      })
    }
  }),

  http.delete(`/api/carts/:id/`, async ({ request }) => {
    const { productIds } = (await request.json()) as { productIds: string[] }

    if (!productIds || productIds.length === 0) {
      return new HttpResponse(null, { status: 400, statusText: 'Bad Request' })
    }
    const cart = mockCart[0]
    cart.items = cart.items.filter(
      (item) => !productIds.includes(String(item.id))
    )
    return HttpResponse.json({ success: true, deletedIds: productIds })
  }),
]
