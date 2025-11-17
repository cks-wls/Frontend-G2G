import '@/shared/components/Form/Option/OptionModalStyle.scss'
import bottomArrow from '@/assets/icons/bottomArrow.svg'
import optionConstants from '@/constants/OPTION_CONSTANTS'
import { useState } from 'react'

export type ModalSize = 'md' | 'lg'
//  모달의 두가지 버전을 위해 type 설정
interface OptionModalProps {
  size: ModalSize
  placeHolder?: string
  className?: string
}
function OptionModal({
  size,
  placeHolder = '필수 옵션을 입력해주세요',
  className,
}: OptionModalProps) {
  const [isModalOpen, setisModalOpen] = useState(false)
  // 임시로 useState를 이용해 모달 열리는 여부 설정
  const handleClick = () => {
    setisModalOpen((prev) => !prev)
  }
  return (
    <div className={`option-box ${className || ''}`}>
      <button className={`option-btn ${size}`} onClick={handleClick}>
        {placeHolder}
      </button>
      <img
        src={bottomArrow}
        className={`option-icon ${size} ${isModalOpen ? 'rotate' : ''}`}
      />
      {/* 만약 modalOpen이 false면 화살표 아이콘 그대로, true면 180도 회전되게 */}
      <div className={isModalOpen ? `modal-box ${size}` : ''}>
        {/* modalOpen일 때만 modal이 나타나게 설정 */}
        {isModalOpen &&
          optionConstants.map((value: string) => (
            <button className={`modal-items ${size}`} key={value}>
              {value}
            </button>
          ))}
      </div>
    </div>
  )
}
// 추후 import시 <OptionModal size="md" placeHolder="안녕하세요" /> 형태로 사용
export default OptionModal
