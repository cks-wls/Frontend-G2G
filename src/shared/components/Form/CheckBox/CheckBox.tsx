import '@/shared/components/Form/CheckBox/CheckBoxStyle.scss'
import { useState } from 'react'

function CheckBox() {
  const [currentChecked, setCurrentChecked] = useState('')
  const handleCheck = (val: string) => {
    setCurrentChecked((prev) => (prev === val ? '' : val))
  }
  //  체크박스를 하나만 선택할 수 있도록 설정(이미 선택된 값이면 해제, 아니면 선택)
  return (
    <>
      <label>
        {/* 이곳에 텍스트 입력 */}
        <input
          type="checkbox"
          value="1"
          className="check-box"
          checked={currentChecked === '1'} // 체크되었을때 상태변화
          onChange={() => handleCheck('1')} // 체크박스 클릭시 handleCheck 함수 실행
        />
        {/* 이곳에 텍스트 입력 */}
      </label>
      <label>
        <input
          type="checkbox"
          value="2"
          className="check-box"
          checked={currentChecked === '2'}
          onChange={() => handleCheck('2')}
        />
      </label>
      <label>
        <input
          type="checkbox"
          value="3"
          className="check-box"
          checked={currentChecked === '3'}
          onChange={() => handleCheck('3')}
        />
      </label>
    </>
  )
}
export default CheckBox
