import { API_PATHS } from '@/constants/api'
import { http, HttpResponse } from 'msw'
import { reviews } from './mockData'

export const reviewListHandler = [
  http.get(API_PATHS.REVIEWS.GET_REVIEW_LIST, () => {
    return HttpResponse.json(reviews)
  }),
]
