import Logo from '@/assets/images/logo.png'
import { THEME_CATEGORIES } from '@/constants/categories'
import { ROUTE_PATHS } from '@/constants/route'
import Search from '@/shared/components/Form/Search/Search'
import type { UserType } from '@/types/user'
import classNames from 'classnames/bind'
import {
  LucideHeart,
  LucideLogOut,
  LucideMenu,
  LucideShoppingCart,
  LucideSprout,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

const cn = classNames.bind(styles)

export interface HeaderProps {
  userType?: UserType // 사용자 구분
  userName?: string // 로그인된 사용자명
  onLogout?: () => void // 로그아웃 버튼 클릭 시
  onSearch?: (keyword: string) => void // 검색 이벤트
}

const Header = ({ userType = 'GUEST', userName, onLogout }: HeaderProps) => {
  const [isCompact, setIsCompact] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      // 스크롤 시 콤팩트 모드 활성화
      setIsCompact(currentScrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={cn('header', {
        compact: isCompact,
        seller: userType === 'SELLER',
      })}
    >
      {/* 로그인 후 (판매자 유형) */}
      {userType === 'SELLER' ? (
        <>
          <h1>
            <img src={Logo} alt="G2G 로고" />
          </h1>
          <button className={styles.logout} type="button" onClick={onLogout}>
            로그아웃
            <LucideLogOut size={16} />
          </button>
        </>
      ) : (
        // 로그인 전
        <div className={styles.container}>
          <div className={cn('top', { hidden: isCompact })}>
            {userType === 'GUEST' && (
              <div className={styles.login}>
                <Link to={ROUTE_PATHS.LOGIN.INDEX}>로그인</Link>
                <Link to={ROUTE_PATHS.SIGNUP.INDEX}>회원가입</Link>
              </div>
            )}

            {/* 로그인 후 (소비자 유형) */}
            {userType === 'CONSUMER' && (
              <Link to={ROUTE_PATHS.MYPAGE.INDEX} className={styles.user}>
                <span>{userName ?? '사용자'} 님</span>
                <div className={styles['user-icon']}>
                  <LucideSprout size={20} />
                </div>
                <ul className={styles.dropdown}>
                  <li>
                    <Link to={ROUTE_PATHS.MYPAGE.INDEX}>주문내역</Link>
                  </li>
                  <li>
                    <Link to={ROUTE_PATHS.MYPAGE.INDEX}>회원정보</Link>
                  </li>
                  <li>
                    <button type="button" onClick={onLogout}>
                      로그아웃
                    </button>
                  </li>
                </ul>
              </Link>
            )}
          </div>
          <div className={styles.middle}>
            <h1 className={cn('logo', { hidden: isCompact })}>
              <Link to={ROUTE_PATHS.HOME}>
                <img src={Logo} alt="G2G 로고" />
              </Link>
            </h1>
            <div className={styles['middle-right']}>
              <Search />
              <div>
                <Link to={ROUTE_PATHS.MYPAGE.INDEX}>
                  <LucideHeart />
                </Link>
                <Link to={ROUTE_PATHS.CART}>
                  <LucideShoppingCart />
                </Link>
              </div>
            </div>
          </div>
          <nav className={cn('nav', { compact: isCompact })}>
            <div className={styles['nav-left']}>
              <button type="button" className={styles['category']}>
                <LucideMenu />
                카테고리
              </button>
              <ul className={styles['category-menu']}>
                {THEME_CATEGORIES.map((c) => (
                  <li>
                    <Link to={ROUTE_PATHS.CATEGORY_LIST.GENERATOR(c.id)}>
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className={styles.gnb}>
                <li>
                  <Link to={ROUTE_PATHS.PRODUCT_LIST}>신상품</Link>
                </li>
                <li>
                  <Link to={ROUTE_PATHS.PRODUCT_LIST}>베스트</Link>
                </li>
                <li>
                  <Link to={ROUTE_PATHS.PRODUCT_LIST}>알뜰상품</Link>
                </li>
              </ul>
            </div>
            {isCompact && (
              <div className={styles['nav-compact-right']}>
                <Search />
                <div>
                  <Link to={ROUTE_PATHS.MYPAGE.INDEX}>
                    <LucideHeart />
                  </Link>
                  <Link to={ROUTE_PATHS.CART}>
                    <LucideShoppingCart />
                  </Link>
                </div>
              </div>
            )}
            <div className={cn('nav-right', { hidden: isCompact })}>
              <Link to={ROUTE_PATHS.SIGNUP.SELLER}>입점신청</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
