import { vars } from '@/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  paddingInline: vars.spacing.xxsmall,
})

export const wrapper = style({
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  maxWidth: vars.content.max,
  paddingBlock: vars.spacing.medium,
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
