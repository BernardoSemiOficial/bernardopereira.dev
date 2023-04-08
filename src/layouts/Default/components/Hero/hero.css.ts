import { vars } from '@/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  paddingInline: vars.spacing.xxsmall,
})

export const wrapper = style({
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: vars.container.max,
  paddingBlock: vars.spacing.xxxlarge,
})

export const apresentation = style({
  textAlign: 'center',
  font: vars.font.headlineLarge,
  letterSpacing: vars.font.letterSpacing.medium,
  color: vars.color.black[900],
  paddingBlock: vars.spacing.large,
})

export const name = style({
  color: vars.color.yellow[700],
})

export const about = style({
  font: vars.font.bodySmall,
  letterSpacing: vars.font.letterSpacing.small,
  color: vars.color.black[900],
})
