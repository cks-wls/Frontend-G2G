export const SEASON_CATEGORIES = [
  { id: 1, group_name: '시즌', name: '봄' },
  { id: 2, group_name: '시즌', name: '여름' },
  { id: 3, group_name: '시즌', name: '가을' },
  { id: 4, group_name: '시즌', name: '겨울' },
] as const

export const THEME_CATEGORIES = [
  { id: 5, group_name: '테마', name: '식량/작물' },
  { id: 6, group_name: '테마', name: '채소류' },
  { id: 7, group_name: '테마', name: '과채류' },
  { id: 8, group_name: '테마', name: '과실류' },
  { id: 9, group_name: '테마', name: '축산물' },
  { id: 10, group_name: '테마', name: '특작류' },
  { id: 11, group_name: '테마', name: '화훼류' },
  { id: 12, group_name: '테마', name: '농산가공' },
  { id: 13, group_name: '테마', name: '장류' },
  { id: 14, group_name: '테마', name: '기타' },
] as const

export const ALL_CATEGORIES = [...SEASON_CATEGORIES, ...THEME_CATEGORIES,]