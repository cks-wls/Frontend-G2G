import '@/shared/components/Form/CheckBox/CheckBoxStyle.scss'

interface CheckBoxProps {
  isChecked: boolean
  onCheckedChange: (isChecked: boolean) => void
  label?: string
  id?: string
}

function CheckBox({ isChecked, onCheckedChange, label, id }: CheckBoxProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCheckedChange(e.target.checked)
  }

  return (
    <div className="check-box-wrap">
      <input
        type="checkbox"
        id={id}
        onChange={handleChange}
        checked={isChecked}
      />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  )
}
export default CheckBox
