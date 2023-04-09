import { vars } from '@/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const socialNetworks = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBlock: vars.spacing.xxmedium,
  gap: vars.spacing.xsmall,
})
