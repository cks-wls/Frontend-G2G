import UserSignIn from '@/components/signIn/UserSignIn'
import ProducerCertification from '@/components/signUp/producerCertification'
import ProducerSignUp from '@/components/signUp/producerSignUp'
import UserSignUp from '@/components/signUp/userSignUp'
import { ROUTE_PATHS } from '@/constants/route'
import Main from '@/pages/main'
import ProductList from '@/pages/productList'
import SignIn from '@/pages/signIn/signIn'
import SignUp from '@/pages/signUp/signUp'
import CommonLayout from '@/shared/components/Layout/CommonLayout'
import MypageLayout from '@/shared/components/Layout/MypageLayout'
import SellerLayout from '@/shared/components/Layout/SellerLayout'
import SignUpLayout from '@/shared/components/Layout/SignUpLayout'
import { Route, Routes } from 'react-router-dom'

function AppRoutes() {
  return (
    <Routes>
      {/* 게스트와 소비자 공용 레이아웃 */}
      <Route element={<CommonLayout />}>
        <Route index element={<Main />} />
        <Route path={ROUTE_PATHS.CATEGORY_LIST.TEMPLATE} element={<ProductList />} />
        {/* 소비자만 접근 가능 */}
        <Route path={ROUTE_PATHS.MYPAGE.INDEX} element={<MypageLayout />}>
          <Route index element={<Main />} />
        </Route>
      </Route>
      {/* 회원가입 및 로그인 페이지 */}
      <Route element={<SignUpLayout />}>
        <Route path={ROUTE_PATHS.SIGNUP.INDEX} element={<SignUp />} />
        <Route path={ROUTE_PATHS.SIGNUP.USER} element={<UserSignUp />} />
        <Route
          path={ROUTE_PATHS.SIGNUP.SELLER_CERTIFICATION}
          element={<ProducerCertification />}
        />
        <Route path={ROUTE_PATHS.SIGNUP.SELLER} element={<ProducerSignUp />} />
        <Route path={ROUTE_PATHS.LOGIN.INDEX} element={<SignIn />} />
        <Route path={ROUTE_PATHS.LOGIN.USER} element={<UserSignIn />} />
      </Route>
      <Route path={ROUTE_PATHS.SELLER.INDEX} element={<SellerLayout />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  )
}
export default AppRoutes
