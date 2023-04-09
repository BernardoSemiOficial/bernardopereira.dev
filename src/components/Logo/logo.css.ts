import { vars } from '@/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  margin: vars.spacing.none,
})

export const photo = style({
  borderRadius: '50%',
})

export const name = style({
  font: vars.font.subtitleMedium,
  letterSpacing: vars.font.letterSpacing.small,
  marginLeft: vars.spacing.xsmall,
  color: vars.color.yellow[700],
})
