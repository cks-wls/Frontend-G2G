import { ROUTE_PATHS } from '@/constants/route'
import MainPage from '@/pages/MainPage'
import ProducerCertification from '@/components/signUp/producerCertification'
import ProducerSignUp from '@/components/signUp/producerSignUp'
import SignUp from '@/pages/signUp/signUp'
import UserSignUp from '@/components/signUp/userSignUp'
import CommonLayout from '@/shared/components/Layout/CommonLayout'
import SignUpLayout from '@/shared/components/Layout/SignUpLayout'
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
      {/* 회원가입 페이지 */}
      <Route element={<SignUpLayout />}>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup/user" element={<UserSignUp />} />
        <Route
          path="/signup/seller-certification"
          element={<ProducerCertification />}
        />
        <Route path="/signup/seller" element={<ProducerSignUp />} />
      </Route>
      <Route path={ROUTE_PATHS.SELLER.INDEX} element={<SellerLayout />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  )
}
export default AppRoutes
