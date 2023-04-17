import { greaterThan } from '@/styles/responsive.css'
import { vars } from '@/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  userSelect: 'none',
  textAlign: 'center',
  marginBlock: vars.spacing.xxxlarge,
  paddingBlock: vars.spacing.xxxlarge,
})

export const alertContainerImage = style([
  {
    display: 'inline-block',
    borderRadius: '50%',
    overflow: 'hidden',
    objectPosition: 'left bottom',
    marginInline: vars.spacing.medium,
    marginBlock: vars.spacing.medium,
  },
  greaterThan({
    tabletMD: {
      marginBlock: vars.spacing.large,
    },
  }),
])

export const alertImage = style({
  objectPosition: 'left',
})

export const alertTitle = style({
  font: vars.font.headlineLarge,
  marginBottom: vars.spacing.xxxsmall,
})

export const alertDescription = style({
  font: vars.font.bodyLarge,
})

export const actions = style({
  marginBlock: vars.spacing.medium,
})
