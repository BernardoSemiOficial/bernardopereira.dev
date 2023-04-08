import { vars } from '@/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  width: '100%',
  textAlign: 'center',
  paddingBlock: vars.spacing.medium,
  paddingInline: vars.spacing.large,
  borderTop: vars.border.small,
  borderColor: vars.color.black[900],
  font: vars.font.bodySmall,
  gap: vars.spacing.xxxsmall,
})

export const info = style({
  opacity: '0.8',
  display: 'inline-block',
  marginInline: vars.spacing.xxsmall,
})

export const link = style({
  opacity: '0.8',
  textDecoration: 'underline',
  ':before': {
    content: '•',
    display: 'inline-block',
    marginRight: vars.spacing.xxsmall,
  },
})
