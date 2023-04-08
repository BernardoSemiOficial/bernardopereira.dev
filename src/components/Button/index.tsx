import { ReactNode } from 'react'

import * as S from './button.css'

interface ButtonProps {
  children: ReactNode
  variant: keyof typeof S.button
}

export const Button = ({ children, variant }: ButtonProps) => {
  return <button className={S.button[variant]}>{children}</button>
}
