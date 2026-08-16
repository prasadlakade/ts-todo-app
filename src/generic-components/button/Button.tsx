import type { MouseEventHandler } from "react";

type ButtonProps = {
  text: string,
  type: 'submit' | 'reset' | 'button',
  btnClass?: string,
  btnOnClick: MouseEventHandler<HTMLButtonElement> ,
  alt?: string
}

const Button = (ButtonProps: ButtonProps) => {
  return (
    <div>
      <button type={ButtonProps.type} onClick={ButtonProps.btnOnClick} className={ButtonProps.btnClass} aria-label={ButtonProps.alt} style={{ textDecoration: 'none' }}>{ButtonProps.text}</button>
    </div>
  )
}

export default Button