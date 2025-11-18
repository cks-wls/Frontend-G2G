import { API_PATHS } from '@/constants/api'
import { http, HttpResponse } from 'msw'
import { questions } from './mockData'

export const questionListHandler = [
  http.get(API_PATHS.QUESTIONS.GET_QUESTION_LIST, () => {
    return HttpResponse.json(questions)
  }),
]
