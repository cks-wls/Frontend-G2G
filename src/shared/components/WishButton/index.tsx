import { LucideHeart } from 'lucide-react'
import styles from './WishButton.module.scss'

type variants = 'detail' | 'card'

interface WishButtonProps {
  buttonType?: variants
  isWish: boolean
  onClick: () => void
}

const WishButton = ({
  buttonType = 'detail',
  isWish,
  onClick,
}: WishButtonProps) => {
  return (
    <button
      type="button"
      className={buttonType === 'detail' ? styles.detail : styles.card}
      onClick={onClick}
    >
      <LucideHeart size={28} fill={isWish ? '#4E6813' : '#FFF'} />
    </button>
  )
}

export default WishButton
