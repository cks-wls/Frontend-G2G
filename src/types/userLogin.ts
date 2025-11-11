export interface UserLogIn {
  email: string
  password: string
}

export type UserLogInResponse = {
  message: string
  email?: string
  username?: string
  role?: 'user' | 'seller'
}
