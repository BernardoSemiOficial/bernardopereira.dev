import { LinkHTMLAttributes, ReactNode } from 'react'

import type { RecipeVariants } from '@vanilla-extract/recipes'

import * as S from './linkBase.css'

interface LinkBaseProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  variant: RecipeVariants<typeof S.link>
  newTab: boolean
}

export const LinkBase = ({
  children,
  variant,
  newTab = false,
  ...props
}: LinkBaseProps) => {
  const target = newTab ? '_blank' : '_self'
  return (
    <a {...props} className={S.link({ ...variant })} target={target}>
      {children}
    </a>
  )
}
