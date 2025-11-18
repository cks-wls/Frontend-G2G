import type { JwtPayload } from 'jwt-decode'
export interface UserJwtPayload extends JwtPayload {
  is_seller?: boolean
  username: string
  user_id: string
}
