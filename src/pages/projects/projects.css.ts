import { vars } from '@/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  paddingInline: vars.spacing.xxsmall,
})

export const wrapper = style({
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: vars.container.max,
  paddingBlock: vars.spacing.xxxlarge,
})

export const projects = style({})
export const projectsTitle = style({
  font: vars.font.headlineLarge,
})

export const githubProjects = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: 0,
  marginTop: vars.spacing.xxxlarge,
  gap: vars.spacing.xmedium,
})

export const githubProjectItem = style({
  flex: '1 1 30%',
})
