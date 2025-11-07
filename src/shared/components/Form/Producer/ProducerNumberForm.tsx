import '@/shared/components/Form/Producer/ProducerNumberFormStyle.scss'
interface ProducerNumberFormProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  isError?: boolean
  placeHolder?: string
  type?: 'text' | 'email' | 'password' | 'number'
}
function ProducerNumberForm({
  onChange,
  isError,
  placeHolder = '사업자등록번호 입력(-없이 숫자만 입력)',
  type = 'text',
}: ProducerNumberFormProps) {
  return (
    <input
      className={`producer-number-form ${isError ? 'error-form' : ''}`}
      placeholder={placeHolder}
      onChange={onChange}
      type={type}
    ></input>
  )
  // 이후 API와 연동시켜야함
}

export default ProducerNumberForm
