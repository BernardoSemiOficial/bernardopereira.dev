import { vars } from '@/styles/theme.css'
import { style, styleVariants } from '@vanilla-extract/css'

export const base = style({
  border: 'none',
  cursor: 'pointer',
  color: vars.color.white[900],
  backgroundColor: vars.color.black[900],
  borderRadius: vars.borderRadius.xsmall,
  paddingBlock: vars.spacing.xsmall,
  paddingInline: vars.spacing.medium,
  boxShadow: vars.boxShadow.small,
  font: vars.font.linkSmall,
})

export const button = styleVariants({
  primary: [
    base,
    {
      backgroundColor: vars.color.yellow[600],
    },
  ],
  secondary: [
    base,
    {
      backgroundColor: vars.color.brown[900],
    },
  ],
})
