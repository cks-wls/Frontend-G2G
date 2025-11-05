import { Link } from 'react-router-dom';
import styles from '@shared/components/Footer/Footer.module.scss';

export interface FooterProps {
  companyName?: string;
  address?: string;
  email?: string;
  phone?: string;
  businessInfo?: string;
  links?: { label: string; href: string }[];
  customerCenter?: {
    phone: string;
    hours: string[];
  };
}

const Footer = ({
  companyName = 'G2G',
  address = '경기도 김포시 사우중로 87 201호',
  email = 'kdigital@nextrunners.co.kr',
  phone = '070-4099-8219',
  businessInfo = '대표자: 이한별 | 사업자 등록번호 : 540-86-00384 | 통신판매업 신고번호 : 2020-경기김포-3725',
  links = [
    { label: '개인정보처리방침', href: '#' },
    { label: '이용약관', href: '#' },
    { label: '이용안내', href: '#' },
  ],
  customerCenter = {
    phone: '070-4099-8219',
    hours: ['평일 09:00 - 18:00', '점심시간 12:00 - 13:00', '토·일·공휴일 휴무'],
  },
}: FooterProps) => {
  return (
    <footer className={styles.footer}>
      {/* 왼쪽 영역: 로고 + 링크 + 회사 정보 */}
      <div className={styles.section_left}>
        <Link to="/" className={styles.logo}>
          {companyName}
        </Link>

        {links.length > 0 && (
          <ul className={styles.links}>
            {links.map((link) => (
              <li key={`${link.label}_${link.href}`}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        )}

        <div className={styles.company_info}>
          <p>{businessInfo}</p>
          <p>
            주소 : {address} | 이메일 : <a href={`mailto:${email}`}>{email}</a> | 전화 :{' '}
            <a href={`tel:${phone}`}>{phone}</a>
          </p>
        </div>
      </div>

      {/* 오른쪽 영역: 고객센터 */}
      {customerCenter && (
        <div className={styles.section_right}>
          <strong className={styles.center_title}>고객센터</strong>
          <p className={styles.center_phone}>{customerCenter.phone}</p>
          {customerCenter.hours.map((line, i) => (
            <p key={i} className={styles.center_info}>
              {line}
            </p>
          ))}
        </div>
      )}
    </footer>
  );
};

export default Footer;
