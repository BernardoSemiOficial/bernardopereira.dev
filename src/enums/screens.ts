import type { ComplexStyleRule } from '@vanilla-extract/css'

export enum Screens {
  XS = '360px',
  SM = '480px',
  MD = '768px',
  LG = '976px',
  XL = '1280px',
  XLG = '1440px',
  FHD = '1920px',
}

export interface MediaQueries {
  'screen and (min-width: 360px)'?: ComplexStyleRule
  'screen and (min-width: 480px)'?: ComplexStyleRule
  'screen and (min-width: 768px)'?: ComplexStyleRule
  'screen and (min-width: 976px)'?: ComplexStyleRule
  'screen and (min-width: 1280px)'?: ComplexStyleRule
  'screen and (min-width: 1440px)'?: ComplexStyleRule
  'screen and (min-width: 1920px)'?: ComplexStyleRule
}

export type keyScreens = keyof typeof Screens
export type keyMediaQueries = keyof MediaQueries
