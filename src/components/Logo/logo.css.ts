import { greaterThan } from '@/styles/responsive.css'
import { vars } from '@/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  margin: vars.spacing.none,
})

export const photo = style([
  {
    borderRadius: '50%',
    overflow: 'hidden',
    margin: '0px',
    width: '32px',
    height: '32px',
  },
  greaterThan({
    tabletMD: {
      width: '52px',
      height: '52px',
    },
  }),
])

export const linkImage = style({
  display: 'flex',
  alignItems: 'center',
})

export const name = style([
  {
    display: 'none',
    font: vars.font.bodySmall,
    fontWeight: vars.font.weightBold,
    letterSpacing: vars.font.letterSpacing.small,
    marginLeft: vars.spacing.xsmall,
    color: vars.color.yellow[700],
  },
  greaterThan({
    tabletMD: {
      display: 'block',
      font: vars.font.bodyMedium,
      fontWeight: vars.font.weightBold,
    },
    desktopXL: { font: vars.font.subtitleMedium },
  }),
])
