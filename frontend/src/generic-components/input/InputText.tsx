import type { ChangeEventHandler } from "react";

type InputProps = {
  type?: string,
  name: string,
  id: string,
  value: string | number,
  onChange: ChangeEventHandler<HTMLInputElement>
}

const InputText = ({ type = 'text', name, id, value, onChange }: InputProps) => {
  return (
    <div>
      <input type={type} name={name} id={id} value={value} onChange={onChange} />
    </div>
  )
}

export default InputText
