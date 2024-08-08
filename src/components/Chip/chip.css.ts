import { vars } from '@/styles/theme.css'
import { style, styleVariants } from '@vanilla-extract/css'

export const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  borderRadius: vars.borderRadius.small,
  padding: vars.spacing.small,
  paddingInline: vars.spacing.xsmall,
})
export const icon = style({})
export const baseLabelStyle = style({
  color: 'inherit',
})
export const labelStyle = styleVariants({
  bodyLarge: [baseLabelStyle, { font: vars.font.bodyLarge }],
  bodyMedium: [baseLabelStyle, { font: vars.font.bodyMedium }],
  bodySmall: [baseLabelStyle, { font: vars.font.bodySmall }],
  linkLarge: [baseLabelStyle, { font: vars.font.linkLarge }],
  linkMedium: [baseLabelStyle, { font: vars.font.linkMedium }],
  linkSmall: [baseLabelStyle, { font: vars.font.linkSmall }],
  textCaption: [baseLabelStyle, { font: vars.font.textCaption }],
})

export const color = styleVariants({
  white: { color: vars.color.white[900] },
  yellow: { color: vars.color.yellow[700] },
  gray: { color: vars.color.gray[600] },
  black: { color: vars.color.black[900] },
})

export const background = styleVariants({
  yellow: { background: vars.color.yellow[700] },
  gray: { background: vars.color.gray[600] },
  black: { background: vars.color.black[900] },
})
