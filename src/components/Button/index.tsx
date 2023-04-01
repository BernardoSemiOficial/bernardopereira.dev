import { ReactNode } from 'react'

import * as S from './style.css'

interface ButtonProps {
  children: ReactNode
}

export const Button = ({ children }: ButtonProps) => {
  return <button className={S.button.primary}>{children}</button>
}
