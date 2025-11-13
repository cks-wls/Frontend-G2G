import { API_PATHS } from '@/constants/api'
import { http, HttpResponse } from 'msw'
import { mockCart } from './mockData'

export const cartHandler = [
  http.get(API_PATHS.CARTS.GET, () => {
    return HttpResponse.json(mockCart)
  }),

  http.delete(`/api/carts/:id/`, async({request}) => {
    const { productIds } = (await request.json()) as { productIds: string[] }

    if (!productIds || productIds.length === 0) {
      return new HttpResponse(null, { status: 400, statusText: 'Bad Request' })
    }
    const cart = mockCart[0]
    cart.items = cart.items.filter(
      (item) => !productIds.includes(String(item.id)),
    )
    return HttpResponse.json({ success: true, deletedIds: productIds })
  })
]
