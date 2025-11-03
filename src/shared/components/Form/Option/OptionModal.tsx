import '@/shared/components/Form/Option/OptionModalStyle.scss'
import bottomArrow from '@/assets/icons/bottomArrow.svg'
import optionConstants from '@/constants/OPTION_CONSTANTS'
import { useState } from 'react'

export type ModalSize = 'md' | 'lg'
//  모달의 두가지 버전을 위해 type 설정
interface OptionModalProps {
  size: ModalSize
}
function OptionModal({ size }: OptionModalProps) {
  const [modalOpen, setModalOpen] = useState(false)
  // 임시로 useState를 이용해 모달 열리는 여부 설정
  const handleClick = () => {
    setModalOpen((prev) => !prev)
  }
  return (
    <>
      <div className="option-box">
        <button className={`option-btn ${size}`} onClick={handleClick}>
          필수 옵션을 선택해주세요
        </button>
        <img
          src={bottomArrow}
          className={`option-icon ${size} ${modalOpen ? 'rotate' : ''}`}
        />
        {/* 만약 modalOpen이 false면 화살표 아이콘 그대로, true면 180도 회전되게 */}
        <div className={modalOpen ? `modal-box ${size}` : ''}>
          {/* modalOpen일 때만 modal이 나타나게 설정 */}
          {modalOpen &&
            optionConstants.map((value: string) => (
              <button className={`modal-items ${size}`} key={value}>
                {value}
              </button>
            ))}
        </div>
      </div>
    </>
  )
}

export default OptionModal
