import Logo from '@/assets/images/logo.png'
import { ROUTE_PATHS } from '@/constants/route'
import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

export interface FooterProps {
  logoSrc?: string
  address?: string
  email?: string
  phone?: string
  businessInfo?: string
  links?: { label: string; href: string }[]
  customerCenter?: {
    phone: string
    hours: string[]
  }
}

const Footer = ({
  logoSrc = Logo,
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
    hours: [
      '평일 09:00 - 18:00',
      '점심시간 12:00 - 13:00',
      '토·일·공휴일 휴무',
    ],
  },
}: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.section_left}>
          <Link to={ROUTE_PATHS.HOME}>
            <img src={logoSrc} alt="G2G 로고" />
          </Link>

          <ul className={styles.links}>
            {links.map((link) => (
              <li key={`${link.label}_${link.href}`}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <div className={styles.company_info}>
            <p>{businessInfo}</p>
            <p>
              주소 : {address} | 이메일 :{' '}
              <a href={`mailto:${email}`}>{email}</a> | 전화 :{' '}
              <a href={`tel:${phone}`}>{phone}</a>
            </p>
          </div>
        </div>

        <div className={styles.section_right}>
          <strong className={styles.center_title}>고객센터</strong>
          <p className={styles.center_phone}>{customerCenter.phone}</p>
          {customerCenter.hours.map((line, i) => (
            <p key={i} className={styles.center_info}>
              {line}
            </p>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
