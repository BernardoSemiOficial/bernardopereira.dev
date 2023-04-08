import { vars } from '@/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  backgroundColor: vars.color.black[800],
  paddingInline: vars.spacing.xsmall,
})

export const wrapper = style({
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: vars.container.max,
  paddingBlock: vars.spacing.xmedium,
})

export const navigation = style({
  display: 'flex',
  alignItems: 'center',
  justifyItems: 'center',
})

export const navItem = style({
  marginInline: vars.spacing.xxxsmall,
  color: vars.color.yellow[700],
  paddingBlock: vars.spacing.xsmall,
  position: 'relative',
  selectors: {
    '&::before': {
      content: '',
      position: 'absolute',
      bottom: '0px',
      height: '2px',
      width: '100%',
      opacity: 0,
      backgroundColor: vars.color.yellow[700],
      borderRadius: vars.borderRadius.small,
      transition: vars.transition.ease,
    },
    '&:hover::before': {
      opacity: 1,
    },
  },
})
