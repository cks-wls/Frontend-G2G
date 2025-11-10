import '@/shared/components/Form/Producer/ProducerNumberFormStyle.scss'
interface ProducerNumberFormProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  isError?: boolean
  isDisabled?: boolean
  placeHolder?: string
  type?: 'text' | 'email' | 'password'
  name?: string
  readOnly?: boolean
  value?: string
}
function ProducerNumberForm({
  onChange,
  isError,
  isDisabled,
  placeHolder = '사업자등록번호 입력(-없이 숫자만 입력)',
  type = 'text',
  name,
  readOnly,
  value,
}: ProducerNumberFormProps) {
  return (
    <input
      className={`producer-number-form ${isError ? 'error-form' : ''} ${isDisabled ? 'disabled' : ''}`}
      placeholder={placeHolder}
      onChange={onChange}
      type={type}
      name={name}
      readOnly={readOnly}
      value={value}
    ></input>
  )
  // 이후 API와 연동시켜야함
}

export default ProducerNumberForm
