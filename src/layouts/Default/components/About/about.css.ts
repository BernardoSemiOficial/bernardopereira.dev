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
  maxWidth: vars.content.max,
  paddingBlock: vars.spacing.xxxlarge,
})

export const paragraph = style({
  font: vars.font.bodyLarge,
  letterSpacing: vars.font.letterSpacing.medium,
  color: vars.color.black[900],
  selectors: {
    '& ~ &': {
      marginTop: vars.spacing.medium,
    },
  },
})

export const socialNetworks = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBlock: vars.spacing.xxmedium,
  gap: vars.spacing.xsmall,
})
