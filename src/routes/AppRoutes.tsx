import { ROUTE_PATHS } from '@/constants/route'
import MainPage from '@/pages/MainPage'
import ProducerCertification from '@/components/signUp/producerCertification'
import ProducerSignUp from '@/components/signUp/producerSignUp'
import SignUp from '@/pages/signUp/signUp'
import UserSignUp from '@/components/signUp/userSignUp'
import CommonLayout from '@/shared/components/Layout/CommonLayout'
import LoginLayout from '@/shared/components/Layout/loginLayout'
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
      {/* 로그인 페이지 */}
      <Route element={<LoginLayout />}>
        <Route path="/login" element={<SignUp />} />
        <Route path="/login/user" element={<UserSignUp />} />
        <Route
          path="/login/producer-certification"
          element={<ProducerCertification />}
        />
        <Route path="/login/producer" element={<ProducerSignUp />} />
      </Route>
      <Route path={ROUTE_PATHS.SELLER.INDEX} element={<SellerLayout />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  )
}
export default AppRoutes
