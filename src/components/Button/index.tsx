import { ButtonHTMLAttributes, ReactNode } from 'react'

import * as S from './button.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant: keyof typeof S.button
}

export const Button = ({ children, variant, ...props }: ButtonProps) => {
  return (
    <button {...props} className={S.button[variant]}>
      {children}
    </button>
  )
}
