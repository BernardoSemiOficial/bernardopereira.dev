import { vars } from '@/styles/theme.css'
import { recipe } from '@vanilla-extract/recipes'

export const link = recipe({
  base: {
    color: 'inherit',
    font: 'inherit',
    borderColor: 'inherit',
    display: 'inline-flex',
  },
  variants: {
    style: {
      default: {},
      underline: {
        paddingBottom: vars.spacing.small,
        borderBottom: vars.border.medium,
      },
    },
    color: {
      black: {
        color: vars.color.black[900],
        borderColor: vars.color.black[900],
      },
      yellow: {
        color: vars.color.yellow[700],
        borderColor: vars.color.yellow[700],
      },
    },
    hover: {
      true: {
        borderBottom: 0,
        ':hover': {
          borderBottom: vars.border.medium,
        },
      },
    },
  },
  defaultVariants: {
    style: 'default',
    color: 'black',
    hover: false,
  },
})
