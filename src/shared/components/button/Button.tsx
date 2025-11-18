import { type ReactNode } from 'react'
import styles from '@/shared/components/button/button.module.scss'

// 리터럴 유니언 타입 (규칙 준수)
export type ButtonSize = 'ssm' | 'sm' | 'md' | 'lg' | 'mlg' | 'xlg'
export type ButtonVariant = 'filled' | 'outline' | 'text' | 'gray'
export type IconPosition = 'left' | 'right'

// 객체 타입 정의 (규칙 준수)
export interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  isDisabled?: boolean
  isActive?: boolean
  size?: ButtonSize
  type?: 'button' | 'submit' | 'reset'
  variant?: ButtonVariant
  isFullWidth?: boolean
  /** 외부 스타일 커스터마이징 지원 */
  className?: string
}

const Button = ({
  children,
  onClick,
  isDisabled = false,
  isActive = false,
  size = 'md',
  type = 'button',
  variant = 'filled',
  isFullWidth = false,
  className = '',
}: ButtonProps) => {
  // 클릭 핸들러 (규칙 준수)
  const handleClick = () => {
    if (isDisabled) return
    onClick?.()
  }

  // 클래스명 구성 (snake_case 규칙 준수)
  const classNames = [
    styles.button,
    styles[`size_${size}`],
    styles[`variant_${variant}`],
    isFullWidth ? styles.full_width : '',
    isDisabled ? styles.disabled : '',
    isActive ? styles.active : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      type={type}
      className={classNames}
      onClick={handleClick}
      disabled={isDisabled}
      aria-disabled={isDisabled}
    >
      {children}
    </button>
  )
}

export default Button
