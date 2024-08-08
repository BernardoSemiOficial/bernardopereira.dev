import { vars } from '@/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  cursor: 'pointer',
  border: vars.border.small,
  borderColor: vars.color.black[900],
  color: vars.color.black[900],
  backgroundColor: vars.color.white[900],
  borderRadius: vars.borderRadius.xxsmall,
  paddingBlock: vars.spacing.xmedium,
  paddingInline: vars.spacing.xmedium,
  boxShadow: vars.boxShadow.small,
  width: '100%',
})

export const header = style({
  display: 'flex',
})
export const listLanguages = style({
  marginTop: 0,
  paddingLeft: 0,
  display: 'flex',
  flexWrap: 'wrap',
  overflow: 'hidden',
  height: vars.spacing.xxmedium,
  gap: vars.spacing.xsmall,
})
export const content = style({})
export const title = style({
  color: vars.color.black[900],
  font: vars.font.headlineSmallX,
  marginTop: vars.spacing.xsmall,
  display: '-webkit-box',
  overflow: 'hidden',
  textDecoration: 'ellipsis',
  whiteSpace: 'pre-wrap',
  boxOrient: 'vertical',
  lineClamp: 1,
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 1,
})
export const description = style({
  height: '3rem',
  overflow: 'hidden',
  textDecoration: 'ellipsis',
  display: '-webkit-box',
  boxOrient: 'vertical',
  lineClamp: 2,
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  color: vars.color.black[800],
  font: vars.font.bodySmall,
  marginTop: vars.spacing.xsmall,
})

export const footer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: vars.spacing.xxmedium,
})

export const authorPhoto = style({
  borderRadius: '50%',
  overflow: 'hidden',
  margin: '0px',
  width: '40px',
  height: '40px',
})
export const projectInfo = style({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: vars.spacing.xxsmall,
})
export const authorName = style({
  font: vars.font.linkMedium,
  marginBottom: 0,
})
export const createdAt = style({
  font: vars.font.textCaption,
})

export const readMore = style({})
