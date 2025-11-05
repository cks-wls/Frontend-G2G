import checkBoxConstants from '@/constants/CHECKBOX_CONSTANTS'
import '@/shared/components/Form/CheckBox/CheckBoxStyle.scss'
import { useState } from 'react'

function CheckBox() {
  const totalCount = checkBoxConstants.length // 추후에 API와 연동해서 수정할 예정
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]) // 선택된 옵션을 배열로 관리
  const handleOptionCheck = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((val) => val !== option))
    } else {
      setSelectedOptions([...selectedOptions, option])
    }
  }
  // 개별 옵션 선택 핸들러
  const handleSelectAll = () => {
    if (selectedOptions.length === totalCount) {
      setSelectedOptions([])
    } else {
      setSelectedOptions([...checkBoxConstants])
    }
  } // 전체 선택 / 해제 핸들러

  return (
    <>
      <div className="all-select-box">
        <label htmlFor="totalCheck">
          <input
            type="checkbox"
            value="all"
            className="check-box"
            id="totalCheck"
            onClick={handleSelectAll}
            checked={selectedOptions.length === totalCount}
          />
          전체 선택 ({selectedOptions.length}/{totalCount})
          {/* 이후에 API와 연동해 전체 개수 연동하기 */}
        </label>
      </div>
      {checkBoxConstants.map((option, index) => (
        <div className="option-box" key={index}>
          <label htmlFor={`check-${index}`}>
            <input
              type="checkbox"
              value={option}
              className="check-box"
              id={`check-${index}`}
              checked={selectedOptions.includes(option)}
              onChange={() => handleOptionCheck(option)}
            />
            {option}
          </label>
        </div>
      ))}
    </>
  )
}
export default CheckBox
