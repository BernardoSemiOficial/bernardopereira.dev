import { vars } from '@/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'inline-flex',
  alignItems: 'center',
  background: vars.color.yellow[700],
  borderRadius: vars.borderRadius.small,
  padding: vars.spacing.small,
  paddingInline: vars.spacing.xsmall,
})
export const icon = style({})
export const label = style({})
