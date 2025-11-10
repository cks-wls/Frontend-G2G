import '@/components/signUp/producerCertification.scss'
import ProducerNumberForm from '@/shared/components/Form/Producer/ProducerNumberForm'
import Button from '@/shared/components/button'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
function ProducerCertification() {
  const navigate = useNavigate()
  const [businessNumber, setBusinessNumber] = useState('')
  // 추후 사업자번호 전달을 위해 useState사용
  const [isError, setIsError] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    setBusinessNumber(input)
    setIsError(!(input.length === 10 && /^\d+$/.test(input)))
  }
  useEffect(() => {}, [businessNumber])
  const isActive = () => {
    const result = businessNumber.length === 10 && /^\d+$/.test(businessNumber)
    return result
  }
  return (
    <div className="producer-certification-box">
      <div className="producer-certification-title">사업자 회원가입</div>
      <ProducerNumberForm onChange={handleChange} isError={isError} />
      <div className={`error-msg ${isError ? '' : 'display-none'}`}>
        10자리 숫자를 입력해주세요
      </div>
      <Button
        size="lg"
        variant="gray"
        label="사업자번호 확인하기"
        type="submit"
        isActive={isActive()}
        className="producer-certification-btn"
        onClick={() => {
          if (isActive()) {
            navigate('/signup/seller', { state: { businessNumber } })
          }
        }}
      />
    </div>
  )
}
export default ProducerCertification
