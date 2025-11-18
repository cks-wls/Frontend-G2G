import type { ServerQuestionType } from '@/types/question'
export const questions: ServerQuestionType[] = [
  {
    id: 1,
    title: '상품 문의 드립니다',
    user_name: '이**',
    created_at: '2025-11-18',
    is_answer: false,
  },
  {
    id: 2,
    title: '상품 관련 문의드립니다',
    user_name: '김**',
    created_at: '2025-11-17',
    is_answer: false,
  },
  {
    id: 3,
    title: '배송 문의 드립니다',
    user_name: '황**',
    created_at: '2025-11-16',
    is_answer: false,
  },
  {
    id: 4,
    title: '상품 원산지 관련 문의드립니다',
    user_name: '강**',
    created_at: '2025-11-15',
    is_answer: true,
  },
  {
    id: 5,
    title: '문의 드립니다',
    user_name: '이**',
    created_at: '2025-11-14',
    is_answer: true,
  },
]
