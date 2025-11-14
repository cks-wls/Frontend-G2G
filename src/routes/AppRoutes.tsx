import UserSignIn from '@/components/signIn/UserSignIn'
import ProducerCertification from '@/components/signUp/producerCertification'
import ProducerSignUp from '@/components/signUp/producerSignUp'
import UserSignUp from '@/components/signUp/userSignUp'
import { ROUTE_PATHS } from '@/constants/route'
import Cart from '@/pages/cart'
import Main from '@/pages/main'
import ProductList from '@/pages/productList'
import SignIn from '@/pages/signIn/signIn'
import SignUp from '@/pages/signUp/signUp'
import CommonLayout from '@/shared/components/Layout/CommonLayout'
import MypageLayout from '@/shared/components/Layout/MypageLayout'
import SellerLayout from '@/shared/components/Layout/SellerLayout'
import SignUpLayout from '@/shared/components/Layout/SignUpLayout'
import { Route, Routes } from 'react-router-dom'
import OrderList from '@/pages/myPage/OrderList'
import EmailCertification from '@/components/signUp/emailCertification'
import WishList from '@/pages/myPage/WishList'
import ProductDetail from '@/pages/productDetail/productDetail'

function AppRoutes() {
  return (
    <Routes>
      {/* 게스트와 소비자 공용 레이아웃 */}
      <Route element={<CommonLayout />}>
        <Route index element={<Main />} />
        <Route
          path={ROUTE_PATHS.PRODUCT_LIST}
          element={<ProductList />}
        />
        <Route
          path={ROUTE_PATHS.CATEGORY_LIST.TEMPLATE}
          element={<ProductList />}
        />
        <Route
          path={ROUTE_PATHS.PRODUCT_DETAIL.TEMPLATE}
          element={<ProductDetail />}
        />
        {/* 소비자만 접근 가능 */}
        <Route path={ROUTE_PATHS.CART} element={<Cart />} />
        <Route path={ROUTE_PATHS.MYPAGE.INDEX} element={<MypageLayout />}>
          <Route path={ROUTE_PATHS.MYPAGE.ORDER_LIST} element={<OrderList />} />
          <Route path={ROUTE_PATHS.MYPAGE.WISH_LIST} element={<WishList />} />
          <Route path={ROUTE_PATHS.MYPAGE.REVIEWS} element={<OrderList />} />
          <Route
            path={ROUTE_PATHS.MYPAGE.INFORMATION}
            element={<OrderList />}
          />
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
        <Route
          path={ROUTE_PATHS.EMAIL.INDEX}
          element={<EmailCertification />}
        />
      </Route>
      <Route path={ROUTE_PATHS.SELLER.INDEX} element={<SellerLayout />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  )
}
export default AppRoutes
