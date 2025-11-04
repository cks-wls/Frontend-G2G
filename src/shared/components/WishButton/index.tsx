import { LucideHeart } from 'lucide-react'
import styles from './WishButton.module.scss'

type variants = 'detail' | 'card'

interface WishButtonProps {
  wishType: variants
  isWish: boolean
  onClick: () => void
}

const WishButton = ({ wishType = 'detail', isWish, onClick }: WishButtonProps) => {
  return (
    <button
      type="button"
      className={wishType === 'detail' ? styles.detail : styles.card}
      onClick={onClick}
    >
      <LucideHeart size={28} fill={isWish ? '#4E6813' : '#FFF'} />
    </button>
  )
}

export default WishButton
