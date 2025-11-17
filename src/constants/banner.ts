import banner1 from '@/assets/images/main/banner_1.jpg'
import banner2 from '@/assets/images/main/banner_2.jpg'
import banner3 from '@/assets/images/main/banner_3.jpg'
import banner4 from '@/assets/images/main/banner_4.jpg'
import { ROUTE_PATHS } from '@/constants/route'

interface Banner {
  path: string
  img: string
  alt: string
}
export const BANNERS: Banner[] = [
  { path: ROUTE_PATHS.HOME, img: banner1, alt: '배너1' },
  { path: ROUTE_PATHS.HOME, img: banner2, alt: '배너2' },
  { path: ROUTE_PATHS.HOME, img: banner3, alt: '배너3' },
  { path: ROUTE_PATHS.HOME, img: banner4, alt: '배너4' },
]
