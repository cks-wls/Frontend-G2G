import { ROUTE_PATHS } from '@/constants/route'
import MainPage from '@/pages/MainPage'
import CommonLayout from '@/shared/components/Layout/CommonLayout'
import MypageLayout from '@/shared/components/Layout/MypageLayout'
import SellerLayout from '@/shared/components/Layout/SellerLayout'
import { Route, Routes } from 'react-router-dom'

function AppRoutes() {
  return (
    <Routes>
      {/* 게스트와 소비자 공용 레이아웃 */}
      <Route element={<CommonLayout />}>
        <Route index element={<MainPage />} />

        {/* 소비자만 접근 가능 */}
        <Route path={ROUTE_PATHS.MYPAGE.INDEX} element={<MypageLayout />}>
        <Route index element={<MainPage />} />
        
        </Route>
      </Route>

      <Route path={ROUTE_PATHS.SELLER.INDEX} element={<SellerLayout />}>
      <Route index element={<MainPage />} />
        
      </Route>
    </Routes>
  )
}
export default AppRoutes