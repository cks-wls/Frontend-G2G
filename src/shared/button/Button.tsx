import React from 'react';
import styles from '@shared/components/Button/Button.module.scss';

// 리터럴 유니언 타입 (규칙 준수)
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonVariant = 'filled' | 'outline' | 'text';
export type IconPosition = 'left' | 'right';

// 객체 타입 정의 (규칙 준수)
export interface ButtonProps {
  label: string;
  onClick?: () => void;
  isDisabled?: boolean;
  size?: ButtonSize;
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  isFullWidth?: boolean;
  /** 외부 스타일 커스터마이징 지원 */
  className?: string;
  style?: React.CSSProperties;
}

const Button = ({
  label,
  onClick,
  isDisabled = false,
  size = 'md',
  type = 'button',
  variant = 'filled',
  icon,
  iconPosition = 'left',
  isFullWidth = false,
  className = '',
  style,
}: ButtonProps) => {
  // 클릭 핸들러 (규칙 준수)
  const handleClick = () => {
    if (isDisabled) return;
    onClick?.();
  };

  // 클래스명 구성 (snake_case 규칙 준수)
  const classNames = [
    styles.button,
    styles[`size_${size}`],
    styles[`variant_${variant}`],
    isFullWidth ? styles.full_width : '',
    isDisabled ? styles.disabled : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={classNames}
      onClick={handleClick}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      style={style}
    >
      {icon && iconPosition === 'left' && (
        <span className={styles.icon}>{icon}</span>
      )}
      <span>{label}</span>
      {icon && iconPosition === 'right' && (
        <span className={styles.icon}>{icon}</span>
      )}
    </button>
  );
};

export default Button;
