import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from '@shared/components/Header/Header.module.scss';

export interface HeaderProps {
  logoSrc?: string; // 로고 이미지 경로
  title?: string; // 헤더 제목
  userType?: 'guest' | 'consumer' | 'seller'; // 사용자 구분
  userName?: string; // 로그인된 사용자명
  onLogoClick?: () => void; // 로고 클릭 시 동작
  onLogout?: () => void; // 로그아웃 버튼 클릭 시
  onSearch?: (keyword: string) => void; // 검색 이벤트
  className?: string;
  style?: React.CSSProperties;
}

const Header = ({
  logoSrc,
  title,
  userType = 'guest',
  userName,
  onLogoClick,
  onLogout,
  onSearch,
  className = '',
  style,
}: HeaderProps) => {
  const [search, setSearch] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogoClick = () => {
    if (onLogoClick) onLogoClick();
    else window.location.href = '/'; // 기본: 메인 이동
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && search.trim()) onSearch(search.trim());
  };

  const classNames = [
    styles.header,
    className,
  ].join(' ');

  return (
    <header className={classNames} style={style}>
      {/* 로고 */}
      <div className={styles.left}>
        <div className={styles.logo} onClick={handleLogoClick}>
          {logoSrc ? <img src={logoSrc} alt="로고" /> : 'LOGO'}
        </div>
        {title && <h1 className={styles.title}>{title}</h1>}
      </div>

      {/* 중앙: 검색창 */}
      <form className={styles.searchBox} onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="검색어를 입력하세요"
        />
        <button type="submit">검색</button>
      </form>

      {/* 오른쪽: 사용자 메뉴 */}
      <div className={styles.right}>
        {userType === 'guest' && (
          <>
            <Link to="/login" className={styles.link}>
              로그인
            </Link>
            <Link to="/signup" className={styles.link}>
              회원가입
            </Link>
          </>
        )}

        {userType === 'consumer' && (
          <div
            className={styles.userMenu}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className={styles.userName}>{userName ?? '사용자'}님 ▼</span>
            {dropdownOpen && (
              <div className={styles.dropdown}>
                <Link to="/orders">주문내역</Link>
                <Link to="/profile">회원정보</Link>
                <button onClick={onLogout}>로그아웃</button>
              </div>
            )}
          </div>
        )}

        {userType === 'seller' && (
          <div
            className={styles.userMenu}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className={styles.userName}>
              {userName ?? '판매자'}님 ▼
            </span>
            {dropdownOpen && (
              <div className={styles.dropdown}>
                <Link to="/seller/dashboard">판매자센터</Link>
                <Link to="/seller/products">상품관리</Link>
                <button onClick={onLogout}>로그아웃</button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
