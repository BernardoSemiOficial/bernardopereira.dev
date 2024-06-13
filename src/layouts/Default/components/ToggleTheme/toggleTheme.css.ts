import { vars } from '@/styles/theme.css'
import { style, styleVariants } from '@vanilla-extract/css'

const toggleHeight = '28px'
const toggleBallHeight = '24px'
const toggleWidth = '54px'

export const toggleRoot = style({
  alignItems: 'center',
  backgroundColor: vars.color.gray[400],
  borderRadius: vars.borderRadius.xmedium,
  cursor: 'pointer',
  display: 'flex',
  height: toggleHeight,
  justifyContent: 'space-between',
  paddingLeft: vars.spacing.small,
  paddingRight: vars.spacing.small,
  position: 'relative',
  width: toggleWidth,
  border: 'none',

  selectors: {
    '&:focus': {
      outline: 0,
    },
    '&:before, &:after': {
      fontSize: vars.font.bodyLarge,
    },
    '&:before': {
      content: '🌜',
    },
    '&:after': {
      content: '🌞',
    },
  },
})

const toggleBall = style({
  backgroundColor: vars.color.white[900],
  border: vars.border.medium,
  borderColor: vars.color.amber[700],
  borderRadius: '50%',
  height: toggleBallHeight,
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  transition: vars.transition.ease,
  width: toggleBallHeight,
  zIndex: vars.zIndex.toggleThemeBall,
})

export const toggleBallVariants = styleVariants({
  light: [
    toggleBall,
    {
      // transform: 'translateY(-50%) translateX(0)',
      left: vars.spacing.small,
    },
  ],
  dark: [
    toggleBall,
    {
      // transform: 'translateY(-50%) translateX(100%)',
      left: `calc(100% - ${toggleBallHeight} - ${vars.spacing.small})`,
    },
  ],
})
