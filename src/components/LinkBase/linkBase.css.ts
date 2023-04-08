import { vars } from '@/styles/theme.css'
import { style, styleVariants } from '@vanilla-extract/css'

export const base = style({
  color: 'inherit',
  font: 'inherit',
})

export const link = styleVariants({
  normal: [base],
  underline: [
    base,
    {
      color: vars.color.yellow[700],
      paddingBottom: vars.spacing.small,
      borderBottom: vars.border.medium,
      borderColor: vars.color.yellow[700],
    },
  ],
})
