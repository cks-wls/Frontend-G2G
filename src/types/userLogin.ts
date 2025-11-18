export interface UserLogIn {
  email: string
  password: string
}

export type UserLogInResponse = {
  access: string
  refresh: string
}
