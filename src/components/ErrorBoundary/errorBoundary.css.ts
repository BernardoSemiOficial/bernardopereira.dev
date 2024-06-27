import { greaterThan } from '@/styles/responsive.css'
import { vars } from '@/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  userSelect: 'none',
  textAlign: 'center',
  marginBlock: vars.spacing.xxxlarge,
  paddingBlock: vars.spacing.xxxlarge,
})

export const errorIcon = style([
  {
    maxWidth: '50px',
    display: 'inline-block',
    marginBottom: vars.spacing.small,
  },
  greaterThan({
    tabletMD: {
      maxWidth: '100px',
      marginBottom: vars.spacing.large,
    },
  }),
])

export const errorNumber = style({
  font: vars.font.headlineLarge,
})

export const errorTitle = style({
  font: vars.font.subtitleMedium,
})

export const actions = style({
  marginBlock: vars.spacing.medium,
})
