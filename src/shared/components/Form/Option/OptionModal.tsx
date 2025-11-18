import '@/shared/components/Form/Option/OptionModalStyle.scss'
import bottomArrow from '@/assets/icons/bottomArrow.svg'
// import optionConstants from '@/constants/OPTION_CONSTANTS'
import { useState } from 'react'
import type { ProductOptionValue } from '@/types/product'
export type ModalSize = 'md' | 'lg'
//  모달의 두가지 버전을 위해 type 설정
interface OptionModalProps {
  size: ModalSize
  placeHolder?: string
  className?: string
  option?: ProductOptionValue[]
  onSelectOption?: (name: string, price: number) => void
}

function OptionModal({
  size,
  placeHolder = '필수 옵션을 입력해주세요',
  className,
  option,
  onSelectOption,
}: OptionModalProps) {
  const [isModalOpen, setisModalOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(placeHolder)
  // 임시로 useState를 이용해 모달 열리는 여부 설정
  const handleClick = () => {
    setisModalOpen((prev) => !prev)
  }
  const handleSelect = (value: ProductOptionValue) => {
    const price = parseInt(value.extra_price)

    setSelectedOption(`${value.category_name} (+${price.toLocaleString()}원)`)

    onSelectOption?.(value.category_name, price)

    setisModalOpen(false)
  }
  return (
    <div className={`option-box ${className || ''}`}>
      <button className={`option-btn ${size}`} onClick={handleClick}>
        {selectedOption}
      </button>
      <img
        src={bottomArrow}
        className={`option-icon ${size} ${isModalOpen ? 'rotate' : ''}`}
      />
      {/* 만약 modalOpen이 false면 화살표 아이콘 그대로, true면 180도 회전되게 */}
      <div className={isModalOpen ? `modal-box ${size}` : ''}>
        {/* modalOpen일 때만 modal이 나타나게 설정 */}
        {isModalOpen &&
          option?.map((value) => (
            <button
              className={`modal-items ${size}`}
              key={value.category_name}
              onClick={() => handleSelect(value)}
            >
              {value.category_name} (+{parseInt(value.extra_price)}원)
            </button>
          ))}
      </div>
    </div>
  )
}
// 추후 import시 <OptionModal size="md" placeHolder="안녕하세요" /> 형태로 사용
export default OptionModal
